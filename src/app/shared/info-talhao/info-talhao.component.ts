import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-talhao',
  templateUrl: './info-talhao.component.html',
  styleUrls: ['./info-talhao.component.scss'],
})
export class InfoTalhaoComponent implements OnInit {

  @Input() titulo: string;

  constructor() {
  }

  ngOnInit() {
  }

}
