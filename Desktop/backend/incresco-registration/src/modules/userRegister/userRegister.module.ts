import { Module } from '@nestjs/common';
import { UserRegisterController } from './userRegister.controller';
import { UserRegisterService } from './userRegister.service';

@Module({
  imports: [],
  controllers: [UserRegisterController],
  providers: [UserRegisterService],
})
export class UserRegisterModule {}
