import express from 'express';
import aggregatedData from '../utils/aggregatedData.js';


const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.render('upload');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/upload', (req, res) => {
    try {
        let resourcesFile = req.files.resourcesFile;
        let findingsFile = req.files.findingsFile;

        if (!resourcesFile || !findingsFile) {
            return res.status(400).send('Both files are required.');
        }

        let resourcesContent = resourcesFile.data.toString('utf8');
        let findings = JSON.parse(findingsFile.data.toString('utf8'));

        let results = aggregatedData(resourcesContent, findings);

        res.render('result', { findings: results });
        
    } catch (error) {
        console.error(`Error processing the upload: ${error}`);
        res.status(500).send('Internal Server Error');
    }
});
export default router;