 //let respond = document.querySelector('.toggle');
 //let view = document.querySelector('.navbar');

//respond.addeventlisterner("click" , function () {
  //   if (view.style.display === "none"){
    //     view.style.display = 'block';
     //}
     //else{
       //  view.style.display = 'none';
     //}
//});

 let responsive = document.querySelector('.toggle');
let view = document.querySelector('.navbar');


responsive.addEventListener("click" , function () {
  if (view.style.display === "none"){
    view.style.display = 'block';
  }
  else{
    view.style.display = 'none';
  }
});