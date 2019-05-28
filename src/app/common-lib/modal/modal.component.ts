import { Component, OnInit, ViewEncapsulation, Output } from "@angular/core";
import { EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() ModalOpenClose: any;
  @Input() workDesc: any;
  @Output() closeEvent = new EventEmitter<any>();

  constructor() {}

  closeModal() {
    this.closeEvent.emit("close");
  }

  ngOnInit() {}
}
