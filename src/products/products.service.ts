import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(_prod: ProductDto) {
    const prodId = Math.random().toString();
    const newProduct = new Product(
      prodId,
      _prod.title,
      _prod.description,
      _prod.price,
    );
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.findProduct(productId)[0];
    return { ...product };
  }

  updateProduct(productId: string, prod: ProductDto) {
    const [product, index] = this.findProduct(productId);
    const updatedProduct = { ...product };
    if (prod.title) {
      updatedProduct.title = prod.title;
    }
    if (prod.description) {
      updatedProduct.description = prod.description;
    }
    if (prod.price) {
      updatedProduct.price = prod.price;
    }
    this.products[index] = updatedProduct;
  }

  deleteProduct(prodId: string) {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return [product, productIndex];
  }
}
