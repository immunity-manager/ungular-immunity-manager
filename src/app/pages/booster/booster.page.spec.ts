import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoosterPage } from './booster.page';

describe('BoosterPage', () => {
  let component: BoosterPage;
  let fixture: ComponentFixture<BoosterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoosterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoosterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
