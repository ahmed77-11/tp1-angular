import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/ProduitService';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [],
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}
  ngOnInit(): void {
    this.currentProduit = this.produitService.consulterProduit(
      this.activatedRoute.snapshot.params['id']
    );

    console.log(this.currentProduit);
  }
  updateProduit() {
    this.produitService.updateProduit(this.currentProduit);
    console.log(this.currentProduit);
    this.router.navigate(['produits']);
  }
}
