import express, { Application, Request, Response, NextFunction } from 'express';
import { IRoute } from './interfaces/routes.interfaces';


export class App {
   public app:Application
   
  constructor(routes: IRoute[]){
    this.app = express()
    this.initMiddleWares()
    this.initRoutes(routes)
    
  }

  private initMiddleWares():void{
    this.app.use(express.json())
  }

  private initRoutes(routes: IRoute[]):void {
    routes.forEach(routes=> { 
      this.app.use('/api', routes.router)
      
    });
  }
  listen(): void {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
