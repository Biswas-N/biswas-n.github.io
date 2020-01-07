import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects:Array<Object>;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects = () => {
    let projs = [];
    this.projectsService.getProjects().subscribe(res => {
      res.forEach(function (proj) {
        // console.log(proj.payload.doc.data())
        projs.push(proj.payload.doc.data())
      })
    });
    this.projects = projs
  }
}
