import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Spark() {
  const tasks = [
    {
      text: "Worked on a project assigned by The spark foundation team regarding payment integration.",
      keywords: ["project", "The spark foundation team","payment integration"],
    },
    {
      text: "Developed and delivered within time stamp assigned by, Spark foundation using React.js.",
      keywords: ["Developed", "delivered", "React.js"],
    },
    {
      text: "Gained practical experience and enhanced my skills in creating dynamic and responsive websites, boosting my confidence in the field.",
      keywords: ["Gained", "experience", "skills"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Web Dev Internee <span className="text-AAsecondary">@ Singapore Based Company</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">May 2023 - June 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.thesparksfoundationsingapore.org/", "_blank")}
          >
            www.sparkfoundation.org
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2" style={{textAlign:"justify"}}>
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
