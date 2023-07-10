import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { join } from "path";

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: "postgres",
      host: this.configService.get<string>("POSTGRES_HOST"),
      port: this.configService.get<number>("POSTGRES_PORT"),
      username: this.configService.get<string>("POSTGRES_USER"),
      database: this.configService.get<string>("POSTGRES_DB"),
      password: this.configService.get<string>("POSTGRES_PASSWORD"),
      entities: [join(__dirname, "**/**.entity{.ts,.js}")],
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    };
  }
}
