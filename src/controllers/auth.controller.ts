
import { Request, Response } from 'express';

export class AuthController {
    constructor(){}

    home = async(req:Request, res:Response)=>{
         res.status(200).send("Homepage")
    }

}
