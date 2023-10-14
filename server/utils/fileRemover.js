import { log } from 'console';
import fs from 'fs'
import path from 'path'

const fileRemover = (fileName)=>{
    fs.unlink(path.join(__dirname,'../uploads', fileName), function(err){
        if(err && err.code=="ENDENT")
        {
            console.log(`file ${fileName} doesnt exist, wont remove it`);
        }
        else if(err)
        {
console.log(`Error occured while trying to remove file ${fileName}`);
        }
        else{
            console.log(`removed ${fileName}`);
        }
    })
}

export {fileRemover}
