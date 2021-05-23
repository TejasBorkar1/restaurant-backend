const Express = require('express');
const BP = require('body-parser');
const Mongoose = require('mongoose');
const Routes = require('./routes');
const Cors = require('cors');
const DotEnv = require('dotenv');
const port = 8081;
DotEnv.config()
const app = Express();
app.use(Cors());
app.use(BP.json());
app.use(BP.urlencoded({extended:true}));
Routes(app);
Mongoose.connect(process.env.db_connect,{useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
app.get('/',(res,req) => 
{
 res.send("welcome")
}
);
app.listen(process.env.port || port, () => {
    console.log('server listening to'+ port) 
})

