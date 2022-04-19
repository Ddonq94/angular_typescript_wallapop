import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IItem, IItemData } from '../../../models';
import { ELEMENT_DATA } from '../../../utils';
import { ItemsService } from '../../services/items.service';
import { MatDialog } from '@angular/material/dialog';
import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements AfterViewInit {
  constructor(private itemService: ItemsService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FavoritesComponent, {
      width: '80vw',
    });
  }

  displayedColumns: string[] = [
    'title',
    'description',
    'price',
    'email',
    'image',
    'actions',
  ];
  dataSource = new MatTableDataSource<IItem>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getData() {
    this.itemService.getData().subscribe((data: IItemData) => {
      this.dataSource.data = data.items;
    });
  }

  search(val: string) {
    this.dataSource.filter = val;
  }

  ngAfterViewInit() {
    this.getData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
