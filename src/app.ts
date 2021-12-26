import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors'
import helmet from 'helmet';
import { IRoute } from './interface/routes.interface';
import dotenv from 'dotenv'
dotenv.config()
import { dbConnection } from './dbconfig';

export class App {
   public app:Application
   
  constructor(routes: IRoute[]){
    this.app = express()
    this.initMiddleWares()
    this.initRoutes(routes)
    this.initDbConnection()
    
  }

  private initMiddleWares():void{
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(helmet())
  }

  private initRoutes(routes: IRoute[]):void {
    routes.forEach(routes=> { 
      this.app.use('/api', routes.router)
    });
  }
  private async initDbConnection(){
    await dbConnection().catch(err => console.log(err))
  }

  listen(): void {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
