const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('Course API is Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/course', (req, res)=>{
    res.send(course)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
        const category_course = course.filter(n => n.category_id === id);
        res.send(category_course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n._id === id);
    res.send(selectedCourse);
});




app.listen(port, () => {
    console.log('Course Server running on port', port);
})
