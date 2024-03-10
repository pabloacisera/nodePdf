# nodePdf
EN ESTE EJERCICIO SOLO SE DESCARGAR UN PDF CUANDO SE PIDA UNA RUTA...
solo hacen  falta dos paquetes, express y pdfkit
para este proyecto en el package debemos incorporar en la cabecera "type": "module" para poder importar y exportar modulos


IMPORTANTE : INVESTIGAR EL METODO PROXIMO PARA CREAR PDF DESDE FORMULARIO
import PDFDocument from 'pdfkit';
import fs from 'fs'; // Módulo para manipular archivos en el sistema de archivos

export function buildPdf(formData, callback) {
    const doc = new PDFDocument();

    // Construir el contenido del PDF usando los datos del formulario
    doc.text('Título del PDF');

    // Agregar información del formulario al PDF
    doc.text(`Nombre: ${formData.name}`);
    doc.text(`Correo Electrónico: ${formData.email}`);
    // Agregar más campos según sea necesario

    // Guardar el PDF en el sistema de archivos
    const pdfPath = 'ruta/donde/guardar/el/pdf.pdf';
    const stream = fs.createWriteStream(pdfPath);

    // Manejar eventos del stream para llamar al callback
    stream.on('finish', () => callback(pdfPath));
    doc.pipe(stream);

    // Finalizar el documento PDF
    doc.end();
}

// Ejemplo de uso en el servidor (Express)
const express = require('express');
const app = express();

app.post('/generar-pdf', (req, res) => {
    // Obtener datos del formulario desde la solicitud POST
    const formData = req.body; // Asegúrate de tener configurado bodyParser o similar

    // Llamar a la función para construir el PDF
    buildPdf(formData, (pdfPath) => {
        // Aquí podrías guardar el pdfPath en tu base de datos
        // y realizar otras operaciones si es necesario

        // Enviar una respuesta al cliente si es necesario
        res.json({ success: true, message: 'PDF creado exitosamente' });
    });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
