import express from "express";
const app = express();

//set the view engine to handlebars
app.set("view engine","hbs")

//see the views directory
app.set("views","views")

//middleware to handle json data

app.use(express.json());

const PORT = 5000;


let products=[]
app.get("/products",(req,res)=>{
    res.json(products);
})

app.post("/products",(req,res)=>{
    const p = req.body
    products.push(p)
    res.json({
        message:"product added successfully",
        data:p
    })
})

let shoppingcart = []

app.get("/cart",(req,res)=>{
    res.status(200).json(shoppingcart)
})

app.post("/cart",(req,res)=>{
    const {id,name,price,qty} = req.body
    let x = {id,name,price,qty}
    shoppingcart.push(x)
    res.status(201).json({"message":"Successfully added to cart","data":x})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

})


let data ={
    name:"pranjal pandey",
    products:["sunscreen","lipgloss","blush","lipliner","bb creams"],
    price:250
}

app.get("/new",(req,res)=>{
    res.render("home",{data:data})
})
