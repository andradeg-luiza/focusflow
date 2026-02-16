// Serve como contrato de entrada para um endpoint

import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator'; // Regras de validação

export class RegisterDto { //validação/reflection funciona bem com classes
    // referente a e-mail
    @IsEmail()
    email!: string; //valida apenas o formato // se vier inválido gera 400

    //referente a password
    @IsString() //password precisa ser string
    @IsNotEmpty() //evitar " " (espaços) contando como 8 chars
    @MinLength(8) //8 é mínimo razoável
    @MaxLength(72) //72 é limite clássico quando você usa bcrypt
    // bcrypt considera só os primeiros ~72 bytes da senha.
    // se você aceitar senha maior, a pessoa acha que está criando uma senha super forte,
    // mas bcrypt ignora o resto → risco de segurança/percepção.
    // Então limitar em 72 evita uma “pegadinha”.
    password!: string;
}
