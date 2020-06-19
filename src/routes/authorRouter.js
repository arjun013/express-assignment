const express = require("express");
const authorRouter = express.Router();

const authors = [
	{
		name: "M T Vasudevan Nair",
		books: ["Randamoozham","Nalukettu","Asuravith"],
		description:"Madath Thekkepaattu Vasudevan Nair (born 9 August 1933), popularly known as MT, is an Indian author, screenplay writer and film director.[3] He is a prolific and versatile writer in modern Malayalam literature, and is one of the masters of post-Independence Indian literature.[4][5] He was born in Kudallur, a small village in the present day Anakkara panchayath in Pattambi Taluk, Palakkad district (Palghat), which was under the Malabar District in the Madras Presidency of the British Raj.",
		img:"author1.jpg"
	},
	{
		name: "Fyodor Dostoyevsky",
		books: ["Crime & Punishment","The Brothers Karamazov"," Notes from Underground "],
		description:"Fyodor Mikhailovich Dostoevsky, sometimes transliterated Dostoyevsky, was a Russian novelist, short story writer, essayist and journalist. Dostoevsky's literary works explore human psychology in the troubled political, social, and spiritual atmospheres of 19th-century Russia, and engage with a variety of philosophical and religious themes. His most acclaimed works include Crime and Punishment (1866), The Idiot (1869), Demons (1872), and The Brothers Karamazov (1880).",
		img:"author2.jpg"
	},
	{
		name: "Banyamin",
		books: ["Aadujeevitham","Manja Veyil Maranangal","Jasmin Days"],
		description:`Benyamin (born Benny Daniel in 1971) is an Indian novelist and short story writer in Malayalam language from Nhettur, Kulanada, near Pandalam of the south Indian state of Kerala. He lived in the Kingdom of Bahrain from 1992 to 2013, before returning to Kerala.[1] His works appear regularly in Malayalam publications in Kerala.Goat Days (Aadujeevitham), his most famous novel, portrays the life of an Indian labourer in Saudi Arabia. It is used as a textbook at Kerala University, Calicut University, Bharathiar University, Pondicherry University and 10th standard for Kerala State syllabus.`,
		img:"author3.jpg"
	}
];
const router = nav => {
	
	authorRouter.get("/",(req,res) => {
		res.render("authors",{
		authors,
		nav,
		title:"Authors",
		head :"AuthorS"
		});
	});
	authorRouter.get("/:id", (req,res) =>{	
		
		const title = req.params.id;
		const id = title.slice(6,title.length)//I used author1, author2 etc as index
		res.render("author",{
		nav,
		title,
		head :`Author ${id}`,
		authors : authors[id-1]
	})

	} )
	return authorRouter;
}

module.exports = router;