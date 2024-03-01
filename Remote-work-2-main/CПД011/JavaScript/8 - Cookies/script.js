document.addEventListener('DOMContentLoaded',function(){
    readCookie();
});

document.querySelector('#one').addEventListener('click',function() {
    //document.querySelector('#myH').style.backgroundColor = "red";
    document.cookie ="theme=red;max-age=604800";
    readCookie();
})

document.querySelector('#two').addEventListener('click',function() {
    //document.querySelector('#myH').style.backgroundColor = "blue";
    document.cookie ="theme=blue;max-age=604800";
    readCookie();
})

document.querySelector('#three').addEventListener('click',function() {
    //document.querySelector('#myH').style.backgroundColor = "green";
    document.cookie ="theme=green;max-age=604800";
    readCookie();
})


function readCookie() {
  let theme = document.cookie;
  console.log('Cookie => ' + theme);
  let value = theme.split('=')[1]; // [0] => theme , [1] => green
  
  console.log('value => ' + value);

  document.querySelector('#myH').style.backgroundColor = value;
}


