const fs = require("fs")
// 1.read file we can read the data only can't acces the data while using the readFile
// fs.readFile("example.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);

//     }
//     else {
//         console.log(data);

//     }
// })
// 2.update the text in file through writeFile
// const Data = "updated the data here"
// fs.writeFile("example.txt", Data, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);

//     }
// })

// 3.create the file while using the writeFile
// fs.writeFile("second.txt", "utf-8", (err) => {

//     if (err) {
//         console.log("file not create");
//     }
//     else {
//         console.log("file created!");
//     }
// })

// i . create the file
// const Data = "today file system module praticed"
// fs.writeFile("example.txt",Data,(err)=>{
//     if(err){
//         console.log(err,"file doesn't created!");
//     }
//     else{
//         console.log("file created succesfully!");
        
//     }
// })


// 4.rename the file name
// fs.rename("example.txt","today.txt", (err) => {
//     if (err) {
//         console.log("File not renamed!", err);
//     } else {
//         console.log("File renamed successfully!");
//     }
// });

// 5.unlink the file or delete the file

// fs.unlink("exmple.txt",(err)=>{
//     if(err){
//         console.log(err,"file doesn't deleted!");
//         return
//     }
//     console.log("file deleted successfully!");
    
// });
const file_old = 'example.txt';
const  file_new = 'new_file.txt'; 
fs.rename(file_old,file_new,(err)=>{
    if(err){
        console.log(err,"file doesn't renamed");        
    }
    else{
        console.log("file renamed succesfully");   
    }
})