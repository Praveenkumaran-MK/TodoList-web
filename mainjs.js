document.getElementById("sb").addEventListener("submit",(event)=>{
event.preventDefault();
let obj={
    username: document.getElementById("un").value ,

    password: document.getElementById("pass").value 

};
console.log(obj);

let us=localStorage.getItem(obj.username);
console.log(us);
if(us==null){

    console.log("username cant be founded..")
document.getElementById("def").textContent="its new username so added to storage";
}
else{
    if(obj.password!=us){
        document.getElementById("alert").textContent="username already exists but wrong password please try again....";
    }
    else{
        document.getElementById("alert").textContent="correct password entered for given username you can enter...";
    }
}
localStorage.setItem(obj.username,obj.password);

});