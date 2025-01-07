// ---------------------------------------Async---------------------------------------

// 1.
// const fs=require("fs");
// const path="./space_project";
// fs.access(path,(error)=>{
//     if(error){
//         fs.mkdir(path,(error)=>{
//             if(error){
//                 console.log(error);
//             }
//             else{
//                 console.log("New Directory Created successfully!")
//             }
//         });
//     }
//     else{
//         console.log("Given already exists Directory")
//     }
// })

// 2.
// let data="ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.";
// const fs=require("fs");
// const path="./space_project/log.txt";
// fs.writeFile(path,data,(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File created successfully!");
//     }
// });

//3.
// let data="ISRO has started working on Gaganyaan.";
// const fs=require("fs");
// const path="./space_project/log.txt";
// fs.writeFile(path,data,(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("Data added successfully!");
//     }
// });

//4.
// let data="\n The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.";
// const fs=require("fs");
// const path="./space_project/log.txt";
// fs.appendFile(path,data,(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("Data added successfully!");
//     }
// });

//5.
// const fs=require("fs");
// fs.rename("./space_project/log.txt","./space_project/update.txt",(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File renamed successfully!");
//     }
// });

//6.
// const fs=require("fs");
// let data="./space_project/update.txt"
// fs.readFile(data,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//         console.log("We are excited");
//     }
// });

//7.
// const fs=require("fs");
// fs.unlink("./space_project/update.txt",(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File deleted successfully!");
//     }
// });

//8.
// const fs=require("fs");
// fs.rmdir("space_project",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Folder deleted")
// });


//---------------------------------------------------Sync---------------------------------------

// const fs=require("fs");
// Step 1: Create folder
// fs.mkdirSync('space_project');
// console.log('Folder created synchronously.');

// Step 2: Create file and add content
// fs.writeFileSync('space_project/log.txt', "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.");
// console.log('File created and content written synchronously.');

// Step 3: Replace content
// fs.writeFileSync('space_project/log.txt', "ISRO has started working on Gaganyaan.");
// console.log('File content replaced synchronously.');

// Step 4: Append content
// fs.appendFileSync('space_project/log.txt', "\n  The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.");
// console.log('Content appended synchronously.');

// Step 5: Rename file
// fs.renameSync('space_project/log.txt', 'space_project/update.txt');
// console.log('File renamed synchronously.');

// Step 6: Read file and log data
// const data = fs.readFileSync('space_project/update.txt', 'utf8');
// console.log('Data read synchronously:', data);
// console.log('We are excited');

// Step 7: Delete file
// fs.unlinkSync('space_project/update.txt');
// console.log('File deleted synchronously.');

// Step 8: Delete folder
fs.rmdirSync('space_project');
console.log('Folder deleted synchronously.');