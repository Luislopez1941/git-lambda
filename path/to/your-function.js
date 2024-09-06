const https = require('https');

// Datos que deseas enviar
const postData = JSON.stringify({
  email: 'luisl@gmail.com',
  password: 'Luis2001'
});

const options = {
  hostname: 'back-ecommerce-bjt2.onrender.com',
  port: 443,
  path: '/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(`Respuesta de la API: ${res.statusCode} ${res.statusMessage}`);
    console.log(`Cuerpo de la respuesta: ${data}`);
  });
});

req.on('error', (e) => {
  console.error(`Error: ${e.message}`);
});

req.write(postData);
req.end();
