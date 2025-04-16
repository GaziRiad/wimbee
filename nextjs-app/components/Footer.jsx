import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/client";
import { footerquery } from "@/sanity/groq";

async function Footer({ locale = "en" }) {
  const data = await sanityFetch({
    query: footerquery,
    qParams: { locale },
    tags: ["footer"],
  });

  if (!data) return null;

  const orderedFooter = [
    { key: "services", ...data.services },
    { key: "customers", ...data.customers },
    { key: "news", ...data.news },
    { key: "company", ...data.company },
    { key: "socials", ...data.socials },
  ];

  return (
    <section className="bg-primary-700 px-4 py-8 text-light-200 lg:py-20">
      <div className="mx-auto grid max-w-[1568px] grid-cols-2 gap-y-8 lg:grid-cols-4 xl:grid-cols-6 [&>div:last-child]:col-start-2 lg:[&>div:last-child]:col-start-auto">
        <Link href="/" className="col-span-2 row-span-2 lg:col-span-1">
          <Image
            src={data?.logoUrl}
            width={300}
            height={300}
            alt="Wimbee Footer logo"
            className="max-w-40"
          />
        </Link>
        {orderedFooter?.map((menu, index) => (
          <div key={index}>
            <p className="mb-4 font-mono uppercase text-primary-500 2xl:mb-10">
              {menu?.title}
            </p>
            <ul className="flex flex-col gap-2">
              {menu?.links?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.url || "/"}
                    className="text-light-300 transition-all hover:text-primary-500"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Footer;
