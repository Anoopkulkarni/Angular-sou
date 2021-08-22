const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const api=require('./Razorpay_key');
const Razorpay = require('razorpay-node-master');
const rzp= new Razorpay({
	key_id:api.key,
	key_secret:api.secrete
	});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

//index route of the server:
app.get('/',function(req,resp){
	resp.send("Your server is running.")
});
app.get('/fetchPaymentLinks/:id',function(req,resp){
	console.log("request fetchPaymentLinks ",req.params.id);
	
	rzp.paymentLink.fetch(req.params.id)
	.then((data)=>{
		console.log(data);
		
		resp.status(200).send(data);
	})
	.catch((err)=>{
		resp.status(400).send(err);
	})
});

app.post('/createPaymentLink',function(req,resp){
	console.log("request createPaymentLink");
	
	var jsonparam = {
		"amount": 1000,
		"currency": "INR",
		"accept_partial": true,
		"first_min_partial_amount": 100,
		"reference_id": "#test",
		"description": "Payment for policy no #23456",
		"customer": {
		  "name": "Gaurav Kumar",
		  "contact": "+919999999999",
		  "email": "gaurav.kumar@example.com"
		},
		"notify": {
		  "sms": true,
		  "email": true
		},
		"reminder_enable": true
	   
		
	  }

	rzp.paymentLink.create(req.body)
	.then((data)=>{
		console.log(data);
		
		resp.status(200).send(data);
	})
	.catch((err)=>{
		resp.status(400).send(err);
	})
});

app.get('/fetchPaymentLink/',function(req,resp){
	console.log("request fetchPaymentLink");
	
	rzp.paymentLink.all()
	.then((data)=>{
		console.log(data);
		
		resp.status(200).send(data);
	})
	.catch((err)=>{
		resp.status(400).send(err);
	})
});

app.get('/fetchInvoices',function(req,resp){
	console.log("request fetchInvoices");
	
	rzp.invoices.all()
	.then((data)=>{
		console.log(data);
		
		resp.status(200).send(data);
	})
	.catch((err)=>{
		resp.status(400).send(err);
	})
});

//API explorer Route
app.post('/apiExplorer',(req,resp)=>{
	console.log(req.body);

	rzp.orders.create(req.body)
	.then((data)=>{
	
		resp.status(200).send(data);
		console.log(data);
	
	})
	.catch((data)=>{
	
		resp.status(400).send(data);
	});
});

//API to fech payments
app.get('/fetchPayment/:id',(req,resp)=>{

	rzp.payments.fetch(req.params.id)
	.then((data)=>{
		resp.status(200).send(data);
	})
	.catch((err)=>{
		resp.status(400).send(err);
	})
});


//Payment route:
// app.use('/payment',require('./paymentsApi'));


const PORT = process.env.PORT || 3000
app.listen(PORT);
console.log(`localhost started on the PORT:${PORT}`);
