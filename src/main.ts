import { Container } from 'typedi';
import { App } from "./app";
import { routes } from "./routes"; 

const main = async ()=>{
    const app = new App(routes)
    app.listen()
}


main().catch(err => console.log('error starting server'))