import { Service } from "typedi";

@Service()
export class ErrorHandler extends Error{
        status: number
    constructor(status:number, message:any){
        super();
        this.message = message;
        this.status = status;
    }
}
