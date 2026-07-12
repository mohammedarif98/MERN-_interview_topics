import express from "express";
const app = express();
const port = 4000


let users = [
    {userId: 101, username: "mohammed arif", age: 23, email: "arif@gmail.com"},
    {userId: 102, username: "roshan", age: 43, email: "roshan@gmail.com"}
]


app.get('/', (req, res, next) => {
    try{
        if(!users) return res.status(404).json({success: false, message: "failed to fetch users"})
        res.status(200).json({success: true, userData: users, message: "users get successfully"})
    }catch(error){
        console.log(error.message);
        next(error)
        // res.status(500).json({success: false, message: error.message || "interner server error"})        //* without using global error handler
    }
})


app.get('/user/:id', (req, res, next) => {
    try{
        const {id} = req.params;
        let user = users.find((user) => user.userId === parseInt(id));
        if(!user) return res.status(404).json({success: false, message: "user not found"})
        res.status(200).json({success: true, userData: user, message: "user get successfully"})
    }catch(error){
        console.log(error.message);
        next(error)
    }
})


//* 404 Route Handler
app.use((req, res) => {
    res.status(404).json({message: `Route ${req.originalUrl} not defined`})
})

//* Global Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({success: false, message: err.message || "internal server error"})
})


app.listen(port,() => {
    console.log(`server running on port: http://localhost:${port}`);
})