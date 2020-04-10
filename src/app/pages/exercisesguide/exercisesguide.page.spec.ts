import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExercisesguidePage } from './exercisesguide.page';

describe('ExercisesguidePage', () => {
  let component: ExercisesguidePage;
  let fixture: ComponentFixture<ExercisesguidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesguidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExercisesguidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
