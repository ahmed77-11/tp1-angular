import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/ProduitService';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {
  produits?: Produit[];
  constructor(private produitService: ProduitService) {
    this.produits = [];
  }
  ngOnInit(): void {
    this.produits = this.produitService.listeProduit();
  }

  supprimerProduit(prod: Produit) {
    // console.log(prod);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.produitService.supprimerProduit(prod);
    }
  }
}
