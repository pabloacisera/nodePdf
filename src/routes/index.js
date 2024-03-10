import { Router } from 'express';  // 3. Importar Router en minúsculas
const router = Router();
import { buildPdf } from '../lib/pdfKit.js'

router.get('/invoice', (req, res) => { 

    const stream= res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=archive.pdf"
    })

    buildPdf((data)=>{
        stream.write(data)
    }, ()=> stream.end())

    res.send('Invoice');
});

export default router;