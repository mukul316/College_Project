$(function (){}


$.ajax({
	type:'GET'
	Url: '/api/users'

	 success: function(data) {
	 Console.log('sucess', data);
	 }
	 }
});


);