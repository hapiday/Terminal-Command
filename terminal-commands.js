const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
     return `${acc} ${file} `;
   }, '');

   console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('new.txt', function(err){
    if(err) throw err;
    console.log('File created');
  }
};

module.exports.mkdir = () => {
  fs.mkdir('newDirectory', function(err){
    if (err) throw err;
    console.log('Directory created');
  }
};
