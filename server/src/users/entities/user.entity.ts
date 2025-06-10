import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({
    description: 'The unique identifier of the user',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The email of the user',
    example: 'user@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'The first name of the user',
    example: 'Daniel',
  })
  first_name: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Belz',
  })
  last_name: string;

  @ApiProperty({
    description: 'The user password',
    example: 'Aa123456',
  })
  password: string;

  @ApiProperty({
    description: 'The date the user was created',
    example: '2023-01-01T00:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The date the user was last updated',
    example: '2023-01-01T00:00:00.000Z',
  })
  updatedAt: Date;
}
