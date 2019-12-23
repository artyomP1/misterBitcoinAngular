import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}
  getLoggedUser() {
    return JSON.parse(localStorage.getItem("USER"));
  }

  getUserToContactMoves(contact) {
    let user = JSON.parse(localStorage.getItem("USER"));
    let moves = user.moves;
    console.log(moves);
    moves = moves.filter(move => {
      return move.toId === contact.contact._id;
    });
  }

  logIn(user) {
    const newUser = { name: user.name, coins: 100, moves: [] };
    localStorage.setItem("USER", JSON.stringify(newUser));
  }

  addMove(contact, amount) {
    let move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount: amount
    };
    let user = JSON.parse(localStorage.getItem("USER"));
    user.coins -= amount;
    user.moves.unshift(move);
    localStorage.setItem("USER", JSON.stringify(user));
  }
}
