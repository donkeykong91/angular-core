import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects()
  }

  selectProject(project) {
    this.selectedProject = project;
    console.log('selected project: ', project);
  }

  getProjects() {
    this.projectService.all()
      .subscribe((result: any) => this.projects = result);
  }

  cancel() {
    this.selectProject(null);
  }

}
