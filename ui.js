//* --------------------------
//! FUNCTIONAL BASE CLASS
//* --------------------------

function UI() {}

console.log(new UI().__proto__); //? constructor yapısını veriyor(objenin protosu) ({constructor: ƒ})
// console.log(new Object().__proto__); //? constructor yapısını veriyor(objenin protosu) ({constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …})
console.log(UI.prototype); //? constructor yapısını veriyor(clasın prototype ı) ({constructor: ƒ})

UI.prototype.addStudentToUI = newStudentObject => {
  //? ui'ın prototype'ına fonksiyon ekledik
  const tbody = document.getElementById('Students');
  tbody.innerHTML += `<tr>
    <td><img src="${newStudentObject.imageUrl}" class="img-fluid img-thumbnail" style="width:100px; border-radius:50%"></td>
    <td>${newStudentObject.studentName}</td>
    <td>${newStudentObject.studentPath}</td>
    <td><a href="#" id="delete-student" onclick="ui.clearStudent(this)" class="btn btn-danger delete">Delete Student</a></td>
  </tr>`;
};

UI.prototype.clearInputs = inputArray => {
  inputArray.forEach(element => {
    element.value = '';
  });
};

UI.prototype.clearStudents = () => {
  tbody.innerHTML = '';
};

UI.prototype.clearStudent = element => {
  let row = element.parentNode.parentNode;
  row.parentNode.removeChild(row);
};

// Array.prototype.filter();
// Array.prototype.map();
// Array.prototype.splice();
// Array.prototype.reduce();
// Array.prototype.split();
// const array = new Array();
// array.map();
