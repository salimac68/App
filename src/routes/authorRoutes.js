const express = require('express');
const authorsRouter = express.Router();
function router(nav){
var authors = [
    {
        author: 'JOSEPH BARBERA',
        occupation: 'Animator director producer artist',
        about: 'Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.   ' ,
        img: 'joseph.jpg',
    },
    {
        author: 'J K ROWLING',
        occupation: 'Author, screenwriter, producer, philanthropist',
        about: 'Rowling was born Joanne Rowling on July 31, 1965, in Yate, England. She adopted her pen name, J.K., incorporating her grandmothers name, Kathleen, for the latter initial (Rowling does not have a middle name). A graduate of the University of Exeter, Rowling moved to Portugal in 1990 to teach English.   ',
        img: 'rowling.jpg',
    },
    {
        author: 'VAIKOM MUHAMMAD BASHEER',
        occupation: 'Indian writer',
        about: 'Vaikom Muhammad Basheer (21 January 1908 – 5 July 1994), fondly known as Beypore Sultan, was an Indian independence activist and writer of Malayalam literature . ... The Government of India awarded him the fourth highest civilian honour of the Padma Shri in 1982.   ',
        img: 'bshr.jpg',
    }
]

authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav,
        title:'Library',
        authors
    });
});

authorsRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('author',{
        nav,
        title:'Library',
        author: authors[id]
    });
});

return authorsRouter;

}

module.exports = router; 