var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
     response.setEncoding("utf8");
     respone.on('data', function(data) {
       console.log('Chunk Recieved. Length:', data.length);
     });
     response.on('end', function() {
      console.log("response stream complete.");
     });
  });
}






