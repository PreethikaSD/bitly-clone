
$(document).ready(function() {
	$("form").on('submit', function(event) {
		event.preventDefault();
		$.ajax({
			cache: false,
			url: '/urls',
			dataType: 'JSON',
			type: 'POST',
			data: $(this).serialize(),
			success: function(data) {
				if (data.short_url == null){
					$('#result').html(data);
					$(this).addClass('.message');
			} else {
					$('#result').html("<a href='" + data.short_url + "'>" + data.short_url + "</a>");
					}
			}
		})
	})

  	$('.signup').click(function() {
    self.confirm("Coming Soon!");
  });

  	$('.signin').click(function() {
	    self.confirm("Coming Soon!");
	});

  	$('.tour').click(function() {
	    self.confirm("Coming Soon!");
	});

  	$('.resources').click(function() {
	    self.confirm("Coming Soon!");
	});

  	$('.partners').click(function() {
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

   	$(".tour").hover(function(){
    	$(this).css("background-color", "yellow");
    	}, function(){
    	$(this).css("background-color", "white");
	});

   	$(".resources").hover(function(){
    	$(this).css("background-color", "yellow");
    	}, function(){
    	$(this).css("background-color", "white");
	});

   	$(".partners").hover(function(){
    	$(this).css("background-color", "yellow");
    	}, function(){
    	$(this).css("background-color", "white");
	});


})