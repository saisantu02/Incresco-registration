import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRegisterModule } from './modules/userRegister/userRegister.module';
@Module({
  imports: [UserRegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
