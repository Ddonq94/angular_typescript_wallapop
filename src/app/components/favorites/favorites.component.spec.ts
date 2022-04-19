import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ItemsService } from '../../services/items.service';
import { SearchComponent } from '../search/search.component';

import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  let itemServiceMock: any;

  let item = {
    title: 'iPhone 6S Gold',
    description:
      "I am selling a new and unworn Gold iPhone 6 S. They gave me one at work and I don't need the one I bought. In the store you can find it for 749 euros and I sell it for 740. You can find the descriptions find it on the apple website. It's free.",
    price: '740',
    email: 'iphonemail@wallapop.com',
    image:
      'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png',
  };

  beforeEach(async () => {
    itemServiceMock = {
      getData: jest.fn(),
    };
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent, SearchComponent],
      imports: [
        MatDialogModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: ItemsService, useValue: itemServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call `getData` and get Array response assigned to items ', () => {
    const getDataSpy = jest.spyOn(component, 'getData');

    jest.spyOn(itemServiceMock, 'getData').mockReturnValue(of([item]));
    fixture.detectChanges();

    expect(getDataSpy).toHaveBeenCalled();
    expect(Array.isArray(component.items)).toBeTruthy();
  });

  it('should call `search` and get Array response assigned to items ', () => {
    const searchString = 'some string';

    const searchSpy = jest.spyOn(component, 'search');

    component.search(searchString);

    expect(searchSpy).toHaveBeenCalled();
    expect(Array.isArray(component.items)).toBeTruthy();
  });
});
