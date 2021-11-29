const url = `http://localhost:4000/api/`

// class ApiModel {
//     static all = () => {
//         return fetch(`${url}`).then(res => res.json())
//       }

//       static create = (apiData) => {
//         return fetch(`${url}`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//         })
//         .then(res => {
//             res.json()
//           })
//       }
    
// }

// const apiModel = fetch("http://localhost:4000/api")
// .then(response => {
//     console.log(response.json())
//     return response.json();
    
// })

// const data = fetch(url)
// .then(res => {
//   try {
//     if (res.ok) {
//         console.log(res.json)
//       return res.json()
//     } else {
//       throw new Error(res)
//     }
//   }
//   catch (err) {
//     console.log(err.message)
//     return "error print"
//   }
// })
// .then (resJson => {
//   return resJson.data
// })
// .catch(err => console.log(err))

// export default data
// console.log(ApiModel)
// export default ApiModel


async function getData(){
    let response = await fetch(url)
    let data = await response.json()
    console.log("data")
    console.log(data)


    //function that can get a random number from 1-25, 
        //we'll use this to target a random result from our search results object!
        function randomNumber(){
            const randNum = Math.floor(Math.random() * 25)
            return randNum
            }
            //categories response is an array, let's loop through the categories
            let products = []
        
            for (let i=0; i<11; i++) {
            //get random number which we will use as index
            const randomIndex = randomNumber()
            console.log(randomIndex)

            //get product name from API response 
            const productName = data.results[randomIndex].title
            console.log(productName)
    
    
            //get product URL from API response
            const productURL = data.results[randomIndex].url
            console.log(productURL)
    
            //get product image from API response
            const productImage = data.results[randomIndex].MainImage.url_fullxfull
            console.log(productImage)
            products[i] = {
                name: productName,
                image: productImage,
                url: productURL 
                };
            }
            console.log(products);
    
    
        
    
        
            // res.json(response.data)
        
            

    console.log("products")
    console.log(products)
    return products
}

getData().then(data => console.log(data))

export default getData