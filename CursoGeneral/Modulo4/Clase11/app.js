/*
npm init -y
npm install express
Crear .gitignore en la raiz del directorio
y escribir node_modules para evitar que se suba la carpeta con 
todos los módulos utilizados.
En package.json se pueden agregar pequeños scripts que se ejecutan
al iniciar 
*/

const express = require('express');
const app = express();
const path = require('path');

//const publicPath = path.resolve(__dirname, '/public');
app.use(express.static(__dirname+'/public'));

app.listen(3000, () => {console.log("Servidor corriendo en el puerto 3000")});

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','Home.html')));