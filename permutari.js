function permutari() 
{
  var k=0, s=[], valid=false, n=4; 
  s[k] = 0;
  
  while (k >= 0) 
  {
    s[k]++;
    valid = false;
    while (!valid && s[k] <= n) 
    {
      if (ver(s, k + 1)) 
      {
        valid = true;
      } 
      else
      {
        s[k]++;
      }
    }
    
    if(valid)
    {
   if(k==n-1)
   {
   	console.log(s);
   	}
    else
    {
    k++;
    s[k]=0;
    }
    }else{
    k--;
    }
  }
}

function ver(arr, k) 
{
  for (var i = 0; i < k - 1; i++) 
  {
    for (var j = i + 1; j < k; j++)
    {
      if (arr[i] == arr[j])
        return false
    }
  }
  return true;
}
console.log(permutari(4));