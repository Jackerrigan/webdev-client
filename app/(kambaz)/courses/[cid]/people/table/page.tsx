"use client";

import { emptyUser, type User } from "@/app/(kambaz)/account/AccountContext";
import { useEnrollmentsStore } from "@/app/(kambaz)/store/enrollmentsStore";
import { useUsersStore } from "@/app/(kambaz)/store/usersStore";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const users = useUsersStore((s) => s.users);
  const addUser = useUsersStore((s) => s.addUser);
  const [draft, setDraft] = useState<User>(emptyUser);
  const { cid } = useParams<{ cid: string }>();
  const enrollments = useEnrollmentsStore((s) => s.enrollments);
  const enroll = useEnrollmentsStore((s) => s.enroll);
  const enrolled = users.filter((usr) =>
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === cid,
    ),
  );
  const onAdd = () => {
    if (!draft.firstName.trim() || !draft.lastName.trim()) return;
    const created = addUser(draft);
    enroll(created._id, cid);
    setDraft(emptyUser);
  };

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          id="wd-user-first-name"
          className="rounded border px-3 py-1.5 text-sm"
          placeholder="First name"
          value={draft.firstName}
          onChange={(e) => setDraft({ ...draft, firstName: e.target.value })}
        />
        <input
          id="wd-user-last-name"
          className="rounded border px-3 py-1.5 text-sm"
          placeholder="Last name"
          value={draft.lastName}
          onChange={(e) => setDraft({ ...draft, lastName: e.target.value })}
        />
        <input
          id="wd-user-login-id"
          className="rounded border px-3 py-1.5 text-sm"
          placeholder="Login ID"
          value={draft.loginId}
          onChange={(e) => setDraft({ ...draft, loginId: e.target.value })}
        />
        <select
          id="wd-user-role"
          className="rounded border px-3 py-1.5 text-sm"
          value={draft.role}
          onChange={(e) => setDraft({ ...draft, role: e.target.value })}
        >
          <option>STUDENT</option>
          <option>TA</option>
          <option>FACULTY</option>
        </select>
        <button
          type="button"
          id="wd-add-user"
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          onClick={onAdd}
        >
          Add person
        </button>
      </div>

      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
