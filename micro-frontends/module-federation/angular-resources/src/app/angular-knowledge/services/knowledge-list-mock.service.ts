import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { KnowledgeList } from '../interfaces/knowledge-list';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeListService {
  constructor() { }

  getKnowledgeList(): Observable<KnowledgeList> {

    // Get list from data json to replicate call to a server
    return of(data).pipe(delay(1000));
  }
}
