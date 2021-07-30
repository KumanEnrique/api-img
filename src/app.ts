import path from 'path'
import express from 'express'
import morgan from 'morgan'

const app = express()

import IndexRoute from './routes/index'
import helloWorld from './routes/helloWorld'

//settings
app.set('port',process.env.PORT || 3000)

//middleware
app.use(morgan('dev'))
// app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
// app.use(IndexRoute)
app.use("/api",IndexRoute)
app.use(helloWorld)

//this folder for this application will be used to store public files 
app.use('/uploads',express.static(path.resolve('uploads')))

//starting the server
/* app.listen(app.get('port'),()=>{
    console.log(`server on http://localhost:${app.get('port')}`)
}) */

export default app