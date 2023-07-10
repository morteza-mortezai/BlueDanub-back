import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfig } from "./typeorm.config";
import { ConfigModule } from "@nestjs/config";
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [TypeOrmConfig],
})
export class TypeormModule {}
