import { Container } from 'typedi';
import { AuthController } from "./auth.controller"

// export const authController = new AuthController()
export const authController = Container.get(AuthController) //dependency injection with typedi