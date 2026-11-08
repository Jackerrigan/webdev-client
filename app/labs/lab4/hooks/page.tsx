import HookProfileForm from "./HookProfileForm";
import IndependentToggles from "./IndependentToggles";
import LocalStorageDemo from "./LocalStorageDemo";
import ToggleDemo from "./ToggleDemo";
import WindowSizeDemo from "./WindowSizeDemo";

export default function HooksPage() {
  return (
    <div id="wd-lab4-hooks" className="flex flex-col gap-8 p-4">
      <h2>Writing Your Own Hooks</h2>
      <WindowSizeDemo />
      <ToggleDemo />
      <LocalStorageDemo />
      <IndependentToggles />
      <HookProfileForm />
    </div>
  );
}
