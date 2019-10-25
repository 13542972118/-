function factorial(a){
    var sum = 0;
    for(var i = 1;i <=a;i++){
        if(a % i == 0){
            sum++;
        }
    }
    if(sum == 2){
        return true;
    }else{
        return false;
        }
    }
 function goldbach(b){
    b= document.getElementById("odd").value
    b = parseInt(b)
    let result = ''
    var x;
    for(var j=2;j<b-2;j++){
        x = b -j;
        if(factorial(j)&&factorial(x)&&j<=x){
        result += (b +"可以拆分为两个质数"+ j + "与" + x + "的和" + '<br>');
          }
    }
    document.getElementById("goldbach").innerHTML =result;
  }