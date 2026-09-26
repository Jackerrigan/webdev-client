import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <div>
        <input id="wd-search-assignment" placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group" type="button">
          + Group
        </button>
        <button id="wd-add-assignment" type="button">
          + Assignment
        </button>
      </div>

      <h3 id="wd-assignments-title">
        Assignments 40% of Total
        <button type="button" aria-label="Add assignment">
          +
        </button>
      </h3>
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="a1"
          title="A1 ENV + HTML"
          details="Due Sep 30 at 11:59pm | 100 points"
        />
        <AssignmentItem
          cid={cid}
          aid="a2"
          title="A2 CSS + TAILWIND"
          details="Due Oct 7 at 11:59pm | 100 points"
        />
        <AssignmentItem
          cid={cid}
          aid="a3"
          title="A3 JS + REACT"
          details="Due Oct 14 at 11:59pm | 100 points"
        />
      </ul>
    </div>
  );
}
