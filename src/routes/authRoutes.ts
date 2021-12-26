import { Router } from 'express';
import { Service } from 'typedi';
import { IRoute } from '../interface/routes.interface';
import { AuthController } from '../controllers/auth.controller';

@Service()
export class AuthRoutes implements IRoute {
    public path = '/auth'
    public router = Router()
    constructor(private authService: AuthController ){
        this.initAllRoutes()
    }

    private initAllRoutes():void {

        this.router.get(`${this.path}/home`, this.authService.home)
        this.router.post(`${this.path}/signup`, this.authService.signup)
    }
}