import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Huawei() {
  const tasks = [
    {
      text: "Worked on the front-end development using Next.js, React.js, Tailwind CSS",
      keywords: ["React.js", "Next.js", "Tailwind CSS", "Moralis", "Ethers.js"],
    },
    {
      text: "Completed an internship through a third-party HR firm for the client Huawei Technologies (PVT) Ltd.",
      keywords: ["client", "Huawei", " Technologies","internship"],
    },
    {
      text: "Implemented website design and enhanced interactivity.",
      keywords: ["website design"],
    },
    {
      text: "Collaborated closely with the team in regular meetings",
      keywords: ["Collaborated", "team"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Web developer Internee <span className="text-AAsecondary">@ HUAWEI TECHNOLOGIES</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">July 2023 - Aug 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("http://www.huawei.com/", "_blank")}
          >
            www.huawei.com
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
