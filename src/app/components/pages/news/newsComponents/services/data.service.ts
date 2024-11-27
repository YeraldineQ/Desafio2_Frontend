// data.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { OpportunityModel } from 'src/app/interfaces/opportunity.inteface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly dataSubject = new Subject<OpportunityModel[]>();

  getDataObservable(): Observable<OpportunityModel[]> {
    return this.dataSubject.asObservable();
  }

  updateData(newData: OpportunityModel[]): void {
    this.dataSubject.next(newData);
  }
}
