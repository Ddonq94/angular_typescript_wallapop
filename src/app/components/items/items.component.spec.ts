import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { dummyData } from '../../../utils';
import { ItemsService } from '../../services/items.service';
import { FavoriteComponent } from '../favorite/favorite.component';
import { SearchComponent } from '../search/search.component';
import { ItemsComponent } from './items.component';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsComponent, SearchComponent, FavoriteComponent],
      imports: [
        HttpClientModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        MatButtonModule,
        MatSortModule,
        MatPaginatorModule,
        BrowserModule,
        CommonModule,
      ],
      providers: [ItemsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call search with some string and use to filter', () => {
    const searchString = 'some string';

    const searchSpy = jest.spyOn(component, 'search');

    component.search(searchString);

    expect(searchSpy).toHaveBeenCalled();
    expect(component.dataSource.filter).toEqual(searchString);
  });

  it('sets up table features pagination,sorting', () => {
    const initSpy = jest.spyOn(component, 'ngAfterViewInit');
    const getDataSpy = jest.spyOn(component, 'getData');

    component.ngAfterViewInit();

    expect(initSpy).toHaveBeenCalled();
    expect(getDataSpy).toHaveBeenCalled();

    fixture.detectChanges();

    expect(component.dataSource.sort).toBeInstanceOf(MatSort);
    expect(component.dataSource.paginator).toBeInstanceOf(MatPaginator);
  });

  it('should render button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });

  it('should call `openDialog` on button click', () => {
    const openDialogSpy = jest.spyOn(component, 'openDialog');
    fixture.debugElement.nativeElement.querySelector('button').click();

    expect(openDialogSpy).toHaveBeenCalledTimes(1);
  });

  it('should test the table renders headers and 5 rows initially', () => {
    const dummyFirstRow = dummyData.items[0];
    component.dataSource.data = dummyData.items;

    fixture.detectChanges();

    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toEqual(6);

    let headerRow = tableRows[0];
    expect(headerRow.cells[0].textContent).toBe('Title');
    expect(headerRow.cells[1].textContent).toBe('Description');
    expect(headerRow.cells[2].textContent).toBe('Price');
    expect(headerRow.cells[3].textContent).toBe('Email');
    expect(headerRow.cells[4].textContent).toBe('Image');
    expect(headerRow.cells[5].textContent).toBe('Add to Favorites');
  });
});
