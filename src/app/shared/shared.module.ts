import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InfoTalhaoComponent } from './info-talhao/info-talhao.component';


@NgModule({
  declarations: [InfoTalhaoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InfoTalhaoComponent
  ]
})
export class SharedModule {
}
