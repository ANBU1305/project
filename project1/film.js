
var mongoose=require('mongoose')
var Film=mongoose.model('films'
, {
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Gender:{
        type:String
    },
    Phone:{
        type:Number
    },
    Country:{
        type:String
    },
    State:{
        type:String
    },
    City:{
        type:String
    },
    Percentage:{
        type:Number
    },
    Maths:{
        type:String
    },
    Physics:{
        type:String
    },
    Chemistry:{
        type:String
    },
    Computer_Science:{
        type:String
    },
    Previous_School:{
        type:String
    },
    
    

})

module.exports={ Film };