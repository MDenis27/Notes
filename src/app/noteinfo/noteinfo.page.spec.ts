import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteinfoPage } from './noteinfo.page';

describe('NoteinfoPage', () => {
  let component: NoteinfoPage;
  let fixture: ComponentFixture<NoteinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
