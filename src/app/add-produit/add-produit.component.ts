import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/ProduitService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent {
  newProduit = new Produit();

  message: string;
  constructor(private produitService: ProduitService, private router: Router) {
    // this.newProduit = {};
    this.message = '';
  }

  addProduit() {
    this.produitService.ajouterProduit(this.newProduit);
    this.message =
      'Produit ' + this.newProduit.nomProduit + ' ajouter avec success';
    this.router.navigate(['produits']);
  }
}
