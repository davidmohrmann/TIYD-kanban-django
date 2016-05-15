var $cards = $('#cards');

$.get('http://localhost:8000/cards/', function(cards){
	cards.results.forEach(function(card) {
		console.log(card)
		var $li = $('<li>');
		$li.text(card.name)
		$li.appendTo($cards);
	})
})


var $card = $('#card');
var $name = $('input[name="name"]');
var $description = $('input[name="description"]');
var $priority = $('input[name="priority"]');
var $status = $('input[name="status"]');
// var $card = $('#card');
$task.submit(function() {
	console.log('You submitted a new card');
	$.ajax({
		method: 'post',
		url: 'http://localhost:8000/static/cards/',
		username: 'davidmohrmann',
		password: 'password123',
		data: {
			name: $name.val(), 
			description: $description.val(),
			status: $status.val(),
			priority: $priority.val()
		},
		success: function(newCard) {
			console.log(newCard)
			var $li = $('<li>');
			$li.text(newCard.name)
			$li.appendTo($cards);
		}
	});
	return false;
});

	// $.ajax({
	// 	method: 'patch',
	// 	url: 'http://localhost:8000/static/cards/cards.html',
	// 	username: 'davidmohrmann',
	// 	password: 'password123',
	// 	data: {
	// 		name: $name.val(), 
	// 		description: $description.val(),
	// 		status: $status.val(),
	// 		priority: $priority.val()
	// 	},
	// 	success: function(editCard) {
	// 		console.log(editCard)
	// 		// var $li = $('<li>');
	// 		// $li.text(editCard.name)
	// 		// $li.appendTo($cards);

	// $.ajax({
	// 	method: 'delete',
	// 	url: 'http://127.0.0.1:8000/cards/',
	// 	username: 'davidmohrmann',
	// 	password: 'password123',
	// 	data: {
	// 		name: $name.val(), 
	// 	},
	// 	success: function(deleteCard) {
	// 		console.log(deleteCard)
	// 		// var $li = $('<li>');
	// 		// $li.text(newCard.name)
	// 		// $li.appendTo($cards);
	// 	}
	

