const fs = require("fs").promises
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

//4.  rename file in file system
// const file_old = 'example.txt';
// const file_new = 'new_file.txt';
// fs.rename(file_old, file_new, (err) => {
//     if (err) {
//         console.log(err, "file doesn't renamed");
//     }
//     else {
//         console.log("file renamed succesfully");
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



// 6. checking if file exists
// fs.access('new_file.txt', fs.constants.F_OK, (err) => {
//     if (err) {
//         console.error('File does not exist');
//     } else {
//         console.log('File exists');
//     }
// });


// 7.creating a directory

// fs.mkdir('Second', { recursive: true }, (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//     } else {
//         console.log('Directory created successfully');
//     }
// });


// unlink the above both folder
// const folder = "newFolder"
// fs.rm(folder, { recursive: true, force: true }, (err) => {
//     if (err) {
//         console.log("file doesn't delete!", err);
//     }
//     else {
//         console.log("file deleted!");
//     }
// })


// deleted the second folder through mkdir method
// const second = 'Second'
// fs.rm(second,{recursive:true,force:true},(err)=>{
//     if(err){
//         console.log(err,"folder doesn't deleted!");
//     }
//     else{
//         console.log('folder deleted succesfully');
//     }    
// })



// 8. Reading a directory

// fs.readdir('./', (err, files) => {
//     if (err) {
//         console.error('Error reading directory:', err);
//     } else {
//         console.log('Files in directory:', files);
//     }
// });



// 9.watching a file for changes
// const file = 'second.txt'
// fs.watch(file, (eventType, filename) => {
//     if (filename) {
//         console.log(`File ${filename} has been ${eventType}`);
//     } else {
//         console.log('Filename not provided');
//     }
// });



// getting file stats
// fs.stat('second.txt', (err, stats) => {
//     if (err) {
//         console.error('Error getting file stats:', err);
//     } else {
//         console.log('File stats:', stats);
//     }
// });



// promises asynchronus using 
fs.readFile("second.txt", 'utf-8').then((data) => {
    console.log("data displayed!", data);
}).catch((err) => {
    console.log(err, "data doesn't dispalyed!");

})