import { Component, OnInit, ViewEncapsulation, Output } from "@angular/core";
import { Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-work-kpi",
  templateUrl: "./work-kpi.component.html",
  styleUrls: ["./work-kpi.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class WorkKpiComponent implements OnInit {
  @Input() data: any;
  @Output() closeEvent = new EventEmitter<any>();

  constructor() {}

  openWorkModal() {
    console.log("click work");
    this.closeEvent.emit("close");
  }

  ngOnInit() {
    console.log(this.data);
  }
}
