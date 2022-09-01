const express = require('express');
const axios = require('axios');
const countries = require('./country.json');
const app = express();

// Lab Routing 1
// app.get('/', (req, res) => {
//   res.send('<h2>My First Web App using Express</h2>');
// });

// app.get('/', (req, res) => {
//   res.json({ title: 'My First Web App', message: 'Our Web App API' });
// });

// Lab Routing 2
// app.get('/todos', (req, res) => {
//   res.json({ message: 'GET todos' });
// });
// app.post('/todos', (req, res) => {
//   res.json({ message: 'POST todos' });
// });
// app.put('/todos', (req, res) => {
//   res.json({ message: 'PUT todos' });
// });
// app.patch('/todos', (req, res) => {
//   res.json({ message: 'PATCH todos' });
// });
// app.delete('/todos', (req, res) => {
//   res.json({ message: 'DELETE todos' });
// });

// Lab Routing 3
// app.get('/redirect', (req, res) => {
//   res.redirect('https://google.com');
// });

// Lab Routing 4
// app.get('/404', (req, res) => {
//   res.status(404).send('<h1>This page is not found</h1>');
// });

// Lab Routing 5
// app.get('/', (req, res) => {
//   res.send('<h1>Welcome to My Website</h1>');
// });
// app.get('/home', (req, res) => {
//   res.send('<h1>This is home page</h1>');
// });
// app.use((req, res) => {
//   res.status(404).send('<h1>Page not found</h1>');
// });

// Lab Routing 6
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html');
// });
// app.get('/home', (req, res) => {
//   res.sendFile(__dirname + '/views/home.html');
// });
// app.use((req, res) => {
//   res.status(404).sendFile(__dirname + '/views/notfound.html');
// });

// Lab Routing 7
// app.get('/', (req, res) => {
//   res.send('<a href="/login">login</a><a href="/register">register</a>');
// });

// app.get('/login', (req, res) => {
//   res.sendFile(__dirname + '/views/login.html');
// });

// app.get('/register', (req, res) => {
//   res.sendFile(__dirname + '/views/register.html');
// });

// app.post('/submit-login', (req, res) => {
//   res.redirect('/');
// });

// app.post('/submit-register', (req, res) => {
//   res.redirect('/');
// });

// Lab Query String 1
// app.get('/sum', (req, res) => {
//   const query = req.query; // { a: '5', arr: '[1, 4, 5]' }
//   // Object.values(query) // [object values]
//   const sum = Object.values(query).reduce((acc, item) => {
//     const value = JSON.parse(item);
//     if (Array.isArray(value)) {
//       acc += value.reduce((accInner, el) => accInner + +el, 0);
//     } else {
//       acc += +value;
//     }
//     return acc;
//   }, 0);
//   res.status(200).json({ sum });
// });

// Lab Query String 2
// app.get('/countries', (req, res) => {
//   const { region, nameinclude, limit, offset } = req.query;
//   let result = countries;
//   if (region) {
//     result = result.filter(
//       item => item.region.toLowerCase() === region.toLowerCase()
//     );
//   }
//   if (nameinclude) {
//     result = result.filter(item =>
//       item.name.common.toLowerCase().includes(nameinclude.toLowerCase())
//     );
//   }
//   if (offset) {
//     result = result.slice(offset);
//   }
//   if (limit) {
//     result = result.slice(0, limit);
//   }
//   res.status(200).json({ countries: result });
// });

// Lab Params 1
// app.get('/sum/:a/:b', (req, res) => {
//   const { a, b } = req.params;
// });

// app.post('/products/:id', (req, res) => {
//   const { id } = req.params;
// });

// app.get('/users/:id/bookings/:bId', (req, res) => {
//   const { id, bId } = req.params;
// });

// Lab Params 2
// app.get('/countries/:commonName', (req, res) => {
//   const { commonName } = req.params;
//   const country = countries.find(
//     item => item.name.common.toLowerCase() === commonName.toLowerCase().trim()
//   );
//   res.status(200).json({ country });
// });

// Lab Body 1
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get('/users', (req, res) => {
//   const body = req.body; // body.id, body.eamil
//   const { id, email } = req.body;
// });

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
// });

// app.put('/products/:id', (req, res) => {
//   const { name, price, description } = req.body;
//   const { id } = req.params;
// });

// app.delete('/products', (req, res) => {
//   const { productId } = req.body;
// });

// Lab Middleware 1
// app.use(express.json());
// app.use(cors());

// // Lab Middleware 2
// ใส่ไว้ในตำแหน่งท้ายๆของ middleware stack
// app.use((req, res) => {
//   res.status(404).json({ message: 'resource not found on this server' });
// });

// app.all('*', (req, res) => {
//   res.status(404).json({ message: 'resource not found on this server' });
// });

// // Lab Middleware 3
// const router = express.Router();
// router.get('/', (req, res) => {
//   res.json({ message: 'GET method' });
// });
// router.get('/:id', (req, res) => {
//   res.json({ message: 'GET BY ID method' });
// });
// router.post('/', (req, res) => {
//   res.json({ message: 'POST method' });
// });
// router.put('/:id', (req, res) => {
//   res.json({ message: 'PUT method' });
// });
// router.delete('/:id', (req, res) => {
//   res.json({ message: 'DELETE method' });
// });

// router
//   .route('/')
//   .get((req, res) => {
//     res.json({ message: 'GET method' });
//   })
//   .post((req, res) => {
//     res.json({ message: 'GET method' });
//   });

// router
//   .route('/:id')
//   .get((req, res) => {
//     res.json({ message: 'GET method' });
//   })
//   .put((req, res) => {
//     res.json({ message: 'GET method' });
//   })
//   .delete((req, res) => {
//     res.json({ message: 'GET method' });
//   });

// app.use('/todos', router);

// Lab Middleware 4
app.get('/dog', async (req, res, next) => {
  try {
    const data = await axios.get('https://dog.ceo/api/breeds/image/random ');
    res.status(200).json({ image: data.data.message });
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

app.listen(9999, () => console.log('server running on port 9999'));
