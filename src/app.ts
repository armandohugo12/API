import express from 'express';
import connection from './db/config';
import divisionRouter from './routes/divisionHandler';
import { json, urlencoded } from 'body-parser';
/*import dotenv from 'dotenv';*/
import distincionRouter from './routes/distincionesHandler';


const app = express();
app.use(json());
app.use(urlencoded({extended:true}));
const port = process.env.PORT;

app.use(json());
app.use(urlencoded({extended:true}));



app.use('/division',divisionRouter);
app.use('/distincion',distincionRouter); /*En este lina crashed*/

connection.sync().then(() => {
    console.log("la base de datos funciona");
}).catch((error) => {
    console.log("error de db",error);
})
   
app.listen(3000, () => {
    console.log('server is running on port 3000')
})  