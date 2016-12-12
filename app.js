// import express from 'express'
// import { config } from 'dotenv'
// config()
import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import request from 'request'

import products from './products/index'
import reqProd from './requestProducts'

// TODO: Fix this later
const APIKEY = process.env.APIKEY
// console.log(APIKEY)
const app = express()

const categories = [
  6524,
  3434
]
const allProducts = []
// TODO: make a promise to return the values
Promise.all(categories.map((cat)=> reqProd(APIKEY,cat))).then( (data) => {
  // all loaded
  allProducts.push(data)
  console.log('All products fetched')
}, (data) => {
  // error
})
// console.log(prodCat)
app.set('view engine', 'html')
app.set('views', './static')
app.use('/static', express.static('./static'))
app.use('/', express.static('./static'))

// app.use('/', products)

/* Routes */
app.get('/', (req,res) => {
  console.log(allProducts)
  // console.log('here')
  res.render('/static/index')
})

app.get('/items', (req,res) =>{
  res.send(allProducts)
})
// app.get('/', (req, res) => {
//   request
//     .get(`https://${apikey}:X@app.handshake.com/api/v3/items?category=6524&limit=2`)
//     .on('response', (response) =>{
//       var items = ''
//       response.on('data', (data) => {
//         items += data.toString('utf-8')
//       })
//       response.on('end', ()=>{
//         res.send(items)
//       })
//     })
// })

app.listen(8000, () => {
  console.log('running server on port 8000')
})
