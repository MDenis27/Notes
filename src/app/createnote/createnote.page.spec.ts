import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatenotePage } from './createnote.page';

describe('CreatenotePage', () => {
  let component: CreatenotePage;
  let fixture: ComponentFixture<CreatenotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatenotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
