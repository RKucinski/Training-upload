const express = require('express');
const app = express();

// const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images/' });

const port = 4000;
const bodyParser = require('body-parser');
const fs = require('fs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/uploaddufichier', upload.array('monfichier', 2), function (req, res, next) {
  // fs.rename(req.file.path, 'public/images/' + req.file.originalname, function (err) {
  //   if (err) {
  //     res.send('problème durant le déplacement');
  //   } else {
  //     res.send('Fichier uploadé avec succès');
  //   }
  // });
})

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});