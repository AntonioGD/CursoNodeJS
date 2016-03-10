//console.log('text');
var http = require('http'); // como si fuera un import java
var mysql = require('mysql');

var server = http.createServer(
	function(reg,res){
		//res.end("Enter");
			db.query('select * from country',function(err,result){
				
				//console.log('a');
				
				
				if(err){
					console.log(err);
					res.end('Error');
				}else{
					//for(i=0;i<=result.length;i++){}
					res.end(result[0].name);
				}
				
//				try{
//					for(i=0;i<=result.length;i++){
//						
//						res.end(result[i].name);
//					}
//					
//					
//				}catch(err){
//					console.log(err);
//					res.end('Error');
//				}
			});
		
		
		db.query('select * from country',function(err,result){
				
				//console.log('b');
				
				
				if(err){
					console.log(err);
					res.end('Error');
				}else{
					//for(i=0;i<=result.length;i++){}
					res.end(result[1].name);
				}
				
//				try{
//					for(i=0;i<=result.length;i++){
//						
//						res.end(result[i].name);
//					}
//					
//					
//				}catch(err){
//					console.log(err);
//					res.end('Error');
//				}
			});
		
		
		db.query('select * from country',function(err,result){
				
				//console.log('c');
				
				
				if(err){
					console.log(err);
					res.end('Error');
				}else{
					//for(i=0;i<=result.length;i++){}
					res.end(result[2].name);
				}
				
//				try{
//					for(i=0;i<=result.length;i++){
//						
//						res.end(result[i].name);
//					}
//					
//					
//				}catch(err){
//					console.log(err);
//					res.end('Error');
//				}
			});
		
		
		
});


server.listen(1234);



var mysql = require('mysql');
var db = mysql.createPool({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'idb_esme_new'
	//,connectionLimit : '10'
	
});
				