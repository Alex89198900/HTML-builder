
let fs = require('fs');
const path = require('path')
const directoryPath = path.join(path.join(__dirname,  '/secret-folder'));
const directoryPath2 = path.join(path.join(__dirname,  '/secret-folder/'));
fs.readdir(directoryPath, 
  {withFileTypes: true},
  (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
        fs.stat(directoryPath2+file.name, (err, stats) => {
          if (stats.isFile()){
          let f=path.extname(file.name).slice(1)
          console.log( path.basename(file.name,path.extname(file.name))+' - '+f+' - '+stats.size+'b' );
          }
        })
        
     })
    
  }
})
