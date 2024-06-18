import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Fiverr() {
  const tasks = [
    {
      text: "Worked with a variety of different languages, platforms and frameworks such as Next.js, React.js, Node.js, ASP .NET 8",
      keywords: ["React.js", "Next.js", "Node.js", "ASP", ".NET", "8"],
    },
    {
      text: "PlanetQRadio project on Fiverr using Next.js and MongoDB, featuring a music player allowing users to watch videos uploaded by the admin on the admin page.",
      keywords: ["Next.js", "MongoDB", "music", "player"],
    },
    {
      text: "NZwalks API for a Fiver client using ASP.NET Web API, implementing advanced features such as repository patterns and database context management.",
      keywords: ["NZwalks", "API", "implementing", "repository", "patterns"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Freelancer <span className="text-AAsecondary">@ Fiver</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Aug 2022 - May 2024
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.fiverr.com/", "_blank")}
          >
            www.fiverr.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1" style={{textAlign:"justify"}}>
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
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
