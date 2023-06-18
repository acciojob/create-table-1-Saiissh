function insert_Row() {
    //Write your code here
  // function insertRow() {
  var table = document.getElementById("sampleTable");
  var newRow = table.insertRow(1); // Insert at index 1 to add it at the top

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  cell1.innerHTML = "New Row, Cell 1";
  cell2.innerHTML = "Cell 2";
}
  
// }
