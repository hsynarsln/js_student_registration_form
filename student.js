// class Student1 {
//   constructorStudent(imageUrl, studentName, studentPath) {
//     console.log(this);
//   }
// }
function Student(imageUrl, studentName, studentPath) {
  // console.log(this); //* Student {}
  // console.log(self); //* Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  this.imageUrl = imageUrl;
  this.studentName = studentName;
  this.studentPath = studentPath;
  // console.log(this); //* Student {imageUrl: 'url', studentName: 'Ryan', studentPath: 'Fullstack'}
}

// const std = new Student('url', 'Ryan', 'Fullstack');
// console.log(std); //*Student {imageUrl: 'url', studentName: 'Ryan', studentPath: 'Fullstack'}
// const std2 = new Student('url', 'Daniel', 'AWS');
// console.log(std2); //* Student {imageUrl: 'url', studentName: 'Daniel', studentPath: 'AWS'}
