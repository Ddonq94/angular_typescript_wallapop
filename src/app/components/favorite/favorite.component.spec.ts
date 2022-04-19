import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComponent } from './favorite.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { ItemsService } from '../../services/items.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

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
      favorites: [],
    };

    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatButtonModule,
      ],
      declarations: [FavoriteComponent],
      providers: [{ provide: ItemsService, useValue: itemServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create`, () => {
    expect(component).toBeTruthy();
  });

  it(`should not have item`, () => {
    expect(component.item).toBeUndefined();
  });

  it('should render given item button', () => {
    component.item = item;

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });

  it('should call `toggleFavorites` once per click', () => {
    component.item = item;

    fixture.detectChanges();

    const toggleFavoritesSpy = jest.spyOn(component, 'toggleFavorites');
    fixture.debugElement.nativeElement.querySelector('button').click();

    expect(toggleFavoritesSpy).toHaveBeenCalledWith(component.item);
    expect(toggleFavoritesSpy).toHaveBeenCalledTimes(1);
  });
});
