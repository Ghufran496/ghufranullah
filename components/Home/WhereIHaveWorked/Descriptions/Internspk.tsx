import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Internspk() {
  const tasks = [
    {
      text: " I approached my internship with an initiative-taking attitude, eager to learn new things. During this period, I encountered challenges in HTML, CSS, JavaScript, PHP, and WordPress.",
      keywords: ["approached","internship","initiative-taking attitude","learn new", "HTML", "CSS","JavaScript", "PHP", "WordPress" ],
    },
    {
      text: "Solved various modules problems, giving me boost on each step ownward.",
      keywords: ["scripts"],
    }
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Web Dev Internee <span className="text-AAsecondary">@ Interns Pakistan</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">July 3, 2023 - July 31, 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://interns.pk/", "_blank")}
          >
            www.internspk.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2" style={{textAlign:"justify"}}>
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
