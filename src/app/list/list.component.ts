import { Component, OnInit, Input } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  constructor() {}
  @Input() contacts;
  ngOnInit() {}
}
