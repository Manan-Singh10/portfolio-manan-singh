import { LoaderIcon } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <LoaderIcon className="animate-spin w-10 h-10 text-gray-500" />;
    </div>
  );
};

export default loading;
