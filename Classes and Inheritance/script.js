"use strict";

class Users {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	static countUser() {
		console.log("there is 50 users");
	}

	register() {
		console.log(this.username + " is now registered");
	}
}

let bob = new Users("bob", "bob@gmail.com", "bob123");
bob.register();

//countUser là 1 static nên ko cần phải gọi trong bob
Users.countUser();

//Extend Class
class Member extends Users {
	constructor(username, email, password, memberPackge) {
		//gọi đén các đối số trong class cha (User)
		super(username, email, password);
		this.memberPackge = memberPackge;
	}

	getPackage() {
		console.log(
			this.username + " is subcribed to the " + this.memberPackge + " package"
		);
	}
}

let mike = new Member("mike", "mike@gmail.com", "mike123", "Standard");
mike.getPackage();
//Vì extend từ class User nên có thể sử dụng các hàm trong class User
mike.register();
