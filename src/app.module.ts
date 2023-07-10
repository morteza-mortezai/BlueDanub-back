import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { TypeormModule } from "./config/typeorm/typeorm.module";

@Module({
  imports: [UserModule, TypeormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
