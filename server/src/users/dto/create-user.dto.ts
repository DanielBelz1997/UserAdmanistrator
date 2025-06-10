import { IsEmail, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'user@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The first name of the user',
    example: 'Daniel',
  })
  @IsString()
  first_name: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Belz',
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    description: 'The user password',
    example: 'Aa123456',
  })
  @IsString()
  password: string;
}
