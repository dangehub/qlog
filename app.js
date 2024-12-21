const express = require('express')
const app = express()
const port = 8080; 


app.get('/api/search', async (req, res) => {
  //Mock the netlify event
  let event = {queryStringParameters: req.query};

  let response = await searchHandler(event);
  res.status(response.statusCode).send(response.body);
})

app.use(express.static('dist'))

app.get('*', (req, res)=>{
  res.redirect("/404")
})

app.listen(port, () => {
  console.log(`Digital garden running on port ${port}`)
})