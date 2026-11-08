"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccountContext } from "../../../../account/AccountContext";
import { useAssignmentsStore } from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const { currentUser } = useAccountContext();
  const isFaculty = currentUser?.role === "FACULTY";

  const isNew = aid === "new";
  const existing = useAssignmentsStore((s) =>
    s.assignments.find((a) => a._id === aid),
  );
  const addAssignment = useAssignmentsStore((s) => s.addAssignment);
  const updateAssignment = useAssignmentsStore((s) => s.updateAssignment);

  const [form, setForm] = useState({
    title: existing?.title ?? "",
    description: existing?.description ?? "",
    points: existing?.points ?? 100,
    due: existing?.due ?? "",
    available: existing?.available ?? "",
    until: existing?.until ?? "",
  });
  useEffect(() => {
    if (!isFaculty) router.replace(`/courses/${cid}/assignments`);
  }, [isFaculty, cid, router]);

  if (!isFaculty) return null;
  if (!isNew && !existing) return <p>Assignment not found.</p>;
  const onSave = () => {
    if (isNew) {
      addAssignment({ ...form, course: cid });
    } else if (existing) {
      updateAssignment({ ...existing, ...form });
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />{" "}
      <br />
      <textarea
        id="wd-description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        rows={8}
        className="w-full"
      />{" "}
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                value={form.points}
                onChange={(e) =>
                  setForm({ ...form, points: Number(e.target.value) })
                }
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                value={form.due}
                onChange={(e) => setForm({ ...form, due: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                value={form.available}
                onChange={(e) =>
                  setForm({ ...form, available: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-until"
                value={form.until}
                onChange={(e) => setForm({ ...form, until: e.target.value })}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
        Cancel
      </Link>{" "}
      <button type="button" id="wd-save" onClick={onSave}>
        Save
      </button>
    </div>
  );
}
