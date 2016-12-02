import request from 'request'

export default (APIKEY, cat) => {
  // console.log(APIKEY)
  // const categories = {
  //   6524 : {
  //     type: 'water pipes',
  //     items: []
  //   },
  //   3434 : {
  //     type : 'bubblers',
  //     items : []
  //   }
  // }

  function addItems(data, cat){
    // if(data.meta.total_count > data.meta.total_count.limit)
    let category = {
      cat : cat,
      items : []
    }
    for(let item of data.objects){
      category.items.push({
        'sku' : item.sku,
        'price' : item.unitPrice,
        'desc' : item.longDesc,
        'img' : item.imageURL
      })
    }
    return category
  }

  // for(let cat in categories){
    // console.log(cat)
  // request
  //   .get(`https://${APIKEY}:X@app.handshake.com/api/v3/items?category=${cat}&limit=1000`)
    // .on('response', (response) =>{
    //   var items = ''
    //   response.on('data', (data) => {
    //     // console.log(data)
    //     items += data.toString('utf-8')
    //   })
    //   response.on('end', ()=>{
    //     addItems(JSON.parse(items),cat)
    //   })
    // })
  // }

  // return categories
  return new Promise( (resolve,rejected)=>{
    request
      .get(`https://${APIKEY}:X@app.handshake.com/api/v3/items?category=${cat}&limit=1000`)
      .on('response', (response) =>{

        var items = ''
        response.on('data', (data) => {
          items += data.toString('utf-8')
        })
        response.on('end', ()=>{
          // console.log(cat)
          resolve(addItems(JSON.parse(items),cat))
        })
    })
  })
}
