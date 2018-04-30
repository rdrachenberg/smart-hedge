
var express = require('express');
var uport = require('uport');
var jsontokens = require('jsontokens')

var app = express();
var signer = uport.SimpleSigner('80962ca957485b5b01e91725e59938c99b32c7e79c69a30052d9370b477cf613')


var credentials = new uport.Credentials({
  appName: "Smart Hedge",
  address: "2ooPAu2zFP5Eucjcb9pX5d4zyxAwTdRRa8g",
  signer: signer
  //networks: {'0x4': {'registry' : '0x2cc31912b2b0f3075a87b3640923d45a26cef3ee', 'rpcUrl' : 'https://rinkeby.infura.io'}}
  // Note: we use Rinkeby by default, the above is the explicit format for selecting a network
});

app.get('/', function (req, res) {
  credentials.attest({
    sub: '2ooPAu2zFP5Eucjcb9pX5d4zyxAwTdRRa8g',
    exp: 1552046024,
    claim: {'My Title' : {'KeyOne' : 'ValueOne', 'KeyTwo' : 'Value2', 'Last Key' : 'Last Value'} }
    // Note, the above is a complex claim. Also supported are simple claims:
    // claim: {'Key' : 'Value'}
  }).then(function (att) {
    console.log(att)
    console.log(jsontokens.decodeToken(att))
    var uri = 'me.uport:add?attestations=' + att + '%26callback_type=post'
    var qrurl = 'http://chart.apis.google.com/chart?cht=qr&chs=400x400&chl=' + uri
    var mobileUrl = 'https://id.uport.me/add?attestations=' + att + '&callback_type=post'
    console.log(uri)
    res.send('<div><img src=' + qrurl + '></img></div><div><a href=' + mobileUrl + '>Click here if on mobile</a></div>')
  }).then(function(att) {
    
    
  })
})

app.listen(8081, function () {
  console.log("Smart Hedge app running...")
})
