import { Contact } from "../model/contact-model.js"

export const contact=async(req,res)=>{
    try {
        const {username,email,message}=await req.body

        const respose=await Contact.create({username,email,message});

        if(!respose){
            return res.status(400).json({msg:"Message not sent"})
        }

        res.status(200).json({msg:"Message sent successfully"})

    } catch (error) {
        console.error("Internal server error")
    }
}