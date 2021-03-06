var express = require('express');

var app = express();

var PORT = process.env.PORT || 5000;
var aasa = {
  "webcredentials": {
    "apps": [
      "5F83KRY2FH.com.ubercab.UberClient.development",
      "NW8WAZ2XUV.com.ubercab.UberClient.Nightly",
      "NW8WAZ2XUV.com.ubercab.UberClient.Enterprise",
      "5F83KRY2FH.com.ubercab.UberClient"
    ]
  }
}
app.get('/apple-app-site-association', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(aasa);
});

app.get('/', function(req, res) {
    return res.status(200).send("hello world");
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});
