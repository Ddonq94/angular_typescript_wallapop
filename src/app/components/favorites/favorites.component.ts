import { AfterViewInit, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ItemsService } from '../../services/items.service';
import { IItem, IItemData } from '../../../models';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements AfterViewInit {
  constructor(
    public dialogRef: MatDialogRef<FavoritesComponent>,
    private itemService: ItemsService
  ) {}

  items: IItem[] = [];
  filterHandler: IItem[] = [];

  getData() {
    this.itemService.getData().subscribe((data: IItemData) => {
      this.items = this.filterHandler = data.items.filter((item: IItem) =>
        this.itemService.favorites.includes(item.image)
      );
    });
  }

  search(val: string) {
    this.items = this.filterHandler.filter(
      (item: IItem) => item.title.toLowerCase().indexOf(val.toLowerCase()) >= 0
    );
  }

  ngAfterViewInit() {
    this.getData();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
