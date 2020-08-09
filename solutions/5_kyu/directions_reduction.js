function dirReduc(arr){
  for (let i = 0; i < arr.length - 1; i++) {
    const [a, b] = [arr[i], arr[i + 1]].sort();

    if (
      (a == "NORTH" && b == "SOUTH") 
      || (a == "EAST" && b == "WEST")
    ) {
      arr.splice(i, 2); // remove the two elements from the array
      i -= 2; // sets i the previous element's index for the next iteration
    };
  };
  
  return arr;
}