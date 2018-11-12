const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))

app.get("/", (req,res) => {
	console.log("Responding...")
	res.send("Hello world!")
})

app.get("/users", (req,res) => {
	//res.send("Nodemon auto updates when I save this file")
	var user1 = {firstName: "Waldo", lastName: "Candaza"}
	const user2 = {firstName: "Carl", lastName: "Geralde"}
	res.json([user1, user2])
})

app.listen(3003, (err) => {
	if (err) { 
		console.log(err); 
	}
	console.log("Server is up and listening on 3003...")
})

