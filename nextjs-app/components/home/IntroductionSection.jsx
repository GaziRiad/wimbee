"use client";

import Link from "next/link";
import Tag from "../Tag";
import Image from "next/image";
import { useState } from "react";

function IntroductionSection({ content }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!content) return null;

  return (
    <section className="mx-auto max-w-[1568px] px-4 py-8 lg:pb-20 lg:pt-12">
      <div className="mb-5 flex flex-col items-start justify-between lg:mb-11 lg:flex-row">
        <Tag>{content.tag}</Tag>
        <p className="mt-8 text-2xl text-primary-800 lg:mt-0 lg:w-2/3 lg:text-3xl 2xl:text-[40px] 2xl:leading-[117.647%]">
          {content.description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content?.blocks?.map((block, index) => (
          <Link
            href={block.url || "/"}
            key={index}
            className="flex h-full flex-col"
          >
            <div
              className="relative mb-4 h-[420px] w-full lg:h-[600px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={
                  hoveredIndex === index
                    ? block.hoverImage || block.staticImage
                    : block.staticImage
                }
                alt={`Image of ${block.title} from wimbee`}
                fill
                className="rounded-custom object-cover"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <p className="mb-2 font-mono text-lg uppercase text-primary-800">
                {block.title}
              </p>
              <p className="flex-grow text-lg text-primary-500">
                {block.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default IntroductionSection;
