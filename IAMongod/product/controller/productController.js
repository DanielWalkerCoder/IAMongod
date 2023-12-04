const Product = require('../model/Product')

module.exports = {
    getAllProducts: () => {
        return new Promise((resolve, reject) =>{
            Product.find({})
            .then((payload) =>{
                resolve(payload)
            })
            .catch(error =>{
                reject(error)
            })
        })
    },
    createProduct: (body)=>{
        return new Promise((res, rej) =>{
            let newProduct = new Product({
                productName: body.productName,
            })
            return newProduct.save()
            .then(newProduct =>{
                res(newProduct)
            })
            .catch((error)=>{
                rej(error)
            })
        })
    },
    deleteProductByID: (id)=>{
        return new Promise((res, rej)=>{
            Product.findByIdAndDelete({_id: id})
            .then(payload =>{
                res(payload)
            })
            .catch(error =>{
                rej(error)
            })
        })
    },
    updateProductByID: (id, body) =>{
        return new Promise((res, rej)=>{
            Product.findByIdAndUpdate(
                {_id: id},
                body,
                {new: true}
            )
            .then((payload)=>{
                res(payload)
            })
            .catch((err)=>{
                rej(err)
            })
        })
    },
    getProductByID: (id) => {
        return new Promise((resolve, reject) =>{
            Product.find({_id: id})
            .then((payload) =>{
                resolve(payload)
            })
            .catch(error =>{
                reject(error)
            })
        })
    },
}