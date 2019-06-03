import { Component, OnInit, Input } from "@angular/core";

declare var require: any;
const workListJson = require("../../../assets/json/work-desc.json");

@Component({
  selector: "app-work-desc",
  templateUrl: "./work-desc.component.html",
  styleUrls: ["./work-desc.component.scss"]
})
export class WorkDescComponent implements OnInit {
  @Input() data: any;
  workDetails: any;
  loaded: boolean = false;

  constructor() {}

  getWorkDetails(data, obj) {
    if (data !== undefined && data !== "close") {
      this.workDetails = obj[data["key"]];
      this.loaded = true;
    }
  }

  ngOnChanges() {
    this.getWorkDetails(this.data, workListJson);
  }

  ngOnInit() {}
}
