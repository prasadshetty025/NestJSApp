import { ProductDto } from './dto/product.dto';

export class Product {
  constructor(
    public id: string,
    public title: ProductDto,
    public description: ProductDto,
    public price: ProductDto,
  ) {}
}
