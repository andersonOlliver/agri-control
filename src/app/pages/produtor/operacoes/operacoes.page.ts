import { Component, OnInit } from '@angular/core';
import { ProdutorService } from 'src/app/services/produtor.service';

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.page.html',
  styleUrls: ['./operacoes.page.scss'],
})
export class OperacoesPage implements OnInit {
  prescricoes: any;

  constructor(private produtorService:ProdutorService) { }

  ngOnInit() {
    this.produtorService.obterPrescricao().subscribe(x => {
      console.log(x);
      this.prescricoes = x;
    });
  }

}
