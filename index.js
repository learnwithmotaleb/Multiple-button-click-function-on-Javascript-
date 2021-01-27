var myHeading=document.querySelector("h1");
document.querySelector("#myButton1").addEventListener("click",function(){
    var text=this.innerHTML;
myHeading.innerHTML= text+" is clicked";
myHeading.classList.add("nila");
});
document.querySelector("#myButton2").addEventListener("click",function(){
    var text=this.innerHTML;
    myHeading.innerHTML=text+" is clicked";
    myHeading.classList.add("nila");
  
    });

document.querySelector("#myButton3").addEventListener("click",function(){
    var text=this.innerHTML;

        myHeading.innerHTML=text+" is clicked";
        myHeading.classList.remove("nila");
        });
        
    