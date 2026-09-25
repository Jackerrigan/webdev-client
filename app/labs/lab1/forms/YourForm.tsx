export default function YourForm() {
  return (
    <div>
      <h2>Your Form</h2>
      <form id="wd-your-form">
        <h3>Basic Information</h3>
        <label htmlFor="wd-text-fields-name">Name:</label>
        <input
          type="text"
          placeholder="SAMPLE: Jane Doe"
          id="wd-text-fields-name"
        />
        <br />
        <label htmlFor="wd-text-fields-password">Password:</label>
        <input
          type="password"
          placeholder="SAMPLE: password"
          id="wd-text-fields-password"
        />
        <br />
        <label htmlFor="wd-text-fields-email">Email:</label>
        <input
          type="email"
          placeholder="SAMPLE: jane@university.edu"
          id="wd-text-fields-email"
        />
        <br />
        <label htmlFor="wd-textarea">Bio:</label>
        <br />
        <textarea
          id="wd-textarea"
          placeholder="SAMPLE: Tell us about yourself"
          cols={30}
          rows={5}
        />
        <br />

        <fieldset>
          <legend>Class Standing</legend>
          <input type="radio" name="class-standing" id="wd-radio-freshman" />
          <label htmlFor="wd-radio-freshman">Freshman</label>
          <br />
          <input type="radio" name="class-standing" id="wd-radio-sophomore" />
          <label htmlFor="wd-radio-sophomore">Sophomore</label>
          <br />
          <input type="radio" name="class-standing" id="wd-radio-junior" />
          <label htmlFor="wd-radio-junior">Junior</label>
          <br />
          <input type="radio" name="class-standing" id="wd-radio-senior" />
          <label htmlFor="wd-radio-senior">Senior</label>
        </fieldset>

        <fieldset>
          <legend>Enrollment</legend>
          <input type="radio" name="enrollment" id="wd-radio-full-time" />
          <label htmlFor="wd-radio-full-time">Full-time</label>
          <br />
          <input type="radio" name="enrollment" id="wd-radio-part-time" />
          <label htmlFor="wd-radio-part-time">Part-time</label>
        </fieldset>

        <fieldset>
          <legend>Interests</legend>
          <input type="checkbox" name="interest" id="wd-checkbox-clubs" />
          <label htmlFor="wd-checkbox-clubs">Clubs</label>
          <br />
          <input type="checkbox" name="interest" id="wd-checkbox-career" />
          <label htmlFor="wd-checkbox-career">Career</label>
          <br />
          <input type="checkbox" name="interest" id="wd-checkbox-languages" />
          <label htmlFor="wd-checkbox-languages">Languages</label>
        </fieldset>

        <label htmlFor="wd-select-one-major">Major:</label>
        <select id="wd-select-one-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="CY">Cybersecurity</option>
          <option value="DS">Data Science</option>
        </select>
        <br />
        <label htmlFor="wd-select-many-topics">Topics of Interest:</label>
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
        <br />
        <label htmlFor="wd-text-fields-grad-year">Graduation Year:</label>
        <input
          type="number"
          placeholder="SAMPLE: 2028"
          id="wd-text-fields-grad-year"
          min={2020}
          max={2035}
        />
        <br />
        <label htmlFor="wd-text-fields-date">Important Date:</label>
        <input type="date" id="wd-text-fields-date" />
        <br />
        <label htmlFor="wd-text-fields-range">Course Excitement (0-10):</label>
        <input
          type="range"
          min={0}
          max={10}
          defaultValue={5}
          id="wd-text-fields-range"
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
