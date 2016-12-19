import { Router } from 'express'

const router = Router()

// console.log('I am here...')
// /products/
router.get('/', (req,res)=>{
  res.send(
    JSON.stringify(allProducts[0])
  )
})

export default router
