function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}
function food(){
    window.location.href="./html/Multio_food.html";
}
function movies(){
    window.location.href="./html/movies.html"
}
function fashion(){
    window.location.href="./html/multiplex.html"
}
function toggleMenu(data) {
    var a = document.getElementsByClassName(data)[0];
    a.style.width='150px';
 
    var y = document.querySelector("body");
   //  y.style.filter="blur(3px)";
    console.log(y);
 }
 function fun2(data){
   var  z = document.getElementsByClassName(data)[0];
   z.style.width="0px";
   z.style.color="red";
    console.log(z);
 }
 function book_abc(){
    window.location.href = "./html/form.html"
 }