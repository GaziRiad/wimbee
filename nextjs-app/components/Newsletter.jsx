import { sanityFetch } from "@/sanity/client";
import { newsletterquery } from "@/sanity/groq";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

async function Newsletter({ locale = "en" }) {
  const data = await sanityFetch({
    query: newsletterquery,
    qParams: { locale },
    tags: ["newsletter"],
  });

  if (!data) return null;

  return (
    <section className="bg-light-200">
      <div className="mx-auto flex max-w-[1568px] flex-col-reverse justify-between gap-8 px-4 py-8 lg:flex-row lg:items-center lg:gap-0 lg:pb-20 lg:pt-12">
        <ul className="flex flex-col gap-2 text-lg">
          {data?.socials?.map((social, index) => (
            <li key={index}>
              <Link
                href="#"
                className="text-primary-700 transition-all hover:text-primary-800"
              >
                {social?.title}
              </Link>
            </li>
          ))}
        </ul>
        <NewsletterForm data={data} />
      </div>
    </section>
  );
}

export default Newsletter;
