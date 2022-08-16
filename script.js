// get histury
function getHistory() 
{
	return document.getElementById("history-value").innerText;
}

// print histury
function printHistory(num) 
{
	document.getElementById("history-value").innerText = num;
}
// get histury
function getOutput() 
{
	return document.getElementById("output-value").innerText;
}
// print histury
function printOutput(num) 
{
	document.getElementById("output-value").innerText = num;
}
// function showdata(num) {
// 	 var a= (document.getElementById("history-show").innerHTML=num)
// }
function showdata() 
{                                            // show all history data
	var log = document.getElementById("history-show");
	var string = "";
	for (var key in historyData) 
	{
		string +=
			"" +
			historyData[key]["expression"] +
			" = " + "<br>" +
			historyData[key]["result"] +
			"<br>";
	}

	log.innerHTML = string;
}

var isPercentage = false;
var historyData = [];
var expressionData = "";
var resultData = "";
var count = 1;
var valOne;
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function () {
		// debugger
		if (this.id == "clear") 
		{  
                    //clear data
			printHistory("");
			printOutput("0");

		}
		
		else if(this.id=="%"){				
			   
			valOne=getOutput()
			console.log('is id %', valOne)
			printHistory(valOne + '%')
			valOne = valOne/100
			printOutput('')
			isPercentage = true
		}
		else if (this.id == "delete") 
		{
			historyData = [];        //history null
			showdata();
		}
		else if (this.id == "backspace") 
		{
			var output = getOutput();

			if (output) 
			{                  //if output has a value
				console.log(output);
				if (output.length > 1) 
				{
					output = output.substr(0, output.length - 1);
					printOutput(output);
				} else {
					printOutput("0");
				}
			}
		}
		else 
		{

			var output = getOutput();
			var history = getHistory();
			if (output != "")
			{
		      
				if (resultData == output) 
				{
					output="";
				}
				else{
					history = history + output;
				}
				
				if (this.id == "=") 
				{
					if(isPercentage){
						var valTwo = getOutput()
						printHistory(history)
						expressionData = history;
						var resultP = valOne * valTwo;
						console.log('result of %', resultP)
						printOutput(resultP),
						resultData = resultP,
						isPercentage = false,
						historyData.push({ expression: expressionData, result: resultP });
					   showdata();
					}else{
					var result = eval(history);
					resultData = result;
					expressionData = history;
					historyData.push({ expression: expressionData, result: resultData });
					showdata();
					printOutput(result);
					printHistory(history);
				}
				}
				else 
				{
				
					if (Number(document.getElementById("output-value").innerText) == resultData) 
				{

					if (Number(document.getElementById("output-value").innerText) > 0) 
					{
						history = (document.getElementById("output-value").innerText);
						// console.log(history);
					}

				}             
				// if (!history.includes("+") && this.id == "+") 
				// { 

					
				//   }
				  if (history!="" && output!="") {
					   
					history=eval(history) 
				  }
					history = history + this.id;
					printHistory(history);
					printOutput("");

				}
			}
			else{
				debugger
				history=history.substring(0, history.length - 1)
                history=history+this.id;
				printHistory(history);
			}
		}


	});
}
//  becaus every int button have same class its return a array
printOutput("0");
let havedot = false;
var number = document.getElementsByClassName("number");
console.log(number)

for (var i = 0; i < number.length; i++) 
{

	number[i].addEventListener('click', function () 
	{

		var output = getOutput();
		//  if (this.id == "." ) {
		// 	output.value = ""
		// }else 

		if (!output.includes(".") && this.id == ".") 
		{
			// console.log('include func')
			// console.log('output before', output)
			output += this.id
			// console.log('output after', output)
			printOutput(output);

		}

		if (output == '0') 
		{
			output = "";
		}

		if (output != NaN && this.id != '.') 
		{
			// debugger
			if (output==(resultData)&& output!="") {
				printHistory("");
				output="";
			}
				output = output + this.id;
			
			//if output is a number
			// printOutput("");
			printOutput(output);
		}

	});
}
