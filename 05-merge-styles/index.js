let fs = require('fs');
  const path = require('path')
   const directoryPath = path.join(path.join(__dirname,  '/styles/'));
   let pathBandle =path.join(path.join(__dirname,  '/project-dist/'))
   let writeableStream = fs.createWriteStream(path.join(pathBandle+'bundle.css'))

   fs.readdir(directoryPath, 
    {withFileTypes: true},
    (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
       if(path.extname(file.name)==='.css'){
        let stream = fs.createReadStream(directoryPath+path.basename(file.name));
        stream.on('data', function (chunk) {
          writeableStream.write(chunk)
        })
      } 
      })
    
    }
  })