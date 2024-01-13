import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../Produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.getAll();
  }

}
