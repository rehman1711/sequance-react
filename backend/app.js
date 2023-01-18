const Sequance = require("./sequanceModle.js");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors")
app.use(
  cors({
    origin: "http://localhost:3000",
  })
)
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rehman:17november1998@cluster0.xls8y98.mongodb.net/test", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connection ok..............."))
.catch((err) => console.log(err));

app.get("/get-student-data" , async(req, res) => {});

app.post("/initial", async(req, res) => {
    
      const { isteam, player, team } = req.body;
  
      const data = await Sequance.create({ isteam, player, team });
        res.status(201).json({
        status: "OK",
        data: data,
      });

    });

app.patch("/Update student" , async(req,res) => {});

app.delete("/delete-student" , async(req,res) => {});

app.listen(8000, () => {
    console.log("server has been started")
})