import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses</h2>
      <hr />
      <div id="wd-dashboard-courses" className="flex flex-wrap gap-[35px]">
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="/images/reactjs.jpg"
        />
        <CourseCard
          id="2341"
          title="CS2341 React MS"
          subtitle="Half Stack hardware developer"
          image="/images/reactjs.jpg"
        />
        <CourseCard
          id="4321"
          title="CS4321 React JK"
          subtitle="None Stack warehouse developer"
          image="/images/reactjs.jpg"
        />
        <CourseCard
          id="9999"
          title="THTR9999 intro to theatre"
          subtitle="beginner course"
          image="/images/help.JPG"
        />
        <CourseCard
          id="CS9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample — not my course"
          image="/images/reactjs.jpg"
        />
      </div>
    </div>
  );
}
