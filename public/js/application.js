
$(document).ready(function() {
  	$('.signup').click(function() {
    self.confirm("Coming Soon!");
  });

  	$('.signin').click(function() {
	    self.confirm("Coming Soon!");
	});

   	$('.hide').click(function(){
		$('.table').fadeOut('slow');
		$('.hide').hide();
   	});

   	$('.show').click(function(){
    	$('.table').show(); 
    	$('.hide').show(); 
   	});

   	$(".signin").hover(function(){
    	$(this).css("background-color", "yellow");
    	}, function(){
    	$(this).css("background-color", "white");
	});

   	$(".signup").hover(function(){
    	$(this).css("background-color", "yellow");
    	}, function(){
    	$(this).css("background-color", "white");
	});


});