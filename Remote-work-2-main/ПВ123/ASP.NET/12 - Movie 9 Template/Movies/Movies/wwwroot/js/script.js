


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

let page;
let url;
let totalPages;


function initPagination(p, u, t) {
    page = p;
    totalPages = t;
    url = u;
}



$('#buttonNext').click(async function () {
    page++;
    console.log(page);
    let response = await fetch(`${url}?page=${page}`);
    console.log(`${url}&page=${page}`);
    let result = await response.text();
    $('#movieResults').append(result);
    if (totalPages == page) $(this).remove();
});

let isScrol = true;
let isEnd = false;

$(window).scroll(async function () {

    if (!isEnd) {
        if ($(this).scrollTop() + $(this).height() > $(document).height() - 400 && isScrol) {
            isScrol = false;
            page++;
            console.log(page);
            let response = await fetch(`${url}?page=${page}`);
            console.log(`${url}&page=${page}`);
            let result = await response.text();
            $('#movieResults').append(result);
            if (totalPages == page) isEnd = true;// $(this).remove();

            isScrol = true
        }
    }

    //$('#buttonNext').click(async function () {
    //    page++;
    //    console.log(page);
    //    let response = await fetch(`${url}?page=${page}`);
    //    console.log(`${url}&page=${page}`);
    //    let result = await response.text();
    //    $('#movieResults').append(result);
    //    if (totalPages == page) $(this).remove();
    //});
})

