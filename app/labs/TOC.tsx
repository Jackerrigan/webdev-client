import Link from "next/link";

export default function TOC() {
  return (
    <nav aria-label="Labs table of contents">
      <h3>Table of Contents</h3>
      <ul>
        <li>
          <Link href="/labs" id="wd-home-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
        <li>
          <Link href="/account/signin" id="wd-kambaz">
            Kambaz
          </Link>
        </li>
      </ul>
      <h6>so many weapons, the deadliest is your faith</h6>
    </nav>
  );
}
