import { Router } from 'express';
import { IRoute } from '../interfaces/routes.interfaces';
import { AuthController } from '../controllers/auth.controller';

export class AuthRoutes implements IRoute {
    public path = '/auth'
    public router = Router()
    constructor(private authService: AuthController ){
        this.initAllRoutes()
    }

    private initAllRoutes():void {

        this.router.get(`${this.path}/home`, this.authService.home)
    }
}