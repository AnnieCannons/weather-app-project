// const express = require('express'); //external module for using express
// const { Client } = require('pg') //external module for using postgres with node
// const config = require('./config.js'); // internal module for connecting to our config file
// const cors = require("cors");


// const app = express();

// app.use(cors(corsOptions));
// const port = 3000;

// app.use(express.json());

// const client = new Client(config); //creating our database Client with our config values

// //NEW CODE
// const getCities = async () => {
//   await client.connect() //connecting to our database
//   const result = await client.query('SELECT * FROM saved_city');
//   console.log(result.rows);
//   await client.end() //ending the connection to our database
//   return result.rows;
// };

// app.get('/get-cities', async (req, res) => {
//   const cities = await getCities();
//    // This will allow us to connect our localhost frontend to make the API call. Check to see if your port is the same. Without this extra code, the browser will throw an error because it will think there is a security risk.
//    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500').send(cities);
// });


// const getCity = async(id)=>{
//     const cities = await getCities ();
//     res.send(cities)
// }

// app.get('/get-city/:id',async (req,res)=>{
// const city = await client.query(`SELECT * FROM saved_city WHERE id = ${id} `)
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:5500`);
// });

const express = require('express');
const { Client } = require('pg');
const config = require('./config.js');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Allow all origins

app.use(express.json());

const client = new Client(config);

const getCities = async () => {
  await client.connect();
  const result = await client.query('SELECT * FROM saved_city');
  console.log(result.rows);
  await client.end();
  return result.rows;
};

app.get('/get-cities', async (req, res) => {
  const cities = await getCities();
  res.header('Access-Control-Allow-Origin', '*').send(cities);
});

// app.get('/get-city/:id', async (req, res) => {
//   const id = req.params.id;
//   const city = await client.query(`SELECT * FROM saved_city WHERE id = ${id}`);
//   res.header('Access-Control-Allow-Origin', '*').send(city.rows);
// });

const deleteCity = async (id) => {
    await client.connect()
    const result = await client.query(`DELETE FROM saved_city WHERE id = ${id}`)
    console.log(result.rows);
    await client.end()
    return result.rows;
};

app.delete('/delete-city/:id', async (req, res) => {
    const city = await deleteCity(req.params.id);
    res.send(city);
    });
    

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`);
});


