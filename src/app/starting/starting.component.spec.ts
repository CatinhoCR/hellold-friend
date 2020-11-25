import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StartingComponent } from './starting.component';

describe('StartingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        StartingComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StartingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hellold-friend'`, () => {
    const fixture = TestBed.createComponent(StartingComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hellold-friend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(StartingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('hellold-friend app is running!');
  });
});
