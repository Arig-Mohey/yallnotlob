$('.btn-edit').on('click',function(){
	$('.grp-input').hide();
	$('.grp-controls').show();
	$(this).parent().hide();

	$(this).parent().next().show()
	input = $(this).parent().next().children().first().children().first()
	// input.focusout(function(){
	// 	$('.grp-input').hide();
	// 	$('.grp-controls').show();
	// })
	inputText = input.val(); // set cursor to the end
	input.val('');  // set cursor to the end
	input.focus().val(inputText);  // set cursor to the end

});

$('.btn-close').click(function(){
	$('.grp-input').hide();
	$('.grp-controls').show();
})

$('.save-btn').click(function(){
	// token = $('meta[name="csrf-token"]').attr('content');
	// console.log($(this))
	// console.log($('meta[name="csrf-token"]'))
	id = $(this).attr('grpid');
	form = $(this).parent().prev();
	data = form.serialize();
	text = form.children().first().val();
	$(this).parent().parent().prev().children().last().text(text)

	$.post("/groups/"+id, data , function(data, status){
	    $('.grp-input').hide();
	    $('.grp-controls').show();
	});

})

$('.btn-remove').click(function(){
	id = $(this).attr('grpid');
	token = $('meta[name="csrf-token"]').attr('content');
	// if ($("#grps-list").children().length == 0) {
	// 	$("#grps-list").html('dfdf')
	// }
	$.post("/groups/"+id, {authenticity_token:token, _method:'delete'});
	$(this).parent().parent().remove();
})

$('.new-grp-btn').click(function(){
	token = $('meta[name="csrf-token"]').attr('content');
	name = $('.add-grp-txt').val();
	id = 1



	var item = $('.list-grp').first().clone(true, true);

	$('#grps-list').append(item)
	$('.grp-name').last().text(name)
	$('.grp-val').last().val(name)
	$('.add-grp-txt').val('').focus();

	console.log($('.grp-name'))

	// $.post("/groups/", {authenticity_token:token, name:name, user_id:id } , function(data, status){
	// 	console.log(data)
	// });


})