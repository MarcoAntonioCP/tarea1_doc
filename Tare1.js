function preuno(){
  var matrix = [[0, 1, 1, 2],
                [0, 5, 0, 0],
                [2, 0, 3, 3]];
  var sum=0;
  for(var i=0;i<3;i++){
    for(var j=0;j<4;j++){
      sum+=matrix[i][j];
    }
  }
  return sum;
}



function predos(n){
  var r=parseInt(((n-1)/100))+1
  return r;
}

function tres(x){
  for(var i=0;i<x.length;){
    if(x.charAt(i)=='('){
      x=x.substring(0,i)+voltear(x.substring(i+1));

    }
    else
      i++;
  }
  return x;
}
function voltear(x){
    var result="";
    var aux1="";
    for(var i=0;i<x.length;i++){

      if(x.charAt(i)=='('){
        x=aux1+voltear(x.substring(i+1));
      }

      if(x.charAt(i)==')'){
          var aux2="";
          for(var j=aux1.length-1;j>=0;j--)
            aux2=aux2+aux1.charAt(j);
          return aux2+x.substring(i+1);
      }
      else {
        aux1=aux1+x.charAt(i);
      }
    }
    return result;
}

function precuatro(x){
  var tam=parseInt(x.length);
  if(tam%2==1)
    return false;
  else {
    tam=parseInt(tam/2);
    return (x.substring(0,tam)==(x.substring(tam,tam*2)))
  }
}

function precinco(p,n){
  n=n+1;
  var suma=p;
  while(n--!=0){
    suma*=10;
  }
  suma+=p;
  suma=Math.pow(suma,2);
  var total=0;
  while(suma>0){
    total+=suma%10;
    suma=parseInt(suma/10);
  }
  return total;
}

console.log("ejemplo del ejercicio uno : "+preuno());
console.log("ejemplo del ejecicio dos :"+predos(100));
console.log("ejemplo del ejercicio tres: "+pretres("de(gs)ra(aic)"));
console.log("ejemplo del ejercicio cuatro: "+precuatro("aa"));
console.log("ejemplo del ejercicio cinco : "+cinco(1,2));
