const express = require('express');
const router = express.Router();

const productController = require('./controller/productController')

const {
    getAllProducts,
    createProduct,
    getProductByID,
    updateProductByID,
    deleteProductByID
} = productController

router.get('/get-all-products', (req, res) =>{
    getAllProducts()
    .then((payload) =>{
        res.json({message: "Success", data: payload})
    })
    .catch((error) =>{
        res.status(500).json({message: "error", error})
    })
})

router.post('/create-product', (req, res) =>{
    createProduct(req.body)
    .then((payload)=>{
      res.json({message: "success", data: payload})
    })
    .catch((err) => {
      res.status(500).json({message: "Error", err})
    })
  })

router.delete('/delete-product-by-id/:id', (req, res)=>{
	deleteProductByID(req.params.id)
	.then(payload =>{
		res.json({message: "success", data: payload})
	})
	.catch(error=>{
		res.json({message: "Error", error})
	})
})

router.put('/update-product-by-id/:id', (req, res)=>{
    updateProductByID(req.params.id, req.body)
    .then((payload) =>{
      res.json({message: "Success", data: payload})
    })
    .catch((error) =>{
      res.status(500).json({message: "error", error})
    })
  })

router.get('/get-product-by-id/:id', (req, res) =>{
    getProductByID(req.params.id)
    .then((payload) =>{
        res.json({message: "Success", data: payload})
    })
    .catch((error) =>{
        res.status(500).json({message: "error", error})
    })
})


module.exports = router;