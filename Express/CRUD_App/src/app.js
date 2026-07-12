import express from 'express'
const app = express();
const port = 4000;


app.use(express.json());


let users = [
    {userId: 101, username: "mohammed arif", age: 23, email: "arif@gmail.com"},
    {userId: 102, username: "roshan", age: 43, email: "roshan@gmail.com"}
]

app.get('/', (req,res, next) => {
    try{
        if(!users) return res.status(404).json({success: false, message: "not user defined"})
        res.status(200).json({success: true, data: users, message: "user get successfully"})
    }catch(error){
        console.log(error.message);
        next(error)
    }
})

app.get('/user/:id', (req, res, next) => {
    try{
        let {id} = req.params;
        let user = users.find((user) => user.userId === Number(id) )
        if(!user) return res.status(404).json({success: false, message: "not user defined"})
        res.status(200).json({success: true, data: user, message: "user get successfully"})
    }catch(error){
        next(error)
    }
})

app.post('/user', (req, res, next) => {
    try{
        let {userId, username, age, email} = req.body;
        let newUser = { userId: users.length+1, username, age, email}
        users.push(newUser);
        res.status(200).json({success: true, data: newUser, message: "user get successfully"})
    }catch(error){
        next(error)
    }
})


app.put('/user/:id', (req, res, next) => {
    try{
        let {id} = req.params;
        let {username, age , email} = req.body;
        let userIndex = users.findIndex((user) => user.userId === Number(id));
        if(userIndex === -1) return res.status(404).json({success: false, message: `User with id: ${id} not found`})
        users[userIndex] = {
            ...users[userIndex],
            username,
            age,
            email,
        }
        return res.status(200).json({success: true, data: users[userIndex], message: "User updated successfully"});
    }catch(error){
        next(error)
    }
})


app.delete('/user/:id', (req, res, next) => {
    try{
        let {id} = req.params;
        let userIndex = users.findIndex((user) => user.userId === Number(id));
        let deletedUser = users.splice(userIndex, 1)[0]
        return res.status(200).json({ success: true, data: deletedUser, message: "User deleted successfully", users: users});
    }catch(error){
        next(error)
    }
})



//* 404 Route Handler
app.use((req, res) => {
    return res.status(404).json({message: `Route ${req.originalUrl} not found`})
})


//* Global Error Handler
app.use((err, req, res, next) => {
    console.error(err);
    return res.status(500).json({success: false, message: err.message || "internal server error"})
})


app.listen(port, () => {
    console.log(`server running on port: http://localhost:${port}`);
});