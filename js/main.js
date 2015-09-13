
// Changes the picture
$(document).ready(function() {
  $("input:radio[name=color]").click(function(){
    var value = $(this).val();
    var image_name;
    if(value == 'black'){
      image_name = "img/blowDry.png";
    }else{
      image_name = "img/blowDry-gold.png";
    }
    $('#product').attr('src', image_name);
  });


//adds and subtracts quantity

  $('.qty').click(function() {
    var button = $(this),
        qtyField = $('input[name=qty'),
        val = parseInt(qtyField.val()),
        valMax = 100,
        valMin = 0;

    if(isNaN(val) || val < valMin) {
        qtyField.val(valMin);
        return false;
    } else if (val > valMax) {
        qtyField.val(valMax);
        return false;
    }

    // +/- logic
    if(button.data('func') == 'plus') {
        if(val < valMax) qtyField.val(val + 1);
    } else {
        if(val > valMin) qtyField.val(val - 1);
    }
  });
});
