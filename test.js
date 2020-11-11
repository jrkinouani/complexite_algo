const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    const array = Array.from(data.split(/\s+/))
    const newArray = array.map(function(item){
        return parseInt (item, 10);
    })
    console.log("mon tableau", (newArray));

    console.log("------------------");
    let comparaisonsCounter = 0;
    const a = (newArray) => {
       
        let changed;
        do{
            changed = false;
            for(let i=0; i < newArray.length-1; i++) {
                comparaisonsCounter++
                if(newArray[i] > newArray[i+1]) {
                    let tmp = newArray[i];
                    newArray[i] = newArray[i+1];
                    newArray[i+1] = tmp;
                    changed = true;
                }
            }
        } while(changed);
    }
    
    a(newArray);
    console.log("tri à bulle", (newArray));  console.log("nombre de comparaisons : ", (comparaisonsCounter))

    console.log("-------------");
 
   const b = (newArray) => {
    for(let i = 0; i < newArray.length; i++){
        comparaisonsCounter++
      //stocker l'index de l'élément minimum
      let min = i; 
      for(let j = i+1; j < newArray.length; j++){
        if(newArray[j] < newArray[min]){
         // mettre à jour l'index de l'élément minimum
         min = j; 
        }
      }
      let tmp = newArray[i];
      newArray[i] = newArray[min];
      newArray[min] = tmp;
    }
    return newArray;
  };
  
  b(newArray);
  console.log("tri a selection", (newArray)); console.log("nombre de comparaisons : ", (comparaisonsCounter))

  console.log("--------------")

  const c = (newArray) => {
    //nombre des éléments dans le tableau
    let len = newArray.length;       
    let tmp, i, j;                  
    
    for(i = 1; i < len; i++) {
        comparaisonsCounter++
      //stocker la valeur actuelle 
      tmp = newArray[i]
      j = i - 1
      while (j >= 0 && newArray[j] > tmp) {
        // déplacer le nombre
        newArray[j+1] = newArray[j]
        j--
      }
      //Insère la valeur temporaire à la position 
      //correcte dans la partie triée.
      newArray[j+1] = tmp
    }
    return newArray
  }
  c(newArray);
  console.log("tri par insertion",  (newArray)); console.log("nombre de comparaisons : ", (comparaisonsCounter))

console.log("--------------")
const quickSort= (newArray, left = 0, right = newArray.length - 1)=> {
    comparaisonsCounter++
    if (newArray.length < 2) return newArray;
  
    const index = partition(newArray, left, right);
  
    if (left < index - 1) {
      quickSort(newArray, left, index - 1)
    }
    if (right > index) {
      quickSort(newArray, index, right)
    }
    return newArray;
  }
  console.log("tri rapide", (newArray)); console.log("nombre de comparaisons : ", (comparaisonsCounter))

  console.log("-----------");

  const merge =(left, right) => {
    comparaisonsCounter++
    var newArray = [], l = 0, r = 0;
    while (l < left.length && r < right.length){
        if (left[l] < right[r]){
            newArray.push(left[l++]);
        } else {
            newArray.push(right[r++]);
        }
    }
    return newArray.concat(left.slice(l)).concat(right.slice(r));
}
const sort = (newArray) => {
    if (newArray.length < 2) {
        return newArray;
    }
    var mid = Math.floor(newArray.length / 2),
        right = newArray.slice(mid),
        left = newArray.slice(0, mid),
        p = merge(sort(left), sort(right));
    
    p.unshift(0, newArray.length);
    newArray.splice.apply(newArray, p);
    return newArray;
}

sort(newArray);
console.log("tri fusion",(newArray)); console.log("nombre de comparaisons : ", (comparaisonsCounter))

console.log("-----------");

const shellSort = (newArray) => {
  comparaisonsCounter++
  var increment = newArray.length / 2;
  while (increment > 0) {
      for (i = increment; i < newArray.length; i++) {
          var j = i;
          var temp = newArray[i];
  
          while (j >= increment && newArray[j-increment] > temp) {
              newArray[j] = newArray[j-increment];
              j = j - increment;
          }
  
          newArray[j] = temp;
      }
  
      if (increment == 2) {
          increment = 1;
      } else {
          increment = parseInt(increment*5 / 11);
      }
  }
return newArray;
}
shellSort(newArray);
console.log(" tri par shell" ,(newArray));console.log("nombre de comparaisons : ", (comparaisonsCounter))

console.log("-----------");

const heap_root = (input, i) => {
  comparaisonsCounter++
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < array_length && input[left] > input[max]) {
      max = left;
  }

  if (right < array_length && input[right] > input[max])     {
      max = right;
  }

  if (max != i) {
      swap(input, i, max);
      heap_root(input, max);
  }
}

const swap = (input, index_A, index_B) => {
  let temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
}

const heapSort = (input) => {
  
  array_length = input.length;

  for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
      heap_root(input, i);
    }

  for (i = input.length - 1; i > 0; i--) {
      swap(input, 0, i);
      array_length--;
    
      heap_root(input, 0);
  }
}


heapSort(newArray);
console.log(" tri par tas" ,(newArray));console.log("nombre de comparaisons : ", (comparaisonsCounter))
});

