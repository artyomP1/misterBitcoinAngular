import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { BitcoinService } from "../bitcoin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  user = "";
  bitCoinRate: object;

  UserService: UserService = null;
  BitcoinService: BitcoinService = null;
  constructor(
    UserService: UserService,
    BitcoinService: BitcoinService,
    private router: Router
  ) {
    this.UserService = UserService;
    this.BitcoinService = BitcoinService;
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(["/signup"]);
  }

  ngOnInit() {
    this.user = this.UserService.getLoggedUser();
    this.bitCoinRate = this.BitcoinService.getRate();
    // this.bitCoinRate = this.bitCoinRate.data;
    console.log("user", this.user);
    console.log("user", this.bitCoinRate);
    if (!this.user) this.router.navigate(["/signup/"]);
  }
}
