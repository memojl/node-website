const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

app.set('views', __dirname+'/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

//middlewares

//routes
app.use('/', require('./routes/RutasWeb'));

//static files


app.use((req,res,next)=>{
  res.status(404).render('404.html', {
    title: '404',
    msj: 'Página no encontrada'
  });
}); 

//server
app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});