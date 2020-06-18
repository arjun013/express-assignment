const express = require("express");
const bookRouter = express.Router();

const books = [
	{
		title : "Jasmin Days",
		author : "Banyamin",
		genre : "Novel",
		img :"book1.jpg"
	},
	{
		title : "Francis Itty Kora",
		author : "T.D. Ramakrishnan",
		genre : "Surreal",
		img :"book2.jpg"
	},
	{
		title : "Crime & Punishment",
		author : "Fyodor Dostoyevsky",
		genre : "Psychological Thriller",
		img :"book3.jpg"
	},
	{
		title : "Aarachaar",
		author : "K R Meera",
		genre : "Novel",
		img :"book4.jpg"
	}
];
const router = nav => {
	bookRouter.get("/",(req,res) =>{
	res.render("books",{
		books,nav,
		title:"Books",
		head :"BookS"
	})
	});
	bookRouter.get("/:id",(req,res) =>{
		const title = req.params.id;
		const id = title.slice(4,title.length)//I used book1, book2 etc as index
		res.render("book",{
		nav,
		title,
		head :`Book ${id}`,
		books : books[id-1]
	})
	});
	

	return bookRouter;
}


module.exports = router;