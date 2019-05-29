$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});
$(document).ready(function () {
	$('.edit').click(function () {
		let id = $(this).data('id');
		//alert(id);
		// Edit
		$.ajax({
			url: 'admin/category/' + id + '/edit',
			dataType: 'json',
			type: 'get',
			success: function ($result) {
				console.log($result);
				$('.name').val($result.name);
				$('.title').text($result.name);
				$('.status').val($result.status);
			}
		});
		$('.update').click(function () {
			let name = $('.name').val();
			let status = $('.status').val();
			$.ajax({
				url: 'admin/category/' + id,
				data: {
					name: name,
					status: status
				},
				type: 'put',
				dataType:'json',
				success : function ($result) {
					console.log($result);
				}
			})
		})
	});
});