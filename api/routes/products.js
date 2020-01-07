const express = require('express');
const router = express.Router();


router.post('/',(req,res,next)=>{
    
    const product = {
        name: req.body.name,
        price: req.body.price,
    }
    
    res.status(200).json({
        message: 'handle POST request in products',
        CreatedProduct: product
        
    });
})

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'handle GET request in products'
    });
})


router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: "u found a special id"
        });
    }else{
        res.status(200).json({
            message: "you passed an ID"
        });
    }
})


//updated

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message: "UPDATE request  on products"
    });
})


//delete
router.delete('/:productId',(req,res,next)=>{
res.status(200).json({
    message: "DELETE request on products"
});
})

module.exports = router;