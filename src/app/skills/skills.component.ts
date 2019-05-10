import { Component, OnInit, ViewEncapsulation } from "@angular/core";

declare let google: any; // to avoid any kind of chartType not present ERROR

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  encapsulation: ViewEncapsulation.None,
  host: {
    "(window:resize)": "onResize($event)"
  }
})
export class SkillsComponent implements OnInit {
  headers = ["id", "childLabel", "parent", "count", { role: "style" }];

  onResize() {
    this.ngOnInit();
  }

  loadDesignSkills(headers, options) {
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var devSkills = new (google.visualization.arrayToDataTable as any)([
        headers,
        [0, "Design Skils", -1, 2, "#c3a165"],
        [1, "Adobe XD CC", 0, 2, "#0070c9"],
        [2, "Photoshop", 0, 2, "#0070c9"]
      ]);
      var wordtree = new google.visualization.WordTree(
        document.getElementById("design_skills")
      );
      wordtree.draw(devSkills, options);
    }
  }

  loadDeveloperSkills(headers, options) {
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var devSkills = new (google.visualization.arrayToDataTable as any)([
        headers,
        [0, "Developer Skils", -1, 2, "#c3a165"],
        [1, "Javascript Framework", 0, 1, "#0070c9"],
        [2, "UI/Web Framework", 0, 1, "#0070c9"],
        [3, "Javascript Transpilers", 0, 1, "#0070c9"],
        [4, "CSS Pre-Processors", 0, 1, "#0070c9"],
        [5, "Data Visualization Tools", 0, 1, "#0070c9"],
        [6, "Javascript Build Tool", 0, 1, "#0070c9"],
        [7, "Version Control", 0, 1, "#0070c9"],
        [8, "Design Tools", 0, 1, "#0070c9"],

        [9, "React", 1, 1, "#3c4b5e"],
        [10, "AnguarJS", 1, 1, "#3c4b5e"],
        [12, "jQuery", 1, 1, "#3c4b5e"],

        [101, "Angular 1.x", 10, 1, "#777777"],
        [102, "Angular 5", 10, 1, "#777777"],
        [103, "Angular 7", 10, 1, "#777777"],

        [13, "Angular-Material", 2, 1, "#2d3c4f"],
        [14, "Bootstrap 4", 2, 1, "#2d3c4f"],
        [15, "Zurb Foundation", 2, 1, "#2d3c4f"],
        [16, "Django", 2, 1, "#2d3c4f"],

        [17, "Typescript", 3, 1, "#2d3c4f"],

        [19, "SCSS", 4, 1, "#2d3c4f"],

        [22, "Highcharts", 5, 1, "#2d3c4f"],
        [23, "D3.JS", 5, 1, "#2d3c4f"],
        [24, "Nvd3", 5, 1, "#2d3c4f"],
        [25, "jQuery Sparklines", 5, 1, "#2d3c4f"],
        [26, "Morris.JS", 5, 1, "#2d3c4f"],

        [27, "Gulp", 6, 1, "#2d3c4f"],

        [29, "Github", 7, 1, "#2d3c4f"],
        [30, "GitBucket", 7, 1, "#2d3c4f"],
        [31, "Adobe XD CC", 8, 1, "#2d3c4f"],
        [32, "Photoshop", 8, 1, "#2d3c4f"]
      ]);

      var wordtree = new google.visualization.WordTree(
        document.getElementById("dev_skills")
      );
      wordtree.draw(devSkills, options);
    }
  }

  ngOnInit() {
    google.charts.load("current", { packages: ["wordtree"] });
    var options = {
      width: window.innerWidth,
      tooltip: { isHtml: true },
      maxFontSize: 14,
      backgroundColor: "transparent",
      wordtree: {
        format: "explicit",
        type: "suffix"
      }
    };
    this.loadDeveloperSkills(this.headers, options);
    this.loadDesignSkills(this.headers, options);
  }
}
