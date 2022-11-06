
 const fs = require('fs');
 const path = require('path');
 
 fs.readdir(path.join(__dirname, '/files-copy'), (err, files) => {
  if (err) 
  return;

  for (const file of files) {
    fs.unlink(path.join(__dirname, '/files-copy', file), err => {
      if (err) 
      return;
    });
  }
});


 fs.mkdir(path.join(__dirname, '/files-copy'), (err) => {
    if (err) {
        return
    }
    console.log('Directory created successfully!');
  });
const directoryPath = path.join(__dirname,  './files/');
const directoryPath2 = path.join(__dirname,  './files-copy/');
fs.readdir(directoryPath, (err, files) => {
    files.forEach((file, index) => {
     if (!path.extname(file)) {
      return;
     }
     let newName = file;
   
     fs.copyFile(directoryPath+ file,  directoryPath2+newName, err => {
      if (err) {
       console.error(err);
      }
     });
    });
   });

