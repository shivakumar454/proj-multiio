data = {}
ver = {}
function fun(){
    document.getElementById('id01').style.display='block';
    // document.body.classList.add('blur');
}
function fun1(){
    document.getElementById('id01').style.display='none';
    // document.body.classList.remove('blur');
}
function sign(){
    document.getElementById('id1').style.display='block';
    // document.body.classList.add('blur');

}
function sign1(){
    document.getElementById('id1').style.display='none';
    // document.body.classList.remove('blur');
}
function f1(a){
    data["cuname"] = a.target.value;
}
function f2(b){
    data["cpswrd"] = b.target.value;
}
function f3(c){
    data["vpswrd"] = c.target.value;
}
function set(event){
    event.preventDefault();
console.log(data)

    localStorage.setItem("uname",data["cuname"]);
    localStorage.setItem("cpswrd",data["cpswrd"]);
    localStorage.setItem("vpswrd",data["vpswrd"]);
    console.log(data["cuname"])
    console.log(localStorage.getItem("uname"))
    if(data["cpswrd"]===data["vpswrd"] && data["cpswrd"]!=="" && data["vpswrd"]!=="")
    {
        alert("sucessfully registered");
        sign1();
    }
    else{
        alert("new password and verify password Doden't matches")
    }
}
function final1(a){
    ver["uname"]=a.target.value;
    localStorage.setItem("final_u",ver["uname"])
}
function final2(d){
    ver["pass"] = d.target.value;
    localStorage.setItem("final_p",ver["pass"])
}
console.log(ver)
function set1(event,re){
    event.preventDefault();
    console.log(localStorage.getItem("final_p"))
    console.log(data["cpswrd"])
    if(ver["uname"]===data["cuname"] && localStorage.getItem("final_p")===data["cpswrd"]){
        
        document.getElementsByClassName("login")[0].innerHTML=ver["uname"];
        document.getElementsByClassName("signup")[0].style.display="none";
        alert("login")
        fun1();
        sign1();
    }
    else{
        alert("enter valid details")
    }
}
// localStorage.clear()