import { IsEmail, isNotEmpty, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {


    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    nome: string

    @IsString()
    @IsNotEmpty()
    password: string

}
