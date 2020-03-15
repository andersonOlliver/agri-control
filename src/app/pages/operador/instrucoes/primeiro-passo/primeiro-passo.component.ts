import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-primeiro-passo',
  templateUrl: './primeiro-passo.component.html',
  styleUrls: ['./primeiro-passo.component.scss'],
})
export class PrimeiroPassoComponent implements OnInit {

  @Output() proximo = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {}

}
