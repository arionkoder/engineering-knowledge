import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KnowledgeList } from 'src/app/angular-knowledge/interfaces/knowledge-list';
import { KnowledgeListService } from 'src/app/angular-knowledge/services/knowledge-list-mock.service';

@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.scss']
})
export class KnowledgeListComponent {
  public knowledgeList$: Observable<KnowledgeList> = this._knowledgeListService.getKnowledgeList();

  constructor(private _knowledgeListService: KnowledgeListService) {}
}
