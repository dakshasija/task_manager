var express = require('express');
var router = express.Router();
var mongojs=require('mongojs');


 var db=mongojs("mongodb://abcd:abcd1234@ds053176.mlab.com:53176/bank_data",['new_data']);





/* GET home page. */

//get all tasks
router.get('/', function(req, res, next) {
db.new_data.find(function(err,new_data){


	if(err)
		console.log(err);

	else
		res.json(new_data);
});

});


//get task by id

router.get('/:id', function(req, res, next) {
//db.new_data.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,data){
db.new_data.findOne({"name":req.params.id},function(err,data){


	if(err)
		console.log(err);

	else
		res.json(data);
});

});


//post task

router.post('/', function(req, res, next) {

var body=req.body;
if(!body.title || (body.isDone +''))
{
	res.status(400);
	res.json({
		"error":"Inapprpriate Data"
	});
}
else
{

db.new_data.save(body,function(err,new_data){


	if(err)
		console.log(err);

	else
		res.json(new_data);
});
}

});
//delete a task

router.delete('/:id', function(req, res, next) {
db.new_data.remove({"name":req.params.id},function(err,new_data){


	if(err)
		console.log(err);

	else
		res.json(new_data);
});

});


//update task

router.put('/:id',function(req,res,res){

var body=req.body
var updtask={};

if(task.isDone)
{
	updtask.isDone=task.isDone;

}
if(task.title)
{
	updtask.title=task.title;
}
db.new_data.update({"name":req.params.id},updtask)


})




module.exports = router;
