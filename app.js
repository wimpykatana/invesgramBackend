//load our app serving using express somehow..
const express = require('express')
const app = express()

app.get("/",(req,res)=>{
	console.log("respon to root")
	res.send("Hello from ROOOT")
})

app.listen(3003, ()=>{
	console.log("server is up and listen on 3003")
})
