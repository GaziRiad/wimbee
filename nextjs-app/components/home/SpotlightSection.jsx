import Image from "next/image";
import Tag from "../Tag";

async function SpotlightSection({ content }) {
  if (!content) return null;

  return (
    <section className="bg-[#1A1A1A] px-4 py-8 text-light-200 lg:pb-20 lg:pt-10">
      <div className="mx-auto max-w-[1568px]">
        <div className="mb-4 flex flex-col items-start justify-between lg:mb-10 lg:flex-row">
          <Tag bg="light">{content?.tag}</Tag>
          <div className="mb-10 mt-8 max-w-[985px] lg:mt-0">
            <h2 className="mb-6 text-2xl font-medium lg:text-[28px] 2xl:text-[32px]">
              {content?.title}
            </h2>
            <p className="text-lg leading-relaxed lg:text-xl">
              {content?.description}
            </p>
          </div>
        </div>
        <div className="relative h-96 overflow-hidden rounded-custom lg:h-[720px]">
          <Image
            src={content?.imageUrl || "/images/france.jpg"}
            fill
            alt="Spotlight image from wimbee"
            className="aspect-square object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default SpotlightSection;
