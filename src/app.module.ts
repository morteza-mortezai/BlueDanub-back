import { Module } from "@nestjs/common";
import { TypeormModule } from "./config/typeorm/typeorm.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [TypeormModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
