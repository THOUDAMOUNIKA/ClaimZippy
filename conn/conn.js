const mongoose = require("mongoose");

const conn = async(req,res) =>{
    try{
        await mongoose
    .connect("mongodb+srv://mounikathouda710:claimzippy789@cluster0.0iouwh5.mongodb.net/")
    .then(() => {
        console.log("Connected");
    });

    }
    catch (error) {
        console.log(error);
        }
    
};
conn();