import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<any>();

  constructor() {}

  closeModal() {
    this.closeEvent.emit("close");
  }

  ngOnInit() {}
}
