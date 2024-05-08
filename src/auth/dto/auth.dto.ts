import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
// Add
export class AuthDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
