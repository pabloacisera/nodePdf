import express from 'express';  // 1. Importar express
const app = express();
import indexRoutes from './routes/index.js';  // Asegúrate de incluir la extensión del archivo


app.use(indexRoutes);

/** Init server */
app.listen(3000, () => {
    console.log('Server on port: 3000');
});




