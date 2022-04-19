import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call `onKeyUp` and update subject with search string ', () => {
    const searchString = 'some string';
    const onKeyUpSpy = jest.spyOn(component, 'onKeyUp');
    const applyFilterSpy = jest.spyOn(component, 'applyFilter');

    component.onKeyUp(searchString);

    expect(onKeyUpSpy).toHaveBeenCalled();

    fixture.detectChanges();

    component.subject.pipe(debounceTime(500)).subscribe((searchTextValue) => {
      expect(searchTextValue).toBe(searchString);
      expect(applyFilterSpy).toHaveBeenCalled();
    });
  });

  it('should call `applyFilter` and emit search string ', () => {
    const searchString = 'some string';
    const applyFilterSpy = jest.spyOn(component, 'applyFilter');

    component.applyFilter(searchString);

    expect(applyFilterSpy).toHaveBeenCalled();
  });
});
