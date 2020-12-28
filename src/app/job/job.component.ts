import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Job } from '../job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input() job? : Job;
  @Output() label = new EventEmitter<string>();
  labels : string[] = [];

  constructor() { }

  ngOnInit(): void {
    if(this.job)
    {
      this.labels = [this.job.role, this.job.level].concat(this.job.languages, this.job.tools)
    }
  }

  filter(label: string){
    this.label.emit(label);
  }
}
