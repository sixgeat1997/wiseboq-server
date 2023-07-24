import { IsNumber, IsString } from 'class-validator';

export class AddCategory {
  @IsNumber()
  projectId: string;

  @IsString()
  name: string;
}
