function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

  return anim.slice(beginSlice,endSlice);
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

let result = (sliceArray(inputAnim, 1, 3));

// Only change code above this line



function getOutput() {
  document.getElementById("output").textContent = result;
}