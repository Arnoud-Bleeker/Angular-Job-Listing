import { Component, OnInit } from '@angular/core';
import {Job} from '../job';
import {JobsService} from '../jobs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Jobs : Job[] = [];
  Filters : string[] = []

  constructor(private jobService : JobsService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(res => {
      this.Jobs = res;
    });
  }

  getFilteredJobs(): void {
    this.Jobs = []
    this.jobService.getJobs().subscribe(jobs => { jobs.forEach( job => {
      var labels : string[] = [job.role, job.level].concat(job.languages, job.tools);
      if (this.CommonElements(this.Filters, labels))
      {
        this.Jobs.push(job);
      }
    })});
  }

  CommonElements(arr1 : string[], arr2 : string[]) { 
    return arr1.every(item => arr2.includes(item)) 
  }
  
  addLabel(label : any){
    this.Filters.push(label);
    this.getFilteredJobs();
  }

  updateFilter(filter: string){
    if(filter == "all")
    {
      this.Filters = []
      this.jobService.getJobs().subscribe(res => {
        this.Jobs = res;
      });
    }
    else
    {
      this.Filters = this.Filters.filter( val => val != filter);
      this.getFilteredJobs()
    }
  }

}
