// import type React from "react";

import type { RefObject } from "react";

const Intro: React.FC<{
  elementRef?: RefObject<HTMLDivElement | null>;
  headingTitle: string;
  title: string;
}> = (props) => {
  return (
    <div
      ref={props.elementRef}
      className="w-full mx-auto flex flex-col gap-4 mt-12 text-center text-pretty"
    >
      <h4 className="text-[#007A55]">{props.headingTitle}</h4>
      <h6 className="text-[#003A16]">{props.title}</h6>
    </div>
  );
};

export default Intro;
