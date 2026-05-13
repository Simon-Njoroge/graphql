import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  create(createUserInput: CreateUserInput): User {
    const user: User = {
      id: this.users.length + 1,
      name: createUserInput.name,
      email: createUserInput.email,
    };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserInput: UpdateUserInput): User | undefined {
    const user = this.findOne(id);
    if (user) {
      if (updateUserInput.name) user.name = updateUserInput.name;
      if (updateUserInput.email) user.email = updateUserInput.email;
    }
    return user;
  }

  remove(id: number): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}
