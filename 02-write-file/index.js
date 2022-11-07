let fs = require('fs');
const process = require('process');
const path = require('path')
let question="What do you write? "
let data1=''
var readline = require('readline');
const { stdin } = require('process')
function ask (i){
  process.stdout.write(question)
}
const filePath=path.join(__dirname,'text.txt')
process.stdin.on('data',function(data){
  if(data.toString().trim()==='exit'){
    process.exit();
  }
  if(data.toString()!=='exit'){
    data1 +=data
    fs.writeFile(filePath,data1, (err)=>{
      if(err){
        throw err
      }
      })
  }
    
})

process.on('exit', (code) => {
  console.log(`Good bye.`);
});
ask()