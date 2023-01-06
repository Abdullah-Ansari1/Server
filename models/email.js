import mongoose  from "mongoose";

const emailSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    project: {
        type: String,
        required: true,
    },
    Message: {
        type: String,
        default:null
    },
    status: {
        type: String,
        enum : ['PENDING','COMPLETED','DELAYED'],
        default: "PENDING"
    },
    notification_status: {
        type: Boolean,
        default: false
    },
},{ timestamps: true });

var Email = mongoose.model('Email', emailSchema);

export default Email;