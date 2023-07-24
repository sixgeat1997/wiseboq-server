import { IsEmail, IsOptional, IsString, Max } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  email: string;

  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  phoneNumber: string;

  @IsOptional()
  lineId: string;
}
