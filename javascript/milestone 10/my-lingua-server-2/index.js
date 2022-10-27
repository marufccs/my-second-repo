const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const courses = require('./data/courses.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Courses all api running')
    });
    
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(n=> n.id === id);
    res.send(selectedCourses);
    })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })