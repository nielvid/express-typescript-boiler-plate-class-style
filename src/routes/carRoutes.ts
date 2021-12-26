import { Router } from "express";
import { Service } from "typedi";
import { CarController } from "../controllers/car.controller";

@Service()
export class CarRoute {
    path = '/'
    router = Router()
    constructor(private carServices: CarController){
        this.initCarRoutes()
    }

    initCarRoutes():void{
        this.router.post('/car', this.carServices.registerCar)
        this.router.get('/cars',this.carServices.findAll)
    }
}