export default function YourForm() {
  return (
    <div>
      <h2>My Form</h2>
      <form id="wd-your-form">
        <label>Basic info:</label> <br />
        <label htmlFor="wd-text-fields-first-name">First Name:</label>
        <input placeholder="First Name" id="wd-text-fields-first-name" /> <br />
        <label htmlFor="wd-text-fields-last-name">Last Name:</label>
        <input placeholder="Last Name" id="wd-text-fields-last-name" /> <br />
        <label htmlFor="wd-text-fields-student-id">Student ID:</label>
        <input placeholder="Student ID" id="wd-text-fields-student-id" /> <br />
        <label>Bio:</label> <br />
        <textarea id="wd-textarea" cols={10} rows={10} /> <br />
        <label>Status:</label> <br />
        <input type="radio" name="radio-year" id="wd-radio-freshman" />
        <label htmlFor="wd-radio-freshman">Freshman</label>
        <br />
        <input type="radio" name="radio-year" id="wd-radio-sophomore" />
        <label htmlFor="wd-radio-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="radio-year" id="wd-radio-Junior" />
        <label htmlFor="wd-radio-Junior">Junior</label>
        <br />
        <input type="radio" name="radio-year" id="wd-radio-senior" />
        <label htmlFor="wd-radio-senior">Senior</label>
        <br />
        <input type="radio" name="radio-year" id="wd-radio-5th-year" />
        <label htmlFor="wd-radio-5th-year">5th Year</label>
        <br />
        <input type="radio" name="radio-year" id="wd-radio-grad" />
        <label htmlFor="wd-radio-grad">Graduate</label>
        <br />
        <label>Enrollment</label>
        <br />
        <input type="radio" name="radio-enrollment" id="wd-radio-full-time" />
        <label htmlFor="wd-radio-full-time">Full Time</label>
        <br />
        <input type="radio" name="radio-enrollment" id="wd-radio-part-time" />
        <label htmlFor="wd-radio-part-time">Part Time</label>
        <br />
        <label>Interests:</label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-chkbox-clubs" />
        <label htmlFor="wd-chkbox-clubs">Clubs</label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-chkbox-career" />
        <label htmlFor="wd-chkbox-career">Career</label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-chkbox-languages" />
        <label htmlFor="wd-chkbox-languages">Languages</label>
        <br />
        <input
          type="checkbox"
          name="check-interest"
          id="wd-chkbox-frameworks"
        />
        <label htmlFor="wd-chkbox-frameworks">Frameworks</label>
        <br />
        <label>Major:</label>
        <br />
        <select id="wd-select-one-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="AI">AI</option>
          <option value="CY">Cybersecurity</option>
        </select>
        <label htmlFor="wd-select-many-topics">Topics of Interest: </label>
        <br />
        <select
          multiple
          id="wd-select-many-topics"
          defaultValue={["SOFTWARE", "ALGORITHMS"]}
        >
          <option value="SOFTWARE">Software</option>
          <option value="SYSTEMS">Systems</option>
          <option value="SECURITY">Security</option>
          <option value="ALGORITHMS">Algorithms</option>
        </select>
        <label>Other Info:</label>
        <br />
        <label htmlFor="wd-text-fields-email">Email: </label>
        <input
          type="email"
          placeholder="School Email"
          id="wd-text-fields-email"
        />
        <br />
        <label htmlFor="wd-text-fields-grad-year">Graduation Year: </label>
        <input
          type="number"
          placeholder="20??"
          id="wd-text-fields-grad-year"
          min={2020}
          max={2030}
        />
        <br />
        <label htmlFor="wd-text-fields-birthday">birthday: </label>
        <input
          type="date"
          placeholder="January 1"
          id="wd-text-fields-birthday"
        />
        <br />
        <label htmlFor="wd-text-fields-excitement">Course Excitement: </label>
        <input
          type="range"
          placeholder="5"
          min="0"
          max="10"
          id="wd-text-fields-excitement"
        />
        <br />
        <button id="wd-html-button-save" type="submit">
          Save
        </button>
        <button id="wd-html-button-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
