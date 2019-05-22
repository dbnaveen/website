import {
  Component,
  OnInit,
  ViewEncapsulation,
  Inject,
  ElementRef,
  ViewChild
} from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogComponent } from "../shared/dialog/dialog.component";

@Component({
  selector: "app-my-works",
  templateUrl: "./my-works.component.html",
  styleUrls: ["./my-works.component.scss"],
  encapsulation: ViewEncapsulation.Emulated
})
export class MyWorksComponent implements OnInit {
  animal: string;
  name: string;
  closeModal = true;
  @ViewChild("fig") fig: ElementRef;

  constructor(public dialog: MatDialog) {}

  openDialog(title, desc, pictures) {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: "80%",
      width: "80%",
      data: {
        title: title,
        overviewDesc: desc,
        screenshots: pictures
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.removeHoverEffectOnFig();
    });
  }

  removeHoverEffectOnFig() {
    var figDivList = document.querySelectorAll(".effect-goliath");
    for (var i = 0; i < figDivList.length; i++) {
      figDivList[i].classList.remove("effect-goliath");
      (function(x) {
        setTimeout(function() {
          figDivList[x].classList.add("effect-goliath");
        }, 0);
      })(i);
    }
  }

  onClickMoreDetails(widgetName) {
    var desc = "";
    var title = "";
    var screenshots = [];
    if (widgetName === "amp") {
      title = "AMP";
      desc =
        "KOGENTIX Automated Machine Learning Platform (AMP) powers the design, experimentation, development and deployment " +
        "enterprise-scale AI applications. <br/><br/>" +
        "Using <b>AMP</b> you can:" +
        "<ol>" +
        "<li>Pull data from wide range of data-sources.</li>" +
        "<li>Register it as a datasets.</li>" +
        "<li>Perform data discovery to understand various relationships and variations.</li>" +
        "<li>Wrangle your data using various transformations to enrich/evolve.</li>" +
        "<li>Create data models out of evolved/source dataset from a wide range of algorithms families.</li>" +
        "<li>Enter a tweaked sample dataset to analyze various scenarios using the in-built Scenario Analyzer.</li>" +
        "<li>Deploy such enterprise-ready models or Rule Sets to meet various enterprise scenarios.</li>" +
        "</ol>" +
        "<b>AMP Modules:</b>" +
        "<ul>" +
        "<li>Administration</li>" +
        "<li>Dataset</li> <li>Discover</li> <li>Feature</li> <li>Model</li>" +
        "<li>Rule Engine</li>" +
        "<li>Deploy</li>" +
        "<li>Content Manager</li>" +
        "<li>Registration</li>" +
        "</ul>" +
        "<b>Technologies Used:</b>" +
        '<ul class="list-circle">' +
        "<li>Angular 1.6</li>" +
        "<li>Angular Material</li>" +
        "<li>SCSS</li>";
      "</ul>";
      screenshots = [
        "AMP/rule1.png",
        "AMP/rule2.png",
        "AMP/new-rule-create.png",
        "AMP/new-rule-options.png",
        "AMP/preview-overview.png",
        "AMP/preview-content.png",
        "AMP/rule2.png",
        "AMP/summary.png"
      ];
      this.openDialog(title, desc, screenshots);
    }
    if (widgetName === "iot") {
      title = "Asset Insights";
      desc =
        "An Asset Monitoring application which tracks asset movement" +
        "Basically the sensor collects data from different parts of the asset like Engine, Battery etc and" +
        "we show the pictorial representation of the data for different reading." +
        "This helps the customer/user to take right decisions and easy to understand the behaviour of the asset and" +
        "monitor it." +
        "<br><br>" +
        "Using <b>Asset-Insights</b> you can:" +
        "<ol>" +
        "<li>Register an asset or group of assets.</li>" +
        "<li>Create widgets for each page.</li>" +
        "<li>Register an User/Customer.</li>" +
        "<li>Activate/Deactivate/Delet user.</li>" +
        "<li>Track asset movement by creating fences.</li>" +
        "</ol>" +
        "<b>Modules:</b>" +
        "<ul>" +
        "<li>Asset Insights</li>" +
        "<li>Administration</li>" +
        "</ul>" +
        "<b>Technologies Used:</b>" +
        '<ul class="list-circle">' +
        "<li>Angular 5</li>" +
        "<li>Bootstrap 4</li>" +
        "<li>Angular Material</li>" +
        "<li>SCSS</li>" +
        "</ul>";
      screenshots = [
        "IOT/login.png",
        "IOT/dashboard.png",
        "IOT/asset-list.png",
        "IOT/asset-list-map.png",
        "IOT/asset-details.png",
        "IOT/sensor-data.png",
        "IOT/utilization-30.png",
        "IOT/health-summary-30.png",
        "IOT/loc-track-last_known.png",
        "IOT/loc-track-range.png",
        "IOT/select-module.png",
        "IOT/models-list.png",
        "IOT/modal.png",
        "IOT/geo-fence.png",
        "IOT/asset-register.png",
        "IOT/asset-register-manual.png",
        "IOT/asset-register-upload.png"
      ];
      this.openDialog(title, desc, screenshots);
    }
    if (widgetName === "solarOperations") {
      title = "Solar Operations Watch";
      desc =
        '"Solar Operations Watch" an application built for the clien-Leading Lighting and Energy solutions provider.' +
        "<br><br>" +
        'Developed an analytical product for the "Internet of Things" infrastructure which aids the end user ensure that' +
        "the system will not run out of energy";
      screenshots = [
        "solar/overview.png",
        "solar/generation.png",
        "solar/consumption.png",
        "solar/storage1.png",
        "solar/storage2.png"
      ];
      this.openDialog(title, desc, screenshots);
    }
  }

  closeWorkModal(e) {
    console.log(e);
  }

  ngOnInit() {}
}
