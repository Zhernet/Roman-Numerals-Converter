"use strict";

$(document).ready(function() {
  $("#convertToRoman").click(function() {
    var input = $("#input-arabic").val();
	
		$.ajax({
			type: 'POST', 
			url: 'http://localhost:3000/',
			data : {method: 'toRoman', input: input},	  
				success: function (response, status) {
			alert(response);
			}, error: function () {
			alert('Failed to connect to the server.');
			}
		});
  });  

	
  $("#convertToArabic").click(function() {
    var input = $("#input-roman").val();
	
		$.ajax({
			type: 'POST', 
			url: 'http://localhost:3000/',
			data : {method: 'toNumber', input: input},	  
				success: function (response, status) {
			alert(response);
			}, error: function () {
			alert('Failed to connect to the server.');
			}
		});
  });  
});

