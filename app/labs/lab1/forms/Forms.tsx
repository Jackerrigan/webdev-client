"use client";

import Buttons from "./Buttons";
import Checkboxes from "./Checkboxes";
import Dropdowns from "./Dropdowns";
import OtherFieldTypes from "./OtherFieldTypes";
import RadioButtons from "./RadioButtons";
import TextFields from "./TextFields";
import Textarea from "./Textarea";

export default function Forms() {
  return (
    <div id="wd-forms">
      <h4>Form Elements</h4>
      <form
        id="wd-text-fields"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <TextFields />
        <Textarea />
        <RadioButtons />
        <Checkboxes />
        <Dropdowns />
        <OtherFieldTypes />
        <Buttons />
      </form>
    </div>
  );
}
