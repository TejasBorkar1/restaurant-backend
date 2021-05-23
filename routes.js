const Express= require('express');
const Routes = (app) => {
    app.get('/',(req,res) =>{
        return res.send({message : "The server listening"})
    })
}
module.exports=Routes;