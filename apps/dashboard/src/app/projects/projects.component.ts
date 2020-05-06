import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Project;

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
    this.resetProject();
  }

  selectProject(project) {
    this.selectedProject = project;
    console.log('selected project: ', project);
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '', 
      details: '',
      percentComplete: 0,
      approved: false
    }
    this.selectProject(emptyProject);
  }

  getProjects() {
    // this.projectService.all()
    //   .pipe({
    //     filter((result: any) => result.approved)
    //   })
    //   .subscribe((result: any) => this.projects = result);

    this.projects$ = this.projectService.all()
  }

  saveProject(project) {
    console.log('SAVING PROJECT', project);
  }

  deleteProject(project) {
    this.projectService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }

}
