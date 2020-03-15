import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualizaAtividadePage } from './visualiza-atividade.page';

describe('VisualizaAtividadePage', () => {
  let component: VisualizaAtividadePage;
  let fixture: ComponentFixture<VisualizaAtividadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizaAtividadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizaAtividadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
