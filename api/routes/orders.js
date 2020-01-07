const express = require('express');
const router = express.Router();


router.post('/',(req,res,next)=>{
    res.status(200).json({
        message: 'handle POST request in orders'
    });
})

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'handle GET request in orders'
    });
})


router.get('/:orderId',(req,res,next)=>{
    const id = req.params.orderId;
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

router.patch('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message: "UPDATE request  on orders"
    });
})


//delete
router.delete('/:orderId',(req,res,next)=>{
res.status(200).json({
    message: "DELETE request on orders"
});
})

module.exports = router;