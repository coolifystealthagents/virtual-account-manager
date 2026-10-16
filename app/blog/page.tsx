import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import {
  octoberBlog as october12Blog,
  octoberDate as october12Date,
} from "@/lib/october12-blog";
import { october13Blog, october13Date } from "@/lib/october13-blog";
import { october15Blog, october15Date } from "@/lib/october15-blog";
import { october16Blog, october16Date } from "@/lib/october16-blog";
export const metadata = {
  title: "Blogs and practical insights",
  description: "Practical articles for " + site.audience + ".",
};
const articles = [
  ...october16Blog.map((x) => ({
    ...x,
    published: october16Date,
    label: "October 16, 2026",
  })),
  ...october15Blog.map((x) => ({
    ...x,
    published: october15Date,
    label: "October 15, 2026",
  })),
  ...october13Blog.map((x) => ({
    ...x,
    published: october13Date,
    label: "October 13, 2026",
  })),
  ...october12Blog.map((x) => ({
    ...x,
    published: october12Date,
    label: "October 12, 2026",
  })),
];
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Virtual Account Manager blog"
        title="Practical guidance for the work behind the work."
        copy="Field guides, checklists, and frameworks for more accountable customer coordination."
      />
      <section className="section library-page">
        <div className="wrap">
          <div className="library-heading">
            <div>
              <p className="eyebrow">Latest guidance</p>
              <h2>Make the next workflow easier.</h2>
            </div>
            <p>
              Explore clear, practical ways to organize account plans, customer
              communication, renewals, and handoffs.
            </p>
          </div>
          <div className="article-grid">
            {articles.map((x, i) => (
              <Link
                className={
                  "article-card " + (i === 0 ? "featured-article" : "")
                }
                href={"/blog/" + x.slug}
                key={x.slug}
              >
                <Image className="article-card-image" src={x.thumbnail} alt="" width={1200} height={630} sizes={i===0?'(max-width: 900px) 100vw, 900px':'(max-width: 620px) 100vw, 50vw'} priority={i===0}/>
                <span className="article-card-copy"><span>{x.category}</span><h2>{x.title}</h2><time dateTime={x.published}>{x.label}</time><b>Read guide →</b></span>
              </Link>
            ))}
            {site.blog.map((x: any) => (
              <Link className="article-card" href={"/blog/" + x[0]} key={x[0]}>
                <span className="article-card-copy"><span>{x[2]}</span><h2>{x[1]}</h2><b>Read guide →</b></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
