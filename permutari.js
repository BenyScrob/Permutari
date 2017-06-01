function permutari(k) 
{
  var solutii = [],i,n=4,
  intrare = [1, 2, 3],
  elemente = Array(intrare.length),
  solutie = Array(intrare.length);
  var i=0;
  if (k == intrare.length)
  {
	 return solutii.push(solutie.slice());
  }
	else
    {
        while (i < intrare.length) 
        {
           if (!elemente[i]) 
        {
             elemente[i] = true;
             solutie[k] = intrare[i];
             permutari(k + 1);
             elemente[i] = false;
             i++;
        } 
          else
          {
             i++;
          }
        }
        return solutii.push(solutie.slice());  
    }   
	console.log(solutii[i]);
}
console.log(permutari(4));