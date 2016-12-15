import dotenv from 'dotenv'

dotenv.config()

const APIKEY = process.env.APIKEY

if(!APIKEY) throw new Error('No API key provided')

import express from 'express'
// import request from 'request'

// import products from './products/index'
import rProducts from './requestProducts'

const products = new rProducts(APIKEY)


let allItems = []

let promises = products.requestAllItems()

Promise.all(promises).then((products)=>{

  allItems = [].concat(products)
  // products.forEach((data) => {
  //   allItems = Object.assign({}, allItems, data)
  // })
  if(allItems.length) console.log('all products fetched')
  else console.log('something happened on fetching the products')
})

const app = express()

// console.log(prodCat)
app.set('view engine', 'html')
app.set('views', './views')

app.use('/static', express.static('./static'))
app.use('/', express.static('./static'))

/* Routes */
app.get('/', (req,res) => {
  res.render('/static/index')
})

app.get('/items', (req,res) =>{
  console.log('requesting items...')
  console.log(allItems.length)
  res.end(JSON.stringify(allItems))
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}...`)
})
