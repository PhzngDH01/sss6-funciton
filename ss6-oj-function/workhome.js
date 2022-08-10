///// Bài 1.  Viết chương trình cộng hai số

// function tong() {
//   let a = Number(prompt("Nhập a"));
//   let b = Number(prompt("Nhập b"));
//   let tong = parseInt(a) + b;
//   console.log(` Tổng a ,b là ${tong}`);
//   return;
// }
// tong();

///// Bài 2

// array = [1, 2, 3, 4, 5, 6];
// function tongle() {
//   tong = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       tong = tong + array[i];
//     }
//   }
//   console.log(` Tổng các số lẻ là ${tong}`);
//   return;
// }
// tongle();

// bài 2.1: Viết hàm tính bình phương của một số
//            bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.

// function binhphuong() {
//   let a = Number(prompt("Nhập số cần tính bình phương"));
//   bphuong = Math.pow(a, 2);
//   alert(` Bình phương của ${a} là ${bphuong}`);
// }
// binhphuong();

// Bài 2.2 : Viết hàm tính diện tích, hàm tính chu vi
//               hình tròn. Gọi hàm vừa xây dựng được.
// function hinhtron() {
//   let bankinh = Number(prompt("Nhập bán kính hình tròn"));
//   dientich = Math.PI * bankinh * bankinh;
//   chuvi = Math.PI * 2 * bankinh;
//   alert(` Diện tích hình tròn có bánh kính ${bankinh} là ${dientich}`);
//   alert(` Chu vi hình tròn có bán kinh ${bankinh} là ${chuvi}`);
// }
// hinhtron();

// Bài 2.3: Viết hàm tính giai thừa của một số nguyên bất kỳ
//           được đưa vào. Gọi hàm vừa xây dựng được.
// let gt = Number(prompt("Nhập một số nguyên bất kỳ để tính giai thừa"));
// function giaithua(gt) {
//   if (gt === 0) {
//     return 1;
//   } else {
//     return gt * giaithua(gt - 1);
//   }
// }
// giaithua(gt);
// console.log(` Giai thừa của ${gt} là ${giaithua(gt)}`);

// Bài 2.4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không.
//           Nếu là ký tự số hàm trả về true, ngược lại trả về false.
// let a = "jasjsdj";
// function kta(a) {
//   return typeof a == "number";
// }
// console.log(kta(a));
// kta(5);

// Bài 2.5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.

// alert("Mời cu em nhập 3 số nguyên bất kỳ");
// let a = Number(prompt("Nhập số thứ nhất"));
// let b = Number(prompt("Nhập số thứ hai"));
// let c = Number(prompt("Nhập số thứ ba"));

// function min() {
//   if (a <= b && a <= c) {
//     alert(` Số ${a} là số bé nhất`);
//   } else if (b <= a && b <= c) {
//     alert(` Số ${b} là số bé nhất`);
//   } else if (c <= b && c <= a) {
//     alert(` Số ${c} là số bé nhất`);
//   }
//   return;
// }
// min();

// Bài  2.6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải
//          là nguyên dươngkhông. Nếu là nguyên dương trả về true, ngược lại trả về false.
// let so = Number(prompt("Nhập số bất kỳ"));
// function kta(so) {
//   if (so > 0 && so % 2 === 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// kta(so);

// Bài  2.7 :  Viết hàm truyền vào 2 số nguyên bất kì,
//             thực hiện đổi chỗ hai số nguyên đó.
// let a = 5,
//   b = 7;

// function swap(a, b) {
//   temp = a;
//   a = b;
//   b = temp;
//   alert(`a =${a} b =${b}`);

//   return;
// }
// swap(a, b);

// Bài 2.8: Viết hàm truyền vào mảng số nguyên bất kỳ,
//           sau đó đảo ngược mảng số nguyên đó.

// let oo = [1, 2, 3, 4, 5];

// function songuyen(oo) {
//   oo.reverse();
//   console.log(` Đảo ngược sẽ là ${oo}`);
// }
// songuyen(oo);

// Bài 2.9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ,
//           kiểm tra xem ký tự bất kỳđó có nằm trong mảng không.
//           Nếu có trả về số lần xuất hiện của ký tự đó,

// function ktra() {
//   let kytu = prompt("Hãy nhập một mảng ký tự").split("");
//   let kytu1 = prompt("Nhập một ký tự bất kì để ktra");
//   let number = 0;
//   for (let i = 0; i < kytu.length; i++) {
//     if (kytu[i] === kytu1) {
//       number = number + 1;
//     }
//   }
//   if (number > 0) {
//     alert(` Số lần xuất hiện là ${number}`);
//   } else {
//     alert("Không xuât hiện ");
//     return -1;
//   }
// }
// ktra();
