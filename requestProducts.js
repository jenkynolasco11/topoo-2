import request from 'request'

const categories = [
  6524,
  3434,
  4859,
  4709,
  6497,
  3455
]

class Request{
  constructor(API){
    this.APIKEY = API
  }

  filterIt(data){
    let items = []
    for(let item of data){
      items.push({
        'sku' : item.sku,
        'price' : item.unitPrice,
        'desc' : item.longDesc,
        'img' : item.imageURL
      })
    }
    return items
  }

  requestItemsByCategory(category){
    let products = {
      category,
      cat_name : '',
      items : []
    }

    function requestIt(cat, offset, resolve, self){

      self.makeRequest(`https://${self.APIKEY}:X@app.handshake.com/api/v3/items?category=${cat}&offset=${offset}`)
        .then((data)=>{
          data = JSON.parse(data)

          let total_count = data.meta.total_count

          // Get me one category name for record
          if(!products['cat_name']) products['cat_name'] = data.objects[0].category.name

          products.items = products.items.concat(self.filterIt(data.objects))

          if(offset + 100 < total_count){
            offset += 100
            requestIt(cat, offset, resolve, self)
          } else {
            resolve(products)
          }
      })
    }

    let self = this

    return new Promise((resolve, reject) => {
      requestIt(category, 0, resolve, self)
    })
  }


  requestAllItems(){
    // return new Promise((resolve, reject) => {
    return categories.map(this.requestItemsByCategory.bind(this))
    // })
  }

  makeRequest(URL){
    // console.log('makeRequest')
    return new Promise((resolve, reject)=>{
      request.get(URL).on('response', (response)=>{
        let st = ''
        response.on('data', (data)=> { st += data.toString('utf-8')})
        response.on('end', () => resolve(st))
      })
    })
  }
}


export default Request
