import { getModelForClass, prop, Ref} from '@typegoose/typegoose';
import { Service } from 'typedi';
import {User} from './user.model'

@Service()
export class Cars {
    @prop()
    name!: string

    @prop({ required: true })
    production_year!: Date

    @prop()
    color!: string

    @prop()
    avatar?: string;
}
export const Car = getModelForClass(Cars)