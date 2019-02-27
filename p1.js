$(document).ready(function() { 
	$("#content_calculator").show(); 
});

$("#calculator_b").click(function() { 
	$("#content_calculator").show(); 
});

function dis(val)
{ 
    document.getElementById("result").value+=val 
} 
function clr() 
{ 
    document.getElementById("result").value="" 
}
function calculate()
{
    document.getElementById("result").value = eval(document.getElementById("result").value)
} 