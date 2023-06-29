"use client";
import { ReactNode, useState } from "react";
import { Button } from "../Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export const Carousel = ({ children }: { children: ReactNode }) => {
  const [currentPos, setCurrentPos] = useState<number>(0);

  const onPrevClick = () =>
    setCurrentPos((currentPos) =>
      currentPos === 0 ? currentPos : Number(currentPos) - 1
    );
  const onNextClick = () =>
    setCurrentPos((currentPos) =>
      currentPos === 2 ? currentPos : Number(currentPos) + 1
    );

  return (
    <div className="overflow-hidden mt-4 relative">
      <div
        className="flex space-x-2 transition-transform duration-200 ease-out"
        style={{ transform: `translateX(-${Number(currentPos) * 50}%)` }}
      >
        {children}
      </div>

      {currentPos !== 0 ? (
        <div className="absolute left-0 top-0 bg-gradient-to-r from-gray-950 h-full flex items-center">
          <Button variant="light" onClick={onPrevClick}>
            <ChevronLeftIcon />
          </Button>
        </div>
      ) : null}
      {currentPos !== 2 ? (
        <div className="absolute right-0 top-0 bg-gradient-to-l from-gray-950 to-transparent h-full flex items-center ml-auto">
          <Button variant="light" onClick={onNextClick}>
            <ChevronRightIcon />
          </Button>
        </div>
      ) : null}
    </div>
  );
};
