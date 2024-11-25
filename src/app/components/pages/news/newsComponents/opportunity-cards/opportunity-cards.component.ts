import { Component, OnInit } from '@angular/core';
import { OpportunitiesService } from 'src/app/services/opportunities.service';

@Component({
  selector: 'app-opportunity-cards',
  templateUrl: './opportunity-cards.component.html',
  styleUrls: ['./opportunity-cards.component.css']
})
export class OpportunityCardsComponent implements OnInit {
  opportunities: any[] = [];



  constructor (private opportunitiesService: OpportunitiesService){};

  ngOnInit(): void{
    this.loadOpportunities();
  }

  loadOpportunities(): void {
    this.opportunitiesService.getOpportunities().subscribe({
      next: (response: any) => {
        console.log('Oportunidades:', response);
        this.opportunities = response;
      },
      error: (error: { message: string; }) => {
        console.error('Error al cargar las oportunidades:', error);  
      }
    })
  }
}
