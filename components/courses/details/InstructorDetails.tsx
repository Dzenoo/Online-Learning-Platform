import Card from "@/components/shared/ui/Card";
import { createGraphicIcon } from "@/utility/helpers";
import React from "react";

const InstructorDetails: React.FC = () => {
  return (
    <Card styles="flex flex-col gap-6 max-w-md">
      <h1 className="text-xl font-bold">Instructor</h1>
      <h1 className="font-bold text-2xl text-purple-700">
        Maximilian Schwarzmuller
      </h1>
      <div className="flex gap-6 items-center flex-wrap">
        <div className="w-40 h-40 bg-purple-700 rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            {createGraphicIcon("/assets/graphics/review.png", "review")}
            <h2 className="text-lg">200 Reviews</h2>
          </div>
          <div className="flex gap-2">
            {createGraphicIcon("/assets/graphics/graduation.png", "graduation")}
            <h2 className="text-lg">200,240 Students</h2>
          </div>
          <div className="flex gap-2">
            {createGraphicIcon("/assets/graphics/play.png", "play")}
            <h2 className="text-lg">9 Lectures</h2>
          </div>
        </div>
      </div>
      <p className="text-md text-gray-400 font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in.
      </p>
    </Card>
  );
};

export default InstructorDetails;
