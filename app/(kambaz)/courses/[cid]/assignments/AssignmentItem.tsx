import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  isFaculty,
  onDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  isFaculty: boolean;
  onDelete: () => void;
}) {
  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div>
        {isFaculty ? (
          <Link
            href={`/courses/${cid}/assignments/${aid}`}
            className="wd-assignment-link font-semibold text-neutral-900 no-underline"
          >
            {title}
          </Link>
        ) : (
          <span className="wd-assignment-link font-semibold text-neutral-900">
            {title}
          </span>
        )}
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      {isFaculty && (
        <button
          type="button"
          aria-label="Delete assignment"
          className="ml-auto self-center text-red-600"
          onClick={() => {
            if (window.confirm("Delete this assignment?")) onDelete();
          }}
        >
          <FaTrash />
        </button>
      )}
    </li>
  );
}
