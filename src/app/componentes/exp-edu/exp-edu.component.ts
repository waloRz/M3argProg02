import { Component, Input, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { WorkListService } from 'src/app/services/work-list.service';


@Component({
  selector: 'app-exp-edu',
  templateUrl: './exp-edu.component.html',
  styleUrls: ['./exp-edu.component.css'],
})

export class ExpEduComponent implements OnInit {
  @Input() title: string = 'Trabajo';

  workList: persona[] = [];

  constructor(private workListService: WorkListService){}
  
  ngOnInit(): void {
   this.getWorkList();
  }

  getWorkList(): void {
   this.workListService.getWorks().subscribe(workList => this.workList = workList);
  }
}
