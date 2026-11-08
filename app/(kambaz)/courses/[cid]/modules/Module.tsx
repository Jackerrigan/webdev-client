import type { ReactNode } from "react";
import type { CourseModule } from "../../../store/modulesStore";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Module({
  module,
  deleteModule,
  editModule,
  updateModule,
  children,
}: {
  module: CourseModule;
  deleteModule: (id: string) => void;
  editModule: (id: string) => void;
  updateModule: (m: CourseModule) => void;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
        {module.editing ? (
          <input
            className="rounded border border-neutral-300 px-2 py-1"
            defaultValue={module.name}
            autoFocus
            onChange={(e) => updateModule({ ...module, name: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                updateModule({ ...module, editing: false });
            }}
          />
        ) : (
          <span>{module.name}</span>
        )}
        <ModuleControlButtons moduleId={module._id} />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
