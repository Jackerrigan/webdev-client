"use client";

import { create } from "zustand";
import type { User } from "../account/AccountContext";
import usersJson from "../database/users.json";

type UsersStore = {
  users: User[];
  addUser: (user: User) => User;
};

export const useUsersStore = create<UsersStore>((set) => ({
  users: usersJson,
  addUser: (user) => {
    const newUser = { ...user, _id: crypto.randomUUID() };
    set((state) => ({ users: [...state.users, newUser] }));
    return newUser;
  },
}));
