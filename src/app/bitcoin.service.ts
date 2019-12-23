import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import axios from "axios";

@Injectable({
  providedIn: "root"
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  getRate() {
    // return new Promise((resolve, reject) => {
    //    this.http
    //     .get(`https://blockchain.info/tobtc?currency=USD&value=1&cors=true`)
    //     .then(res => {
    //       resolve(res.data);
    //       res = res.data;
    //     });
    // });
    return this.http.get(
      "https://blockchain.info/tobtc?currency=USD&value=1&cors=true"
    );
    // .pipe(tap(res => this.log(res)));
    // .then(response => {
    //   return response.data;
    // });
    // .catch(e => {
    //   console.log("we have a problem");
    // });
  }

  getMarketPrice() {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.blockchain.info/charts/market-price?timespan=12months&format=json&cors=true`
        )
        .then(res => {
          console.log(res.data);
          resolve(res.data);
        });
    });
  }

  getTransactions() {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.blockchain.info/charts/n-transactions-per-block?timespan=12months&format=json&cors=true`
        )
        .then(res => {
          console.log(res.data);
          resolve(res.data);
        });
    });
  }
}
