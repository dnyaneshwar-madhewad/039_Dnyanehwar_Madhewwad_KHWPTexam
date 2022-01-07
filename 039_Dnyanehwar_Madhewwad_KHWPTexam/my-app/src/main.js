const express= require("express");
const app= express();

app.use(express.json());
const cors=require("cors");
app.use(cors());

const { addUser, selectAlluser } =require("./user");

app.get("/users", async (req, res) => {
    const list= await selectAlluser();
    res.json(list);

});

app.post("/add-user", async (req,res)=>{
   const user = req.body;
   await addUser(user);
   res.json({ message: "msg added succeccfully"});

});

app.listen(4000, () => console.log("Server started"));