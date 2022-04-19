import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { IItem } from '../../../models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  @Input() item: IItem | undefined;

  constructor(
    private itemService: ItemsService,
    private _snackBar: MatSnackBar
  ) {}

  toggleFavorites(item: IItem) {
    let index = this.itemService.favorites.indexOf(item.image);

    let config = {
      duration: 2000,
    };

    if (index === -1) {
      this.itemService.favorites.push(item.image);
      this._snackBar.open(`${item.title} added to favorites`, 'close', config);
    } else {
      this.itemService.favorites.splice(index, 1);
      this._snackBar.open(
        `${item.title} removed to favorites`,
        'close',
        config
      );
    }
  }

  inFavorites(item: IItem) {
    return this.itemService.favorites.includes(item.image);
  }

  ngOnInit(): void {}
}
