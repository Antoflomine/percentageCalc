var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
var result=document.getElementById("result");
var form=document.getElementById("xy")


form.addEventListener('submit',function(event){
 if(!num1.value || !num2.value){
     alert("Please enter the value");
 }
    else{
          var x=parseFloat(num1.value);
          var y=parseFloat(num2.value);
        var resul=x/y;
        var per=resul*100;
        result.innerHTML="Answer="+per+"%";
        event.preventDefault();
    }

})
