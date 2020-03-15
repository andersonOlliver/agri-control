import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarefaExecutandoPage } from './tarefa-executando.page';

describe('TarefaExecutandoPage', () => {
  let component: TarefaExecutandoPage;
  let fixture: ComponentFixture<TarefaExecutandoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaExecutandoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarefaExecutandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
