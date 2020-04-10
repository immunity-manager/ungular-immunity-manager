import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotritionPage } from './notrition.page';

describe('NotritionPage', () => {
  let component: NotritionPage;
  let fixture: ComponentFixture<NotritionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotritionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotritionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
