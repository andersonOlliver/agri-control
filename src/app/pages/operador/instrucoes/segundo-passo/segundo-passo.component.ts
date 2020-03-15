import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-segundo-passo',
  templateUrl: './segundo-passo.component.html',
  styleUrls: ['./segundo-passo.component.scss'],
})
export class SegundoPassoComponent implements OnInit {
  @Output() proximo = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {}

}
