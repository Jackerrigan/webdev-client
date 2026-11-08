"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useModulesStore } from "../../../store/modulesStore";
import Lesson from "./Lesson";
import Module from "./Module";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const {
    modules: allModules,
    addModule,
    deleteModule,
    editModule,
    updateModule,
  } = useModulesStore();
  const modules = allModules.filter((module) => module.course === cid);
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            module={module}
            deleteModule={deleteModule}
            editModule={editModule}
            updateModule={updateModule}
          >
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
