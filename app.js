var express=require('express');
var path=require('path');




var bodyParser=require('body-parser');

var morgan=require('morgan');

var index=require('./routes/index');
var tasks=require('./routes/tasks');

var app=express();
//view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')));
app.use(morgan('dev'));

//bodyParser
app.use(bodyParser());

app.use('/',index);
app.use('/tasks',tasks);

app.listen(3333);
