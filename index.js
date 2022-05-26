const express = require('express');
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');

// use static files i.e CSS, js, images
app.use(express.static('./assets'));

//use layout
app.use(expressLayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts', true);


// use express router
app.use('/', require('./routes/index'))

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, function(err){
    if(err)
    {
        console.log(`Error in running the server, ${err}`);
        return;
    }

    console.log(`server is running on port number ${port}`);
})