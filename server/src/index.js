const express = require('express'); //external module for using express
const { Client } = require('pg') //external module for using postgres with node
const config = require('./config.js'); // internal module for connecting to our config file

const app = express();
const port = 3000;

app.use(express.json());

const client = new Client(config); //creating our database Client with our config values

//NEW CODE
const getCities = async () => {
  await client.connect() //connecting to our database
  const result = await client.query('SELECT * FROM saved_city');
  console.log(result.rows);
  await client.end() //ending the connection to our database
  return result.rows;
}

app.get('/get-cities', async (req, res) => {
  const cities = await getCities();
   // This will allow us to connect our localhost frontend to make the API call. Check to see if your port is the same. Without this extra code, the browser will throw an error because it will think there is a security risk.
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5501').send(cities);
});

const createCity = async (cityName) => {
    await client.connect() //connecting to our database
    const maxIdResult = await client.query('SELECT MAX(id) AS max_id FROM saved_city');
    const maxId = maxIdResult.rows[0].max_id || 0; // Handle the case when the table is empty
   console.log("maxId", maxId);
    const nextId = maxId + 1;
    console.log("nextId", nextId);
    const result = await client.query(`INSERT INTO saved_city (city_name) VALUES (${nextId}, ${cityName})`)
    console.log("result rows", result.rows);
    await client.end() //ending the connection to our database
    return result.rows;
  
  }
  
  
  app.post('/create-city', async(req, res) => {
    const city = await createCity(req.body.cityName);
    res.send(city)
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});