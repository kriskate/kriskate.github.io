var Markdown = require('markdown-to-html').Markdown;
var md = new Markdown();
md.bufmax = 2048;
var fileName = '../WhatToCook/README.md';
var fs = require('fs');
var fsE = require('fs-extra');


// What to cook
var opts = {title: 'File $BASENAME in $DIRNAME'};
var dir = "WhatToCook/"
console.log('===============================');
md.once('end', function() {
  console.log('===============================');
});
md.render(fileName, opts, function(err) {
  if (err) {
    console.error('>>>' + err);
    process.exit();
  }
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  //var html = md.pipe(process.stdout);
  var stream = fs.createWriteStream(dir+"index.html");
  stream.once('open', function(fd) {
    stream.write(md.html);
    stream.end();
  });

  fsE.copy('../WhatToCook/readmeImages', dir+'readmeImages', function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("success!");
    }
  }); //copies directory, even if it has subdirectories or files

  console.log("content exported to index.html")
  console.log('===============================');
});
