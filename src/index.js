import Express from "express"; 
import jsonwebtoken from "jsonwebtoken";
const jwt = jsonwebtoken;
const app = Express();
const secretKey = "thisissecret";

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if(bearerHeader !== undefined) {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    }
    else {
        res.send({
            result: "Invalid token"
        });
    }
}

app.get("/", (req, res) => {
    console.log(req.query);
    return res.send(req.query);
});

app.post("/login", (req, res) => {
    const user = {
        id: 1, 
        username: "Yashodeep",
        email: "Test@example.com"
    };
    jwt.sign({ user }, secretKey, { expiresIn: '300s'}, (error, token) => {
        res.json({
            token
        });
    });
});

app.get("/blogs", verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (error, authData) => {
        if(error) {
            return res.send({
                result: "Invalid Token"
            });
        }
        else {
            return res.json({
                message: "profile accessed"
            });
        }
    });
});



app.listen(3000, () => {
    console.log("App running on http://localhost:3000")
})