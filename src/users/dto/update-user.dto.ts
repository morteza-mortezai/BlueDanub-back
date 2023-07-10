import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UpdateUserDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(3)
  readonly firstName: string;

  @IsNotEmpty()
  @MinLength(3)
  readonly lastName: string;
}
