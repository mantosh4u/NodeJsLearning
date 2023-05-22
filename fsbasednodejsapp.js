var fs = require('fs');


function readdirCallback(err, files) {
    if(err) {
        console.warn("No such directory exists or not able to read!!!!")
    }
    
    for(item in files)
    {
        fs.readFile(item, (err,data) => {
            
        });

        console.log(files[item])
    }
}


/////////main///////
var startmsg = ">> Started"
console.log(startmsg);


fs.readdir(".", readdirCallback);



var endmsg = "<< Completed"
console.log(endmsg);


