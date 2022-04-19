import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { IItem, IItemData } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  url = 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

  favorites: string[] = [];

  getData(): Observable<IItemData> {
    return this.http.get(this.url).pipe(
      map((items: any) => items),
      catchError((err) => {
        throw new Error(err);
      })
    );
  }
}
