let fs = require('fs');
const path = require('path')

fs.mkdir(path.join(__dirname, '/project-dist'), (err) => {
    if (err) {
        return
    }
    console.log('Directory created successfully!');
  });

let pathBandle =path.join(path.join(__dirname,  '/project-dist/'))
let writeableStream = path.join(pathBandle+'index.html')
const directoryPath = path.join(path.join(__dirname,  '/components/'));
var  res={}
let pathht= path.join(__dirname, path.sep,'template.html')
   fs.readdir(directoryPath, 
    {withFileTypes: true},
    (err, files) => {
    if (err)
      console.log(err);
    else {
     
      files.forEach(file => {
        
        let stream = fs.createReadStream(directoryPath+path.basename(file.name));
        stream.on('data', function (chunk) {
         res[`${path.basename(file.name,path.extname(file.name))}`]=chunk.toString()
         fs.readFile(pathht,function(err,data){
          if(err) throw err
          var arr =data.toString()
          arr=arr.split('\n')
          for(let i=0;i<arr.length;i++){
            if(arr[i].trim()==='{{header}}'){
              arr[i]=res['header'] 
            }
            if(arr[i].trim()==='<main class="main">'){
              arr[i]='\n'+arr[i]
            }
            if(arr[i].trim()==='{{articles}}'){
              arr[i]=res['articles']
            }
            if(arr[i].trim()==='</main>'){
             arr[i]='\n'+arr[i]
            }
            if(arr[i].trim()==='{{footer}}'){
              arr[i]=res['footer']
            }
            if(arr[i].trim()==='{{about}}'){
                arr[i]=res['about']
              }
          }
        fs.writeFile(writeableStream,arr.join(''), (err)=>{
        if(err){
          throw err
        }
        })
        })
        })
        
      })
    }
  })

  const directoryPath2 = path.join(path.join(__dirname,  '/styles/'));
   //let pathBandle =path.join(path.join(__dirname,  '/project-dist/'))
   let writeableStream2 = fs.createWriteStream(path.join(pathBandle+'style.css'))

   fs.readdir(directoryPath2, 
    {withFileTypes: true},
    (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
       if(path.extname(file.name)==='.css'){
        let stream = fs.createReadStream(directoryPath2+path.basename(file.name));
        stream.on('data', function (chunk) {
          writeableStream2.write(chunk)
        })
      } 
      })
    
    }
  })


  fs.mkdir(path.join(pathBandle, '/assets'), (err) => {
    if (err) {
        return
    }
    console.log('Directory created successfully!');
  });
const directoryPath3 = path.join(__dirname,  './assets/');
const directoryPath4 = path.join(pathBandle, '/assets');
fs.readdir(directoryPath3, (err, files) => {
    for(let i=0;i<files.length;i++){
      fs.mkdir(path.join(directoryPath4, files[i]), (err) => {
        if (err) {
            return
        }
        console.log('Directory created successfully!');
      })
      let puty= path.join(directoryPath3, files[i]+'/');
      let puty2= path.join(directoryPath4, files[i]+'/');
      let fayl=files[i]
      fs.readdir(puty, (err,files ) => {
      
        files.forEach((file, index) => {
          if (!path.extname(file)) {
           return;
          }
          let newName = file;
        
          fs.copyFile(puty+ file,  puty2+newName, err => {
           if (err) {
            console.error(err);
           }
          });
         });
       console.log(files[i])


        
      });
      
    }
   });