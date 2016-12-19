import { Router } from 'express'

const router = Router()

// console.log('I am here...')
// /products/
router.get('/', (req,res)=>{
  console.log('it tried to get here')
  // res.send(
  //   JSON.stringify(allProducts[0])
  // )
})

export default router
