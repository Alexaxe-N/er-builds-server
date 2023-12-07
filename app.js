import express from "express"
const app = express()
const port = 3000

app.get('/videos', (req, res) => {
    res.json([ 
        { title: 'Video 1', description: 'Awesome descr' }, 
        { title: 'Video 2', description: 'Awesome descr' },
        { title: 'Video 3', description: 'Awesome descr' },
    ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})