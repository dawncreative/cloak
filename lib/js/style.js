/*
init jquery
*/

function addButtonClick(){
	$('.items li').click(function(){
		var id = $(this).data('id');
		if (id=="pocketS" || id=="pocketC"){
			$('#'+id+' li').removeClass('active');
			$(this).addClass('active');
			var name = $('#pocketS li.active').data('name')+$('#pocketC li.active').data('name');
			var title = $('#pocketS li.active').data('title')+$('#pocketC li.active').data('title');
			$('#pocket').attr('src','img/pocket'+name+'.png');
			$('.pocketinfo font').text(title);
		}else{
			var name = $(this).data('name');
			var title = $(this).data('title');
			$('#'+id).attr('src','img/'+name+'.png');
			$('.'+id+'info font').text(title);
		}
	});

	$('button').click(function(){
		var id = $(this).attr('id');
		if (id=='check') {
			$('#selector').fadeOut(300,function(){
				$('#form').fadeIn();
			});
		}else if(id=='return'){
			$('#form').fadeOut(300,function(){
				$('#selector').fadeIn();
			});
		}else{
			window.print();
		}
	});
}

function setMenuEvent(){
	$('.menu').click(function(evt){
		evt.preventDefault();
		var url = $(this).attr('href');
		console.log(url);
		$('article,.background').removeClass('active');
		setTimeout(function(){ 
			window.location = url;
		}, 500);
	});
}

$(function(){
	setMenuEvent();
	addButtonClick();
	$('article,.background').addClass('active');
});