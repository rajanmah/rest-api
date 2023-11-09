const express = require("express");
const app = express();
const port = 3000;

// const users = require("./data/users");
const users = require('./routes/userRoutes')
// const posts = require("./data/posts");
const posts = require('./routes/postRoutes')

const bodyParser = require("body-parser");

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/api/users', users)
app.use('api/posts', posts)

//home route
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});


app.use((req, res) => {
  res.status(404);
  res.json({ error: "Resource not found" });
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});



//=========================================

// const express = require ('express');
// const app = express();
// const port = 3000;

// const users= require('./data/users'); //creating database
// const posts = require('./data/posts');

// const bodyParser = require('body-parser') //get body data from data

// //body parser middlewre
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json({extended:true}))


// //HOME Route
// app.get('/', (req, res)=>{
//     res.send('HOME PAGE')
// })

// //creating Routes
// //INDEX _GET get all users data
// app.get('/api/users', (req,res)=>{
//     res.json(users)
// })

// //getting an ids

// // CREATE _ post create a user
// app.post('/api/users', (req, res)=>{
//     if (req.body.name && req.body.username && req.body.email) {
//         if (users.find((u) => u.username == req.body.username)) {
//           res.json({ error: "Username Already Taken" });
//           return;
//         }
  
//         const user = {
//           id: users[users.length - 1].id + 1,
//           name: req.body.name,
//           username: req.body.username,
//           email: req.body.email,
//         };
  
//         users.push(user);
//         res.json(users[users.length - 1]);
//       } else res.json({ error: "Insufficient Data" });
//     });




// app.get('/api/users/:id', (req, res,next)=>{
//     //find the user
//     const user = users.find((u)=> u.id == req.params.id)
//     // console.log(user);
//     //if a user exists display the json data
//     //display the user
//     if (user) res.json(user);
//     else next();
   
// })

// // UPDATE - PUT/PATCH


// //DELETE - DELETE



// // get all posts
// //INDEX -GET displays all posts
// app.get('/api/posts', (req, res)=>{
//     res.json(posts)
// })

// //CREATE - POST add a new post to the database


// // get one post
// //SHOW - GET-shows info about one post

// app.get('/api/posts/:id', (req, res, next)=>{
//     const post= posts.find((p) => p.id == req.params.id)
//     if (post) res.json(post);
//     else next()
// })


// // UPDATE -PUT/PATCH - update a particular post


// //DELETE- DELETE -delete a particular post

// //custom Middleware: 404 not found
// app.use((req, res) => {
//     res.status(404);
//     res.json({ error: "Resource Not Found" });
//   });



// app.listen(port, ()=>{
//     console.log(`Server is running on ${port}`);
// })