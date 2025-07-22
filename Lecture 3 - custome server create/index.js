const http=require("http");

const port=8000;

const requesthandler=(req,res)=>{
    res.write("<h1>hello world</h1>");
    res.end();
}

const server=http.createServer(requesthandler);

server.listen(port,(err)=>{
    if(err){
        console.log("Server Not Start");
        return false;
    }
    console.log(`server is Running on port:- ${port}`);
})