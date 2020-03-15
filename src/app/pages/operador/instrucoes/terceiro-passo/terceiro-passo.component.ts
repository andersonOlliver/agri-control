import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-terceiro-passo',
  templateUrl: './terceiro-passo.component.html',
  styleUrls: ['./terceiro-passo.component.scss'],
})
export class TerceiroPassoComponent implements OnInit {
  @Output() proximo = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {}

}
