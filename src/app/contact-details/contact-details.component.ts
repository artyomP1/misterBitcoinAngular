import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactService } from "../contact.service";

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.css"]
})
export class ContactDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, contactService: ContactService) {
    this.contactService = contactService;
  }
  id: string;
  contact = null;
  contactService: ContactService = null;

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.contact = this.contactService.getContactById(this.id);
    console.log(this.contact);
    console.log(this.id);
  }
}
