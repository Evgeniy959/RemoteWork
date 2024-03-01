


//$('img').on('error', function () {
//    // console.log("Hello");
//    $(this).attr("src", "/images/placeholder.png");
//});


$('[data-open-modal]').click(async function () {

  
    event.preventDefault();
    $('.modal-body').html(" ");
    $('#movieModal').modal('show'); 
    let url = $(this).attr('href');
    let response = await fetch(url);
    let result = await response.text();
    console.log(result)

    $('.modal-body').html(result);
   

})