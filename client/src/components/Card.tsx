import React from "react";

interface prop {
  imgSrc: string;
  title: string;
  summary: string;
  url: string;
}

const Card = ({ imgSrc, title, summary, url }: prop) => {
  return (
    <div className="sm:w-100 max-w-sm rounded flex flex-col overflow-hidden shadow-lg bg-secondary">
      <img
        className="lg:h-1/3 w-full"
        src={imgSrc}
        alt="article image"
      />
      <div className="px-6 py-4 text-primary">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{summary}</p>
      </div>
        <a
          href={url}
          className="inline mt-auto text-center bg-gray-400 rounded-full ml-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-100 transition"
        >
          Link to article
        </a>
    </div>
  );
};

export default Card;
