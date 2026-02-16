// É o container de dependências do módulo de autenticação.
// Ele diz ao Nest:
// “Esses são os controllers desse contexto”
// “Esses são os services que pertencem a ele”
// “Essas dependências externas entram aqui”
// 🧠 Como pensar
// “Quais peças fazem parte da autenticação?”
// Exemplo: AuthService // futuramente UsersService, PrismaService


import { Module } from '@nestjs/common'; // Descreve a estrutura do sistema. 
import { AuthService } from './auth.service';

// Contrato do módulo
@Module({
  imports: [], // Quais outros módulos EU preciso para funcionar? // Futuro: PrismaModule e ConfigModule
  controllers: [], // Quais portas HTTP pertencem a este módulo? //Depende do /auth/register
  providers: [AuthService], // Quais serviços internos este módulo oferece?
  exports: [AuthService], // O que outros módulos podem usar de mim?
})
export class AuthModule {}
// Isso não é uma classe “normal”.
// não tem métodos
// não tem propriedades
// não faz nada sozinha
// Existe só para:
// ser um identificador de módulo para o Nest
// O comportamento está todo no decorator @Module.