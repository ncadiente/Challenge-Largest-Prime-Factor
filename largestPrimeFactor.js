exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  var startNumber=n;
  // do your work here

  function isPrime(number){
    for(var i=2; i<number; i++){
      if (number%i===0){
        return false;
      }
    }
    return true;
  }

  function isDivisible(n, number){
    if (n%number===0){
      return true;
    }else{
      return false;
    }
  }

for (var i=(startNumber-1); i>0; i--){
  if (isPrime(i) && isDivisible(startNumber, i)){
    primeNumber = i;
    return primeNumber;
  }
}

};