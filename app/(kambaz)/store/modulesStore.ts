"use client";

import { create } from "zustand";
import modulesJson from "../database/modules.json";

export type ModuleItem = (typeof modulesJson)[number] & { editing?: boolean };

type ModulesStore = {
  modules: ModuleItem[];
  addModule: (module: { name: string; course: string }) => void;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
  updateModule: (module: ModuleItem) => void;
};

export const useModulesStore = create<ModulesStore>((set) => ({
  modules: modulesJson,
  addModule: (module) =>
    set((state) => ({
      modules: [
        ...state.modules,
        {
          ...module,
          _id: crypto.randomUUID(),
          description: "",
          lessons: [],
        },
      ],
    })),
  deleteModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.filter((m) => m._id !== moduleId),
    })),
  editModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m,
      ),
    })),
  updateModule: (module) =>
    set((state) => ({
      modules: state.modules.map((m) => (m._id === module._id ? module : m)),
    })),
}));
