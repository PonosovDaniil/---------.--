const express= require('express');
const app = express();
app.get("/", function(rec,res,next) {
res.send("GO GO GO");
});


app.listen(3000);
