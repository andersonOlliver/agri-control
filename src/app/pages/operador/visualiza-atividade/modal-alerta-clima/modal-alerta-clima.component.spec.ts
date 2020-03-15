import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAlertaClimaComponent } from './modal-alerta-clima.component';

describe('ModalAlertaClimaComponent', () => {
  let component: ModalAlertaClimaComponent;
  let fixture: ComponentFixture<ModalAlertaClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAlertaClimaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAlertaClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
