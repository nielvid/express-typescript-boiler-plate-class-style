
import { Request, Response, NextFunction } from 'express';
import { Container, Service } from 'typedi';
import { User } from '../models/user.model';

@Service()
export class AuthController {
    constructor(){}

    home = async(req:Request, res:Response)=>{
         res.status(200).send("Homepage")
    }
    signup = async (req:Request, res:Response, next: NextFunction) => {
        try {
            const data = req.body
            const user  = await User.create(data)
            return res.status(201).send(user)
        } catch (error) {
            return 'error'
        }
        
    }

}
