import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors'
import helmet from 'helmet';
import { IRoute } from './interface/routes.interface';
import dotenv from 'dotenv'
dotenv.config()
import { dbConnection } from './dbconfig';
import { ErrorHandler } from './utils/errorHandler';

export class App {
   public app:Application
   
  constructor(routes: IRoute[]){
    this.app = express()
    this.initializeMiddleWares()
    this.initializeRoutes(routes)
    this.initializeDbConnection()
    
  }

  private initializeMiddleWares():void{
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(helmet())
    this.app.use(function(err: ErrorHandler, req:Request, res:Response, next:NextFunction){
    res.status(err.status || 500).json({
    message: err.message,
    status: 'error',
    data: null,
  })
})
  }

  private initializeRoutes(routes: IRoute[]):void {
    routes.forEach(routes=> { 
      this.app.use('/api', routes.router)
    });
  }
  private async initializeDbConnection(){
    await dbConnection().catch(err => console.log(err))
  }

  listen(): void {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
