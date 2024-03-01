// $("#btn").click(function() {
//     // console.log("Hello");
//     // $(this)
//     //     .text("Farid")
//     //     .attr("title", "Hello")
//     //     .addClass("myColor");


//     // $(this).hide(5000);
//     //$(this).show(5000);

//     //  $('p').toggle(5000);
//     // $('p').fadeOut(1000);
//     // $('p').fadeIn(1000);

//     // $('p').fadeToggle(2000);

//     // $('p').slideToggle(2000);

//     // $('p').append("<button>2</button>")
//     // $('p').append("<button>2</button>")
//     // $('p').after("<button>2</button>")
//     // $('p').before("<button>2</button>") 

//     // $('p').after($("#btn").clone(true, true));
// });


$("#cities .header").click(function() {
    //console.log($(this).text());

    //$(this).next().slideToggle();
    // $(this).nextAll().slideToggle();
    // $(this).nextUntil('.header').slideToggle();

    // $(this).prev().slideToggle();
    // $(this).prevAll().slideToggle();
    // $(this).prevUntil('.header').slideToggle();

    // $(this).parent().slideToggle();

    // $('#cities').find('.description').slideToggle();


    // $('#cities .description').slideUp();
    // $(this).next().slideToggle();

    $('#cities .description').not($(this).next()).slideUp();
    $('#cities .header').not(this).find('i').removeClass('fa-minus').addClass('fa-plus');

    $(this).next().slideToggle();
    $(this).find('i').toggleClass('fa-plus').toggleClass('fa-minus');
});


$('#citySearch').submit(async function() {
    event.preventDefault();
    let cityName = $('#cityName').val();
    console.log(cityName);

    $('#cities .elem:first')
        .clone(true, true)
        .appendTo('#cities')
        .find('.header')
        .html(cityName + "<i class='fa-solid fa-plus'>");

    let data = await $.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=82d18c260f5f2d9b4f74e6d383d10282`);
    console.log(data);
});