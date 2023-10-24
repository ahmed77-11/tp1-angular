import { Categorie } from './categorie.model';

export class Produit {
  idProduit?: number; // peut etre undifiend
  nomProduit?: string;
  prixProduit?: number;
  dateCreation?: Date;
  categorie?: Categorie;
}
