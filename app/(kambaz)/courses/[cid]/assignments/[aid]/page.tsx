export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
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
          </tr>
          <label htmlFor="wd-group">Assignment Group</label>
          <select id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
          <br />
          <label htmlFor="wd-display-grade-as">Display Grade As</label>
          <select id="wd-display-grade-as">
            <option value="LETTER">Letter</option>
            <option value="PERCENTAGE">Percentage</option>
            <option value="SCORE">Score</option>
          </select>
          <br />
          <label htmlFor="wd-submission-type">Submission Type</label>
          <select id="wd-submission-type">
            <option value="VIDEO">Video</option>
            <option value="PDF">Pdf</option>
            <option value="TEXT">Text</option>
            <option value="AUDIO">Audio</option>
            <option value="FILE">File</option>
          </select>
          <br />
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
          <br />
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
          <br />
          <input type="checkbox" id="wd-media-recording" />
          <label htmlFor="wd-media-recording">Media Recording</label>
          <br />
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
          <br />
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>
          <br />
          <label htmlFor="wd-due-date">Due </label>
          <input type="date" id="wd-due-date" />
          <br />
          <label htmlFor="wd-assign-to">Assign to </label>
          <input type="select" id="wd-assign-to" placeholder={"Everyone"} />
          <br />
          <label htmlFor="wd-available-from">Available From </label>
          <input type="date" id="wd-available-from" />
          <br />
          <label htmlFor="wd-available-until">Available Until </label>
          <input type="date" id="wd-available-until" />
          <br />
          <button id="wd-html-button-save" type="submit">
            Save
          </button>
          <button id="wd-html-button-cancel" type="button">
            Cancel
          </button>
        </tbody>
      </table>
    </div>
  );
}
