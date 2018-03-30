const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({helloWorld: "Hello Employers, I know MERN"})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT);