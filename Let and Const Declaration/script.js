testVar = () => {
	var a = 30;
	if (true) {
		var a = 50;
		console.log(a);
	}
	console.log(a);
};
testVar();

testLet = () => {
	let b = 30;
	if (true) {
		let b = 50;
		console.log(b);
	}
	console.log(b);
};
testLet();

for (var i = 0; i < 10; i++) {
	console.log(i);
	//log: 0 1 2 3 4 5 6 7 8 9
}
console.log(i);
//vì i đi đến 10 lớn hơn điều kiện lặp nên ra khỏi vòng lặp,giá trị i đc gán bằng 10
//log: 10

//const
const colors = [];

colors.push("red");
colors.push("blue");
console.log(colors);

//error: ko thể thay đổi color từ array sang 1 kiểu khác
colors = "green";
console.log(colors);
