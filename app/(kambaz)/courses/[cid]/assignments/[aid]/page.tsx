import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" />
      <br />
      <br />
      <textarea id="wd-description" />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
            <td>
              Due <input type="date" />
            </td>
            <td>
              Available From <input type="date" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <label htmlFor="wd-ai-editor-notes">Sample notes</label>
      <br />
      <textarea id="wd-ai-editor-notes" className="w-full" />
      <br />
      <Link href="/courses/1234/assignments" id="wd-cancel">
        Cancel
      </Link>{" "}
      <Link href="/courses/1234/assignments" id="wd-save">
        Save
      </Link>
    </div>
  );
}
