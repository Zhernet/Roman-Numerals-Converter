"use strict";

$(document).ready(function() {
  $("#convert").click(function() {
    var input = $("#input").val();
	
		$.ajax({
			type: 'POST', 
			url: 'http://localhost:3000/',
			data : {input: input},	  
			success: function (response, status) {
				$("#result").val(response);
			}, error: function () {
				$("#result").val('Failed to connect to the server.');
			}
		});
  });	
});

