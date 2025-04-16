import Image from "next/image";
import ContactBtn from "./ContactBtn";
import { sanityFetch } from "@/sanity/client";
import { contactquery } from "@/sanity/groq";

async function InfoSection({ locale = "en" }) {
  const data = await sanityFetch({
    query: contactquery,
    qParams: { locale },
    tags: ["contact"],
  });

  if (!data) return null;

  return (
    <section className="bg-primary-800 px-4 py-8 text-light-200 lg:py-20">
      <div className="mx-auto grid max-w-[1568px] grid-cols-1 items-center justify-between gap-4 md:gap-10 lg:gap-20 xl:grid-cols-2 2xl:gap-32">
        <div className="relative col-span-1 aspect-square h-80 w-full lg:h-[640px] 2xl:h-[720px]">
          <Image
            src={data?.contactImage}
            fill
            alt="Introduction section of wimbee GIF"
            className="rounded-custom object-cover object-center"
          />
        </div>
        <div className="">
          <h2 className="mb-3 text-2xl text-light-300 lg:mb-4 lg:text-3xl 2xl:mb-6 2xl:text-[40px] 2xl:leading-snug">
            {data?.title}
          </h2>
          <p className="mb-8 text-lg text-[#93989C] lg:mb-10 lg:text-xl 2xl:mb-20">
            {data?.description}
          </p>
          <div className="mb-16 w-fit lg:mb-20 2xl:mb-28">
            <ContactBtn label={data?.buttonText} />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 xl:grid-cols-2">
            {data?.locations?.map((location, index) => (
              <div key={index}>
                <p className="mb-6 font-mono text-base uppercase text-[#93989C]">
                  Wimbee {location?.country}
                </p>
                <p className="text-xl leading-normal">{location?.phone}</p>
                <p className="whitespace-pre-line text-xl leading-normal">
                  {location?.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
