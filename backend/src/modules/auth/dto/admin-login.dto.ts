import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AdminLoginDto {
  @ApiProperty({ example: 'admin@desirewardrobe.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Admin@123456' })
  @IsString()
  @MinLength(6)
  password: string;
}
