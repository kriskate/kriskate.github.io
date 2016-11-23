var Markdown = require('markdown-to-html').Markdown;
var md = new Markdown();
md.bufmax = 2048;
var fileName = '../../WhatToCook/README.md';
var opts = {title: 'File $BASENAME in $DIRNAME'};

// Write a header.
console.log('===============================');
// Write a trailer at eof.
md.once('end', function() {
  console.log('===============================');
});
md.render(fileName, opts, function(err) {
  if (err) {
    console.error('>>>' + err);
    process.exit();
  }
  md.pipe(process.stdout);
});
