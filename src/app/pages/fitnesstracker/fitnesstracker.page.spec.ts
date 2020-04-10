import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FitnesstrackerPage } from './fitnesstracker.page';

describe('FitnesstrackerPage', () => {
  let component: FitnesstrackerPage;
  let fixture: ComponentFixture<FitnesstrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnesstrackerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FitnesstrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
