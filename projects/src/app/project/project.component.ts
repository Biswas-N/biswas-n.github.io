import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

  hasSeeMore() {
    if (this.data.hasSeeMore == "TRUE") {
      return true
    } else {
      return false
    }
  }

  getTechUsed() {
    let tech = this.data.techused.split("|");

    let colors = ["link", "danger", "warning", "success", "info", "primary"];
    let techColor : {[id: string] : string} = {};

    for (let i = 0; i < tech.length; i++) {
      techColor[colors[i]] = tech[i];
    }
    return techColor;
  }

  hasClient() {
    if (this.data.hasClient == "TRUE") {
      return true
    } else {
      return false
    }
  }
}
