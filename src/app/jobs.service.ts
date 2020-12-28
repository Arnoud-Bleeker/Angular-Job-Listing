import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Job} from './job';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  
  constructor(private http: HttpClient) { }


  getJobs() {
    return this.http.get<Job[]>('../assets/data.json');
  }
}
