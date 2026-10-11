"use client";
import "@/app/labs/lab2/tailwind/utilities.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const home = `/courses/${cid}/home`;
  const assignments = `/courses/${cid}/assignments`;
  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group rounded-none text-lg"
    >
      <Link
        href={home}
        id="wd-course-home-link"
        className={
          pathname === home
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Home
      </Link>
      <Link
        href={assignments}
        id="wd-course-assignments-link"
        className={
          pathname === assignments || pathname.startsWith(assignments + "/")
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Assignments
      </Link>
      <Link
        href={home}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
      <ul className="list-group-item">
        <li>
          <Link className="Modules" href="/courses/${cid}/modules">
            Modules
          </Link>
        </li>
        <li>
          <Link className="Piazza" href="/courses/${cid}/Piazza">
            Piazza
          </Link>
        </li>
        <li>
          <Link className="Zoom" href="/courses/${cid}/Zoom">
            Zoom
          </Link>
        </li>
        <li>
          <Link className="Quizzes" href="/courses/${cid}/Quizzes">
            Quizzes
          </Link>
        </li>
        <li>
          <Link className="Grades" href="/courses/${cid}/Grades">
            Grades
          </Link>
        </li>
        <li>
          <Link className="People" href="/courses/${cid}/People">
            People
          </Link>
        </li>
      </ul>
    </div>
  );
}
