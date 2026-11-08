"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";
export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  due: string;
  available: string;
  until: string;
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Omit<Assignment, "_id">) => void;
  deleteAssignment: (_id: string) => void;
  updateAssignment: (assignment: Assignment) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson as Assignment[],
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...assignment, _id: crypto.randomUUID() },
      ],
    })),
  deleteAssignment: (_id) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== _id),
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
}));
