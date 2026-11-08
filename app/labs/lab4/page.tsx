"use client";

import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import ContextExamples from "./context/ContextExamples";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import DateStateVariable from "./DateStateVariable";
import Effect from "./Effect";
import HooksPage from "./hooks/page";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ProfileForm from "./profile/ProfileForm";
import PropDrilling from "./PropDrilling";
import ReduxExamples from "./redux/ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import UrlEncoding from "./UrlEncoding";
import ZustandExamples from "./zustand/ZustandExamples";
import ZustandProfileForm from "./zustand/ZustandProfileForm";

export default function Lab4() {
  const sayHello = (helloMessage: string) => {
    alert(helloMessage);
  };
  const sayName = (nameMessage: string) => {
    alert(nameMessage);
  };
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        helloMessage="Hello from Lab 4"
        nameMessage="jack"
        theFunction={sayHello}
        theOtherFunction={() => alert("Sample from parent")}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ZustandExamples />
      <ZustandProfileForm />
      <ReduxExamples />
      <Effect />
      <HooksPage />
    </div>
  );
}
