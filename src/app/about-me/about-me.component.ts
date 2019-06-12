import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"]
})
export class AboutMeComponent implements OnInit {
  birthdate: any;
  age: any;
  constructor() {}

  ngOnInit() {
    var date = "10/12/1992";
    this.birthdate = new Date(date);
    var timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  }
}
