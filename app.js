const express = require('express');

const loginRouter = express.Router();
const signupRouter = express.Router();
const addbookRouter = express.Router();
const app = express();
const nav = [
    {link:'/books',name:'books'},{link:'/login',name:'login'},{link:'/signup',name:'signup'},{link:'/authors',name:'authors'},{link:'/addbook',name:'add book'}
];
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addbookRouter);

app.get('/',function(req,res){
    res.render("intex",
    {
        nav,
        title:'Library'
    });
});



loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav,
        title:'Welcome'    
    });
});

signupRouter.get('/',function(req,res){
    res.render("signup",
    {
        nav,
        title:'Hurry Up!!!'  
    });
});

addbookRouter.get('/',function(req,res){
    res.render("addbook",
    {
        nav,
        title:'Hurry Up!!!'  
    });
});

app.listen(5000);