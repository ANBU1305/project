const express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
const app=express();
const cors=require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"project"
    
  });
  
  con.connect((err)=> {
      if (err){
        console.log("err");
      } 
      else{
        console.log("Connected!");
      } 
     }
    );

    app.post('/post',function(req,res){
        var date =req.body.date;
        var userid =req.body.projectname;
        var hour =req.body.hour;
        var comment =req.body.comment;
        var sql= "INSERT INTO project(date,userid,hour,comment) VALUES('"+date +"','"+userid +"','"+hour +"','"+comment+"')";
            con.query(sql,function(req,res){
                if(req) {
                   console.log(req);
                }
                else{
                    console.log("query success!");
                   
                }
                   
               
             })
        
        

       });
    
    
    app.get('/get/',function(req,res){
       
       var sql="SELECT user,date,comment,hour FROM project INNER JOIN user ON project.userid=user.user_id";
        con.query(sql,function(err,rows,fields){
            if(err) {
               console.log(err);
            }
            else{
                console.log("query success!");
               res.json({rows});
               
            }   
         })

       });
       app.get('/get/:date',function(req,res){
       
       var date=req.params.date;
        con.query("SELECT * FROM project where date="+date,function(err,rows,fields){
            if(err) {
               console.log(err);
            }
            else{
                console.log("query success!");
               res.json({rows});
               
            }   
         })

       });
    


  app.listen(3000);