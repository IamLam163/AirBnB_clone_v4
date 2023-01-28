$(document).ready(function() {
  var amenityIds = [];

  $('input[type="checkbox"]').change(function() {
    var amenityId = $(this).data('id');
    if (this.checked) {
      amenityIds.push('id');
    } else {
      var index = amenityIds.indexOf(amenityId);
      if (index > -1) {
        amenityIds.splice(index, 1);
      }
    }
    $('#amenities h4').text(amenityIds.join(', '));
  });
});

