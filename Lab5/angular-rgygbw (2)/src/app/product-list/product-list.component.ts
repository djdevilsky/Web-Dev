import { Component } from "@angular/core";

import { products } from "../products";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  prod = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routepath = this.route.snapshot.paramMap;
    const categId = Number(routepath.get("catId"));
    this.prod = products.filter(product => product.catId === categId);
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
