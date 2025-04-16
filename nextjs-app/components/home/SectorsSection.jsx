import Image from "next/image";
import Tag from "../Tag";
import Link from "next/link";

function SectorsSection({ content }) {
  if (!content) return null;

  return (
    <section className="bg-[#1A1A1A] px-4 py-8 text-light-200 lg:pb-20 lg:pt-12">
      <div className="mx-auto max-w-[1568px]">
        <div className="mb-16 flex flex-col items-start justify-between lg:mb-28 lg:flex-row">
          <Tag bg="light">{content.tag}</Tag>
          <h2 className="mt-8 max-w-5xl text-2xl lg:mt-0 lg:w-2/3 lg:text-3xl 2xl:text-[40px] 2xl:leading-[117.647%]">
            {content.title}
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-20">
          <ul className="w-full text-3xl font-medium text-primary-500 2xl:w-[40%]">
            {content.allSectors.map((sector, index) => (
              <li key={index}>
                <Link
                  href={`/sectors/${sector.slug}` || "/"}
                  className="group flex cursor-pointer items-center justify-between border-b border-primary-500 py-4 transition-all duration-300 hover:text-primary-400"
                >
                  <span>{sector.title}</span>
                  <span className="size-4 rounded-full bg-primary-400 opacity-0 transition-all group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
          <Image
            src={content?.imageUrl || "/images/france.jpg"}
            width={600}
            height={600}
            alt="Introduction section of wimbee GIF"
            className="aspect-square object-cover lg:max-w-[270px] 2xl:max-w-[580px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SectorsSection;
