import { Card } from "@/components/ui/background-overlay-card";
import React from "react";

const Learning = () => {
  return (
    <div className="space-y-5">
      <h2 className="sm:text-xl md:text-2xl text-zinc-300 font-semibold">
        Learning Through Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <Card
          imgURL="/cointrack-ss.png"
          gifURL="/cointrack-demo-video.gif"
          title="CoinTrack"
          description="Built with React, Zustand, Chart.js, and the CoinGecko API to deepen my skills in real-time API integration, state management, and dynamic data visualization and logic for news fetching feature."
        ></Card>
        <Card
          imgURL="/editor-ss.png"
          gifURL="/editor-demo.gif"
          title="Collabrative Editor"
          description="Developed a real-time collaborative editor using React, Tiptap, and Yjs to learn about rich text editing, syntax highlighting, and multi-user synchronization with a custom WebSocket server on Render."
        />
      </div>
    </div>
  );
};

export default Learning;
