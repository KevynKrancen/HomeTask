import express from 'express';
import fileUpload from 'express-fileupload';
import uploadRouter from './routes/upload.js';

const app = express();

app.set('view engine', 'ejs');


app.use(fileUpload());
app.use('/', uploadRouter);


const PORT = 3000;

try {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
} catch (error) {
    console.error(`Error starting the server: ${error}`);
}