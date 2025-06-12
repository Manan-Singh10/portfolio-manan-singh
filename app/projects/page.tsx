import { Timeline } from "@/components/ui/project-timeline";
import React from "react";
import ProjectContent from "./ProjectContent";

const ProjectsPage = () => {
  return (
    <div className="text-zinc-200">
      <Timeline
        data={[
          {
            title: "Cointrack",
            content: (
              <ProjectContent
                description={[
                  "Built a responsive crypto dashboard using React, Vite, and Tailwind CSS.",
                  "Integrated CoinGecko API to display live crypto data with currency switching.",
                  "Visualized price trends using Chart.js for multiple timeframes.",
                  "Implemented search to find and view detailed data for any coin.",
                  "Fetched crypto news via Newsdata.io API with auto-refresh every 24h.",
                  "Used React Router for smooth navigation between pages.",
                  "Managed global state efficiently with Zustand.",
                  "Focused on clean, mobile-first UI with clear data presentation.",
                ]}
                imageURLs={[
                  "/project-images/cointrack-ss/CoinTrack-1.png",
                  "/project-images/cointrack-ss/CoinTrack-2.png",
                  "/project-images/cointrack-ss/CoinTrack-3.png",
                  "/project-images/cointrack-ss/CoinTrack-4.png",
                ]}
                demoLink="https://coin-track-kappa.vercel.app/"
              />
            ),
          },
          {
            title: "Text-Editor",
            content: (
              <ProjectContent
                description={[
                  "Built a real-time collaborative editor using React and Tiptap.",
                  "Integrated yjs with a self-hosted WebSocket server for live multi-user syncing.",
                  "Implemented rich text editing and syntax-highlighted code blocks with Tiptap extensions.",
                  "Used a forked y-websocket-server hosted on Render for real-time communication.",
                  "Handled collaboration state with WebSocket provider and yjs awareness protocol.",
                  "Deployed the frontend on Vercel with focus on performance and clean UX.",
                  "Designed a minimal interface optimized for developers and technical users.",
                  "Demonstrated frontend expertise in real-time systems and collaborative editing.",
                ]}
                imageURLs={["/editor-ss.png", "/editor-demo.gif"]}
                demoLink="https://task-01-real-time-collaborative-editor.vercel.app/"
              />
            ),
          },
          {
            title: "TaskPilot",
            content: (
              <ProjectContent
                description={[
                  "Designed and built a task management app focused on simplicity and productivity.",
                  "Implemented features like task creation, status updates, and filtering by category or priority.",
                  "Used React for component-driven UI and local/global state management.",
                  "Ensured smooth user experience with animations and responsive design using Tailwind CSS.",
                  "Focused on clean layout, intuitive interactions, and minimal visual clutter.",
                  "Built reusable components for scalable feature expansion and maintainability.",
                  "Integrated local storage to persist tasks across sessions without backend dependencies.",
                  "Demonstrated ability to ship polished, user-centric tools from scratch.",
                ]}
                imageURLs={[
                  "/project-images/task-pilot-ss/tp-01.png",
                  "/project-images/task-pilot-ss/tp-02.png",
                  "/project-images/task-pilot-ss/tp-03.png",
                  "/project-images/task-pilot-ss/tp-04.png",
                ]}
                demoLink="https://manan-singh10.github.io/TaskPilot/"
              />
            ),
          },
          {
            title: "Payless",
            content: (
              <ProjectContent
                description={[
                  "Built a task manager app using vanilla JavaScript with object-oriented programming principles.",
                  "Implemented features like task creation, editing, deletion, and quick-complete toggles.",
                  "Categorized tasks into All, Pending, and Completed views for better usability.",
                  "Enabled task prioritization (high, medium, low) and date-based sorting.",
                  "Visualized user productivity with interactive progress charts (7-day, monthly, and daily views).",
                  "Used local storage for persistent task data without backend integration.",
                  "Designed a clean, responsive UI with intuitive task interactions and status indicators.",
                  "Demonstrated strong DOM manipulation, data structuring, and frontend logic skills.",
                ]}
                imageURLs={[
                  "/project-images/payless-ss/payless-01.png",
                  "/project-images/payless-ss/payless-02.png",
                  "/project-images/payless-ss/payless-03.png",
                ]}
                demoLink="https://manan-singh10.github.io/PayLess/"
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default ProjectsPage;
