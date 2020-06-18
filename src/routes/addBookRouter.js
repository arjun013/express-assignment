const express = require("express");
const ejs = require("ejs");
const addBookRouter = express.Router();
const fields = [
		{
			type:"text",
			id:"name",
			label:"BOOK NAME",
			accept:""
		},
		{
			type:"text",
			id:"author",
			label:"AUTHOR NAME",
			accept:""
		},
		{
			type:"text",
			id:"genre",
			label:"GENRE",
			accept:""
		},
		{
			type:"file",
			id:"authorImg",
			label:"IMAGE OF AUTHOR",
			accept:"image/*"
		}
	]

const router = nav =>{
	addBookRouter.get("/",(req,res) =>{
		res.render("addBook",{
			nav,
			fields,
			title:"add book",
			head:"New Book"
		})
		

	})
	return addBookRouter;

};
module.exports = router;
