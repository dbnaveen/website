import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input
} from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() ModalOpenClose: any;
  @Output() closeEvent = new EventEmitter<any>();

  constructor() {}

  closeModal() {
    this.closeEvent.emit("close");
  }

  ngOnChanges() {
    console.log("Modal", this.ModalOpenClose);
  }

  ngOnInit() {
    // console.log("Modal", this.ModalOpenClose);
  }
}
