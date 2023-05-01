const {readFile , writeFile} = require('fs');

readFile('../Content/Subfolder/first.txt' , 'utf-8', (err , result) => {
    if(err){
        console.log(err)
        return
    }

  const first = result;
readFile('../Content/Subfolder/second.txt', 'utf-8', (err , result) => {
    if(err){
        console.log(err)
        return
    }
    const second = result;
writeFile('../Content/Subfolder/WrittenFileresult.txt',`The result is: ${first}, ${second}`,{flag: 'a'} ,(err , result)=>{
    if(err){
        console.log(err)
        return
    }
    else{
        console.log(result);
    }
})
})})