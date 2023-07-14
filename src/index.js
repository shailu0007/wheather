const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

// variable
const port = 5000;

//path
app.use(express.static(path.join(__dirname,"../public")))
const templateview = path.join(__dirname,"../template/view");
const partialpath = path.join(__dirname,"../template/partials");

//hbs
hbs.registerPartials(partialpath);
app.set("views",templateview);
app.set("view engine","hbs");



app.get('/',(req,res)=>{
res.render("index",{title:"Wheather App "});
});

app.get('/about',(req,res)=>{
    res.render("about",{title:"Wheather About"});
    });

app.get('/wheather',(req,res)=>{
        res.render("wheather",{title:"Wheather report"});
        });

app.get('*',(req,res)=>{
    res.render("error404",{
        errorMsg:"Oops! page not found"
    });
    });







app.listen(port,()=>{
    console.log(`running server on ${port}`);
})