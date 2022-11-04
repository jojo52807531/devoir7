import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService,private router :Router) {
   // this.produits = produitService.listeProduits();
  }

  ngOnInit(): void {
    this.produitService.listeProduits().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
  }
  /*supprimerProduit(p: Produit)
{
 let conf = confirm("Etes-vous sûr ?");
if (conf)
 this.produitService.supprimerProduit(p);
 }*/
 supprimerProduit(p: Produit)
{
let conf = confirm("Etes-vous sûr ?");
const a: number=p.idProduit!;
if (conf)
this.produitService.supprimerProduit(a).subscribe(() => {
console.log("produit supprimé");
this.SuprimerProduitDuTableau(p);
});
}
SuprimerProduitDuTableau(prod : Produit) {
  this.produits.forEach((cur, index) => {
  if(prod.idProduit=== cur.idProduit) {
  this.produits.splice(index, 1);
  }
  });
  }
}

