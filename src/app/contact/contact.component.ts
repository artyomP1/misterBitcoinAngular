import { Component, OnInit } from "@angular/core";
import { ContactService } from "../contact.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contacts = [];
  contactService: ContactService = null;
  // DI
  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  ngOnInit() {
    this.contacts = this.contactService.query();
    console.log("contacts", this.contacts);
  }
}
