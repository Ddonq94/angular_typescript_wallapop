import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { findComponent } from '../utils';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { SearchComponent } from './components/search/search.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ItemsComponent, SearchComponent],
      imports: [
        MatDialogModule,
        HttpClientModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have 'Items Manager with favorites' as title`, () => {
    expect(app.title).toEqual('Items Manager with favorites');
  });

  it('should render title and items component ', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to your Items Manager with favorites'
    );
    expect(findComponent(fixture, 'app-items')).toBeTruthy();
  });
});
