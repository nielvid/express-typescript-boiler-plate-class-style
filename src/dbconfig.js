import { connect } from 'mongoose';

const URI = `${process.env.MONGO_URI}`

export const dbConnection = async()=>{
const {connections} = await connect(URI)
if(connections){
console.log('Connected to database')
}
}