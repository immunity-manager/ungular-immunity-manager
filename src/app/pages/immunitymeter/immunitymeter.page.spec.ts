import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImmunitymeterPage } from './immunitymeter.page';

describe('ImmunitymeterPage', () => {
  let component: ImmunitymeterPage;
  let fixture: ComponentFixture<ImmunitymeterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmunitymeterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImmunitymeterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
