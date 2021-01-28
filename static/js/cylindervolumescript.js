volumeBtn = document.querySelector('#button_volume');

volumeBtn.addEventListener('click',function(e){

    txtRadius = document.querySelector('#value_radius');
    txtHeight = document.querySelector('#value_height');
    txtResult = document.querySelector('#value_result');

    let V;

    V = 3.14*parseFloat(txtRadius.value)*parseFloat(txtRadius.value)*parseFloat(txtHeight.value);

    txtResult.value = V;
});