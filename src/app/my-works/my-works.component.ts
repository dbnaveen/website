import { Component, OnInit, ViewEncapsulation } from "@angular/core";

declare var require: any;
const workListJson = require("../../assets/json/works-list.json");

@Component({
  selector: "app-my-works",
  templateUrl: "./my-works.component.html",
  styleUrls: ["./my-works.component.scss"],
  encapsulation: ViewEncapsulation.Emulated
})
export class MyWorksComponent implements OnInit {
  closeModal = true;
  worksList: any;

  constructor() {
    this.worksList = workListJson;
    console.log(this.worksList);
  }

  closeWorkModal(e) {
    this.closeModal = !this.closeModal;
  }

  ngOnInit() {}
}
