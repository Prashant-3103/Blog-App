import { verify } from "jsonwebtoken";
import User from "../model/user";

export const authGuard = async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const { id } = verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(id).select("-password");
            next();
        } catch (error) {
            let err = new Error("Not authorized, token failed");
            err.statusCode = 401;
            next(err);
        }
    } else {
        let error = new Error("Not authorized, no token");
        error.statusCode = 401;
        next(error);
    }
};

export const adminGuard=(req,res,next)=>{
    if(req.user && req.user.admin)
    {
next()
    }
    else{
        let error = Error("Not autorized as admin");
        error.statusCode = 401;
        next(error)
    }
}
