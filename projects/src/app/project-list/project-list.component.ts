import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects = () => {
    this.projectsService.getProjects().subscribe(res => {
      this.projects = res;
    });
  }
}
