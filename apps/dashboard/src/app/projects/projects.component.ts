import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
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
    // this.projectService.all()
    //   .pipe({
    //     filter((result: any) => result.approved)
    //   })
    //   .subscribe((result: any) => this.projects = result);

    this.projects$ = this.projectService.all()
  }

  cancel() {
    this.selectProject(null);
  }

}
