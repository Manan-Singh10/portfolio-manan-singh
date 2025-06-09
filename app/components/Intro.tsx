import DescriptionText from "./DescriptionText";
import ImageCard from "./ImageCard";

const Intro = () => {
  return (
    <div className="flex items-center gap-10 text-xs sm:text-xl md:text-2xl text-gray-400">
      <DescriptionText />
      <ImageCard />
    </div>
  );
};

export default Intro;
