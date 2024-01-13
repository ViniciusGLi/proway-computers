import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public carrinhoSrvice: CarrinhoService
  ) { }

  ngOnInit(): void {
  }

}
