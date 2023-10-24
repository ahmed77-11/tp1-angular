import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/ProduitService';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();

  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;
  message: string;
  constructor(private produitService: ProduitService, private router: Router) {
    // this.newProduit = {};
    this.message = '';
  }
  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
  }
  addProduit() {
    // console.log(this.newIdCat);
    this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);
    console.log(this.newCategorie);
    this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.message =
      'Produit ' + this.newProduit.nomProduit + ' ajouter avec success';
    this.router.navigate(['produits']);
  }
}
