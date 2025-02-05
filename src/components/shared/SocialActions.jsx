import React from "react";
import likeIcon from "@/assets/LikeIcon.svg";
import shareIcon from "@/assets/ShareIcon.svg";
import loveIcon from "@/assets/LoveIcon.svg";
import dividerIcon from "@/assets/DividerIcon.svg";

export default function SocialActions() {
  return (
    <div className="flex gap-3 items-start self-start mt-1.5 text-xs font-[494]">
      <button className="flex gap-1 self-stretch items-center hover:opacity-80">
        <span>Like Article</span>
        <img
          loading="lazy"
          src={likeIcon}
          className="object-contain shrink-0 aspect-square w-[13px]"
        />
        <img
          loading="lazy"
          src={dividerIcon}
          className="object-contain shrink-0 w-px h-3"
        />
      </button>

      <button className="flex gap-1.5 items-center hover:opacity-80">
        <span>Share Article</span>
        <img
          loading="lazy"
          src={shareIcon}
          className="object-contain shrink-0 w-4 aspect-[1.23]"
        />
        <img
          loading="lazy"
          src={dividerIcon}
          className="object-contain shrink-0 w-px h-3"
        />
      </button>

      <button className="flex gap-1.5 items-center hover:opacity-80">
        <span>Save Article</span>
        <img
          loading="lazy"
          src={loveIcon}
          className="object-contain shrink-0 w-[13px] aspect-[1.18]"
        />
      </button>
    </div>
  );
} 