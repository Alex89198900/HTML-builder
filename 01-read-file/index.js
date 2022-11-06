let fs = require('fs');
const path = require('path');
let stream = new fs.ReadStream( path.join(__dirname, path.sep,'text.txt'));
 
stream.on('readable', function(){
  let data = stream.read();
  if (data&&data!==null){
      console.log( data.toString());
  }
  
});
 
