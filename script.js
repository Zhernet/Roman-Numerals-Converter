"use strict";

$(document).ready(function() {
  $("#calculate").click(function (e) {
    e.preventDefault();
    let input = $("#input-arabic").val();
	
	$.ajax({
	  type: 'POST', 
	  url: 'http://localhost:3000/',
	  data : {input: input},	  
      success: function (response, status) {
		alert(response);
	  }, error: function () {
		alert('Failed to connect to the server.');
	  }
    });
  });  
});

