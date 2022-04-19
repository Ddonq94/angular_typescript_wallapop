import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() title: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter();

  subject: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}

  applyFilter(searchTerm: string) {
    this.search.emit(searchTerm.trim().toLowerCase());
  }

  onKeyUp(searchTextValue: string) {
    this.subject.next(searchTextValue);
  }

  ngOnInit() {
    this.subject.pipe(debounceTime(500)).subscribe((searchTextValue) => {
      this.applyFilter(searchTextValue);
    });
  }
}
