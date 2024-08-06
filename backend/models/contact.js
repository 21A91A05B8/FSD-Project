import mongoose from "mongoose";
const Schema=mongoose.Schema;

const contact=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
});
export default mongoose.model('contactinfos',contact);
                        //collection name, variable