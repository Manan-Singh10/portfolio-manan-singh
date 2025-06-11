import { Timeline } from "@/components/ui/project-timeline";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="text-zinc-200">
      <Timeline
        data={[
          { title: "2025", content: <div className="h-100">Hello</div> },
          { title: "2025", content: <div className="h-100">Hello</div> },
          { title: "2025", content: <div className="h-100">Hello</div> },
          { title: "2025", content: <div className="h-100">Hello</div> },
        ]}
      />
    </div>
  );
};

export default ProjectsPage;
