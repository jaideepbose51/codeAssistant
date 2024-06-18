import jwt from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET;

function userMiddleware(req, res, next) {
    console.log("Jaideep");
    const token = req.headers.token;
    const decodedValue = jwt.verify(token, JWT_SECRET);

    try{
        if (decodedValue.email) {    
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch(e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
   
}

export default userMiddleware;