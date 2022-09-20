
var express =require('express');
var app=new express();
var mongoose=require('mongoose');
var user=require('./model/user.js');
//var users=[{name:'Guru',age:24},{name:'har',age:35},{name:'Par',age:36}];
var router=express.Router();
mongoose.connect('mongodb://localhost:27017/userdb',{useNewUrlParser:true});
 
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

router.route('/users')
.get((req,res)=>{
	user.find({},(err,users)=>{
		if(err)
	res.json({msg:'error feteching data from database'});
		else 
			res.json(users);
	})
	//res.json(users);
})
.post((req,res)=>{ 
	var obj=new user(req.body);
	obj.save((err)=>{
		if(err){
			res.json({msg:'Error'});
		}
		else{
			res.json({msg:'sucesseded'});
	}})
});
router.route('/user/:name')
.get((req,res)=>{
	user.findOne({name:req.params.name},(err,users)=>{
		if(err)
	res.json({msg:'error feteching data from database'});
		else if(!users)
				res.json({msg:'user not found'});

			else
			res.json(users);
	})

})
.put((req,res)=>{
	user.findOneAndUpdate({name:req.params.name},{age:req.body.age},(err,users)=>{
		if(err)
	res.json({msg:'error feteching data from database'});
		else 
			res.json({msg:'updated sucesseded'});
	})

	

})
.delete((req,res)=>{
	user.findOneAndDelete({name:req.params.name},(err,users)=>{
		if(err)
	res.json({msg:'error feteching data from database'});
		else 
			res.json({msg:'delete sucesseded'});
	})

})
app.use('/api',router);

app.listen(3000,()=>{
	console.log("listening server on 3000");
	
});
