import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsEnum(['yes', 'no'])
  drivingLicense: 'yes' | 'no';

  @IsNotEmpty()
  @IsEnum(['public', 'private']) 
  userType: 'public' | 'private';
}
