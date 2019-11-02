// IMPORT EXTERNAL
let express = require('express');
let app     = express();

// IMPORT INTERNAL
let { CALCU_FUNCTION } = require('./helpers');

app.get('/', function(request, response){
    response.json({
        username: 'hellox'
    })
});

app.get('/demo/:username/:age?', (req, res) => {
    let { username, age } = req.params;
    res.json({
        username, age
    });
});

// /demo2?username=abc&age=12
app.get('/demo2', (req, res) => {
    let { username, age } = req.query;
    res.json({ username, age })
});

app.get('/demo3/:calcu/:numA/:numB', (req, res) => {
    let { calcu, numA, numB } = req.params;
    let result = CALCU_FUNCTION(calcu, numA, numB);
    res.json({
        result
    })
});

app.get('/calcu', (req, res) => {
    let { calcu, numA, numB } = req.query;

    let calcuRequire = ['sum', 'sub', 'div', 'mul'];
    if (!calcuRequire.includes(calcu))
        return res.json({ error: 'invalid_calcu' });
    
    if (Number.isNaN(Number(numA)) || Number.isNaN(Number(numB)) ) 
        return res.json({ error: 'numA_numB_must_number' });
    
    let result = CALCU_FUNCTION(calcu, numA, numB);
    res.json({
        result
    })
})

app.get('*', (req, res) => {
    res.json({ error: 'not found' })
})

app.listen(3000, function() {
    console.log(`server start at port 3000`);
});