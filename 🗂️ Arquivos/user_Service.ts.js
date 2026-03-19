import { User } from "../models/User.js";
import { v4 as uuidv4 } from "uuid";

const users: User[] = [];

export const userService = {
  create(name: string, email: string): User {
    const user = { id: uuidv4(), name, email };
    users.push(user);
    return user;
  },

  findAll(): User[] {
    return users;
  },

  findById(id: string): User | undefined {
    return users.find(u => u.id === id);
  },

  update(id: string, name: string, email: string): User | null {
    const user = this.findById(id);
    if (!user) return null;

    user.name = name;
    user.email = email;
    return user;
  },

  delete(id: string): boolean {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
  }
};
