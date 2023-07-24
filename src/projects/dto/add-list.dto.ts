import { IsNumber, IsString } from 'class-validator';

export class AddList {
  @IsNumber()
  categoryId: number;

  @IsString()
  itemName: string;

  @IsString()
  unit: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  cost: number;

  @IsNumber()
  price: number;
}
