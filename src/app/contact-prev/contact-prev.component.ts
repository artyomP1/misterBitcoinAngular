import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-contact-prev",
  templateUrl: "./contact-prev.component.html",
  styleUrls: ["./contact-prev.component.css"]
})
export class ContactPrevComponent implements OnInit {
  constructor() {}
  @Input() contact;
  ngOnInit() {
    console.log("contact", this.contact);
  }
}
