var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/listprice', function(request, response) {
	var jsonObj = [	{'price':'123,45' , 'unit':'EUR' },
					{'price':'67.89' , 'unit':'EUR' },
					{'price':'98.76' , 'unit':'USD' }
				];
	response.setHeader('Content-Type', 'application/json; charset=utf-8');
	response.setHeader('Data-Type', 'json');
	response.send(JSON.stringify(jsonObj))
})

app.listen(app.get('port'), function() {
  console.log("Sample is running at localhost:" + app.get('port'))
})
