let studentForm = document.getElementById("studentForm");
let studentTable = document.getElementById("studentTable");
let students = []; // tạo 1 mảng lưu trữ thông tin sinh viên

studentForm.addEventListener("submit", function (event) {
  // Lấy giá trị từ form
  let name = document.getElementById("name").value;
  let age = parseInt(document.getElementById("age").value);
  let major = document.getElementById("major").value;

  // Tạo đối tượng sinh viên và thêm vào mảng
  let student = { name, age, major };
  students.push(student);

  // Cập nhật bảng
  updateTable();
  event.preventDefault(); // Ngăn form submit mặc định - Nếu ko có thì form sau khi nhập tự động bị xóa

  // DOngTB - Xóa hêt các trường nhập sau khi thêm vào table
  // Dùng reset() cua form
  document.getElementById("studentForm").reset();

  // Cách 2: set lại các giá trị là rỗng
  // document.getElementById("name").value = "";
  // document.getElementById("age").value = "";
  // document.getElementById("major").value = "";
});

// console.log(students); //Kiểm tra xem thông tin có đc update vavfo Stundent chưa

/* DOngTB 
- Đoạn code này sẽ có vấn đề là khi e ấn thêm một student thì ngoài thằng mới thêm được in ra,
nó còn in ra các thằng cũ đã có trong students nữa. Vì vậy có hiện tượng thừa bản ghi trong table.
-> Trước khi update table ta phải reset table body rồi mới in lại list student
-> Hoặc ở dưới e ko dùng for nữa mà dùng kiểu mỗi lần ấn sẽ thêm 1 dòng cũng OK
*/
// // thêm thông tin sv vào bảg và in ra
// function updateTable() {
//   for (let student of students) {
//     let row = studentTable.insertRow();
//     let nameCell = row.insertCell();
//     let ageCell = row.insertCell();
//     let majorCell = row.insertCell();

//     nameCell.textContent = student.name;
//     ageCell.textContent = student.age;
//     majorCell.textContent = student.major;
//   }
// }

// Cách 1: Reset tbody khi render lại table
// Tuy nhiên cách này ít dùng vì dùng các function thêm hàng cột sau rất khó đọc code
// function updateTable() {
//   // reset tbody
//   let bodyTable = document.querySelector('tbody');
//   bodyTable.innerHTML = '';
//   // in ra danh sách student
//   for (let student of students) {
//     let row = bodyTable.insertRow();
//     let nameCell = row.insertCell();
//     let ageCell = row.insertCell();
//     let majorCell = row.insertCell();

//     nameCell.textContent = student.name;
//     ageCell.textContent = student.age;
//     majorCell.textContent = student.major;
//   }
// }

// Cách 2: Dùng code HTML, mỗi lần chạy 1 vòng for sẽ thêm 1 hàng
function updateTable() {
  // reset tbody
  let bodyTable = document.querySelector("tbody");
  bodyTable.innerHTML = "";
  // in ra danh sách student
  for (let student of students) {
    bodyTable.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.major}</td>
      </tr>
    `;
  }
}
