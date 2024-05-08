const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173' // Allow requests only from this origin
}));

const Students = [
    {
        id: '1',
        fullName: 'Dowen Chris',
        collage: 'Collage of Natural and applied Science',
        department: 'Computer science and IT',
        level: '200 level',
        password:'12345',
        schoolId: 'IUO-19764'
    },
    {
        id: '2',
        fullName: 'Esther Brown',
        collage: 'Collage of Law',
        department: 'LAW',
        level: '500 level',
        password:'56789',
        schoolId: 'IUO-23468'
    },
    {
        id: '3',
        fullName: 'Thomas Light',
        collage: 'Collage of Art',
        department: 'BMS',
        level: '400 level',
        password:'1q2w3e',
        schoolId: 'IUO-34578'
    }
]

app.post('/loginData', (req, res) => {
    const {schoolId, password} = req.body;
    const Student = Students.find(Student => Student.schoolId === schoolId)

    if (!Student) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (Student.password !== password) {
        return res.status(401).json({ error: 'Invalid password' });
    }

    res.json({ success: true, message: 'Login successful', user });
});

 app.post('/Signup', (req, res) => {
     const {fullName, collage, department, level, password} = req.body;
     res.json({success: true, message: 'Form submitted', data: {fullName, collage, department, level, password}});
 });


app.listen(port, () => {
    console.log(`Severe is runing of port ${port}`)
})