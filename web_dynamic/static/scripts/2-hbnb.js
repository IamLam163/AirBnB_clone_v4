$(document).ready(function () {
  const AmenitiesChecked = {}; 
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      AmenitiesChecked[$(this).data('id')] = $(this).data('name');
    } else {
      delete AmenitiesChecked[$(this).data('id')];
    }   
    const Firstobj = Object.values(AmenitiesChecked);
    if (Firstobj.length) {
      $('div.amenities > h4').text(Object.values(AmenitiesChecked).join(','));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
	$.get('http://localhost:5001/api/v1/status/',
		function(body) {
	$('#api_status').toggleClass('available', body.status === 'OK')
		});
});
