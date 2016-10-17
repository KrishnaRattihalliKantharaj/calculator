exports.calculate = function(request,response){
	var operand1 = Number(request.body.operand1);
	var operand2 = Number(request.body.operand2);
	var operation = request.body.operation;
	console.log("operation received as = " + String(operation));
	switch(operation) {
		case "+":
			response.send({
				"result" : operand1 + operand2
				});
			break;
		case "-":
			response.send({
				"result" : operand1 - operand2
				});
			break;
		case "*":
			response.send({
				"result" : operand1 * operand2
				});
			break;
		case "/":
			response.send({
				"result":operand1 / operand2
				});
			break;
		default:
			response.send({
				"result" : "Error: Illegal operator received - " + operation
				});
	}
}
