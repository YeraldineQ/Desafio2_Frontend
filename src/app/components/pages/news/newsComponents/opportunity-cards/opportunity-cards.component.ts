import { Component, Input, OnInit,  } from '@angular/core';
import { OpportunityModel } from 'src/app/interfaces/opportunity.inteface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-opportunity-cards',
  templateUrl: './opportunity-cards.component.html',
  styleUrls: ['./opportunity-cards.component.css']
})
export class OpportunityCardsComponent implements OnInit {
  opportunities!: OpportunityModel[]

  constructor(
    private readonly dataService:DataService
  ) {}

  ngOnInit(): void {
    console.log('Initial opportunities:', this.opportunities);
    this.dataService.getDataObservable().subscribe((newData) => {
      this.opportunities = newData;
      console.log(this.opportunities);
      
    });
  }
}
