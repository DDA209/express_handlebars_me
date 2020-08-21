const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const port = 3004;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
    console.log('GET /');
    console.log('req.param', req.param);
    res.render('home', {
        hello: 'bonjour'
    });
});



app.listen(port, () => {
    console.log(`serveur OK on port ${port}`);
});