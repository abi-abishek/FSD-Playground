const qr = require("qrcode");

let data = {
    "name" : "Drive The Money",
    "email" : "drivethemoney@gmail.com",
    "id" : 95
};

let stJson = JSON.stringify(data)
qr.toString(stJson, {type:"terminal"}, function(err,code)
{
    if(err)return console.log("error"); 
    console.log(code);
});
qr.toDataURL(stJson, function(err,code)
{
    if(err)return console.log("error"); 
    console.log(code);
});

// To convert the URL into an image
// We can use the https://codebeautify.org/
// Use the Base64 to Image converter