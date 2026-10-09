import { authRoute} from "./routes/auth-routes.js"
import express from "express"
import { connectDB } from "./utils/db.js"
import { contactRoute } from "./routes/contact-route.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const PORT=process.env.PORT || 3000

const app=express()

const corsOptions={
    "origin":"http://localhost:5173",
    "methods":"POST,GET,DELETE,PATCH",
    "credentials":true
}

app.use(cors(corsOptions))



app.use(express.json())
app.use(cookieParser())

app.use(authRoute)
app.use(contactRoute)

connectDB().then(()=>{
    app.listen(PORT ,()=>{
        console.log(`Server running on https::/localhost:${PORT}`)
    })
})