import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  user = { name: "" };
  UserService: UserService = null;
  constructor(UserService: UserService, private router: Router) {
    this.UserService = UserService;
  }

  ngOnInit() {}

  saveUser(userName: string) {
    this.user.name = userName;
    this.UserService.logIn(this.user);
    this.router.navigate([""]);
  }

  // updateUser() {
  //   console.log(this.user);
  //   this.UserService.logIn(this.user);
  //   this.router.navigate([""]);
  // }
}
