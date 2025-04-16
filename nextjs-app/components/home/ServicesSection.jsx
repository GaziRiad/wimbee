"use client";

import { useState } from "react";
import Image from "next/image";
import Tag from "../Tag";
import Link from "next/link";

function ServicesSection({ content }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!content) return null;

  return (
    <section className="mx-auto max-w-[1568px] px-4 py-8 lg:pb-20 lg:pt-12">
      <div className="mb-12 flex flex-col items-start justify-between lg:mb-28 lg:flex-row">
        <Tag>{content.tag}</Tag>
        <h2 className="mt-8 max-w-5xl text-2xl text-primary-600 lg:mt-0 lg:w-2/3 lg:text-3xl 2xl:text-[40px] 2xl:leading-[117.647%]">
          {content.description}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content?.hubs?.map((service, index) => (
          <Link
            href={service.url || "/"}
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
                    ? service.hoverImage || service.staticImage
                    : service.staticImage
                }
                alt={`Image of ${service.title} from wimbee`}
                fill
                className="rounded-custom object-cover"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <p className="mb-2 font-mono text-lg uppercase text-primary-800">
                {service.title}
              </p>
              <p className="flex-grow text-lg text-primary-500">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
