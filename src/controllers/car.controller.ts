import { Logger} from './../utils/logger';
import { Cars, Car} from './../models/car.model';
import { model, Model, Schema} from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';
import { ErrorHandler } from '../utils/errorHandler';

@Service()
export class CarController {
    
    constructor(){
        
    }

    registerCar = async(req:Request, res:Response, next:NextFunction)=>{
        try {
           const data = req.body
           if(!data.production_year){
                Logger.error('error in data submitted', {req: req.body})
                throw new ErrorHandler(400, 'invalid data')
           }
            const car = await Car.create(req.body)
            if(!car) throw new ErrorHandler(400, 'car not registered')
        res.status(201).json({     
        status: "successful",
        message: "car registered",
        data: 'car'
    })
        } catch (error: any) {
            next(new ErrorHandler(error.status, error.message))
        }
    }
    async findAll(req:Request, res:Response, next:NextFunction){
        try {
            res.status(200).send(await Car.find())
        } catch (error:any) {
            next(new ErrorHandler(400, error.message))
        }
    }
}