import PDFDocument from 'pdfkit';
/**aqui se creo un pdf */
export function buildPdf(dataCallBack, endCallBack){
    const doc= new PDFDocument()

    doc.on('data', dataCallBack)/**comienza recibe datos */

    doc.on('end', endCallBack)/**termina de recibir datos *//*por su parte los parametros es lo que hara luego de comenzar o terminal el metodo*/
    doc.text('titulo del pdf')
    doc.end()
}