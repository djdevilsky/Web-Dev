import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { products } from "../products";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  constructor() {}

  ngOnInit() {}
  share() {
    window.open(`https://web.telegram.org/#/im?p=@Omargazievd`, "_blank");
  }
}
