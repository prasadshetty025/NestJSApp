import {
  IsAlphanumeric,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  title;

  @IsNotEmpty()
  @IsString()
  description;

  @IsNotEmpty()
  @IsNumber()
  price;
}
