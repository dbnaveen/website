import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-work-desc",
  templateUrl: "./work-desc.component.html",
  styleUrls: ["./work-desc.component.scss"]
})
export class WorkDescComponent implements OnInit {
  workDetails: any;

  constructor() {}

  getWorkDetails() {
    let obj = {
      introduction:
        "Identify non-working money to reinvest and your growth strategy. It's a" +
        "way to identify cost savings and reinvest that money for growth," +
        "profitability, sustainability and trust.,",
      technologies: [
        "ReactJS",
        "Bootstrap 4",
        "SCSS",
        "Highcharts",
        "Angular Material"
      ],
      timePeriod: "April, 2019 - Present"
    };
    this.workDetails = obj;
  }

  ngOnChanges() {
    this.getWorkDetails();
  }

  ngOnInit() {
    this.getWorkDetails();
  }
}
