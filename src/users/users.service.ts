import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  // create(createUserDto: CreateUserDto) {
  //   return "This action adds a new user";
  // }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
}
