import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import ArticleToc from "@/components/ArticleToc";
import { site } from "@/lib/site";
import {
  octoberBlog as october12Blog,
  octoberDate as october12Date,
} from "@/lib/october12-blog";
import { october13Blog, october13Date } from "@/lib/october13-blog";
import { october15Blog, october15Date } from "@/lib/october15-blog";
import { october16Blog, october16Date } from "@/lib/october16-blog";
import { october22Blog, october22Date } from "@/lib/october22-blog";
import { october25Blog, october25Date } from "@/lib/october25-blog";
import TocSync from "@/components/TocSync";

const octoberBlog = [...october13Blog, ...october12Blog];

export function generateStaticParams() {
  return [
    ...october25Blog.map((x) => ({ slug: x.slug })),
    ...october22Blog.map((x) => ({ slug: x.slug })),
    ...october16Blog.map((x) => ({ slug: x.slug })),
    ...october15Blog.map((x) => ({ slug: x.slug })),
    ...octoberBlog.map((x) => ({ slug: x.slug })),
    ...site.blog.map((x) => ({ slug: x[0] })),
  ];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fresh = [...october25Blog, ...october22Blog, ...october16Blog, ...october15Blog, ...octoberBlog].find(
    (x) => x.slug === slug,
  );
  if (fresh)
    return {
      title: fresh.title,
      description: fresh.excerpt,
      alternates: { canonical: "/blog/" + slug },
      openGraph: {
        type: "article",
        title: fresh.title,
        description: fresh.excerpt,
        images: [fresh.thumbnail],
      },
      twitter: {
        card: "summary_large_image",
        title: fresh.title,
        description: fresh.excerpt,
        images: [fresh.thumbnail],
      },
    };
  const old = site.blog.find((x) => x[0] === slug);
  return old
    ? {
        title: old[1],
        description: old[3],
        alternates: { canonical: "/blog/" + slug },
      }
    : {};
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const current = [...october25Blog, ...october22Blog, ...october16Blog, ...october15Blog].find(
    (x) => x.slug === slug,
  );
  if (current) {
    const isOctober16 = october16Blog.some((x) => x.slug === slug),
      isOctober25 = october25Blog.some((x) => x.slug === slug),
      isOctober22 = october22Blog.some((x) => x.slug === slug),
      published = isOctober25 ? october25Date : isOctober22 ? october22Date : isOctober16 ? october16Date : october15Date,
      publishedLabel = isOctober25 ? "October 25, 2026" : isOctober22 ? "October 22, 2026" : isOctober16 ? "October 16, 2026" : "October 15, 2026";
    const related = (isOctober25 ? october25Blog : isOctober22 ? october22Blog : isOctober16 ? october16Blog : october15Blog)
      .filter((x) => x.slug !== slug)
      .slice(0, 3);
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: current.title,
      description: current.excerpt,
      image: "https://" + site.domain + current.thumbnail,
      author: { "@type": "Organization", name: current.author },
      publisher: { "@type": "Organization", name: site.brand },
      datePublished: published,
      dateModified: published,
      mainEntityOfPage: "https://" + site.domain + "/blog/" + slug,
    };
    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://" + site.domain,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://" + site.domain + "/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: current.title,
          item: "https://" + site.domain + "/blog/" + slug,
        },
      ],
    };
    return (
      <>
        <TocSync />
        <section className="section">
          <div className="wrap">
            <p>
              <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> /{" "}
              {current.category}
            </p>
            <p className="eyebrow">{current.category}</p>
            <h1>{current.title}</h1>
            <p className="lede">{current.excerpt}</p>
            <p>
              {current.author} ·{" "}
              <time dateTime={published}>Published {publishedLabel}</time> · 9
              minute read
            </p>
            <Image
              src={current.thumbnail}
              alt={`Editorial cover for ${current.title}`}
              width={1200}
              height={630}
              priority
            />
            <div className="article-layout section">
              <article className="prose">
                {current.sections.map((s, i) => (
                  <section key={s.heading}>
                    <h2 id={anchor(s.heading)}>{s.heading}</h2>
                    {s.body.split("\n\n").map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {i === 2 && (
                      <div className="card">
                        <b>Pro tip</b>
                        <p>
                          Test the workflow with one ordinary account and one
                          exception. Differences between them often reveal
                          missing decision rights faster than a larger rollout.
                        </p>
                      </div>
                    )}
                    {i === 5 && (
                      <table>
                        <caption>Minimum responsibility map</caption>
                        <thead>
                          <tr>
                            <th>Work</th>
                            <th>Accountable role</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Prepare and reconcile records</td>
                            <td>Coordination support</td>
                          </tr>
                          <tr>
                            <td>Approve commercial decisions</td>
                            <td>Account leader</td>
                          </tr>
                          <tr>
                            <td>Interpret legal or privacy duties</td>
                            <td>Authorized specialist</td>
                          </tr>
                          <tr>
                            <td>Confirm customer commitments</td>
                            <td>Named business owner</td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </section>
                ))}
                <h2>Implementation checklist</h2>
                <ul>
                  {current.checklist.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <p>
                  Use{" "}
                  <Link href={current.internalLinks[0].url}>
                    {current.internalLinks[0].label}
                  </Link>{" "}
                  to organize the core record, then connect it to{" "}
                  <Link href={current.internalLinks[1].url}>
                    {current.internalLinks[1].label}
                  </Link>
                  . For a general governance reference, review the{" "}
                  <a href={current.source.url} rel="noopener noreferrer">
                    {current.source.label}
                  </a>
                  .
                </p>
                <div className="card">
                  <b>Key takeaway</b>
                  <p>
                    A useful account workflow connects each action to evidence,
                    a named owner, a protected decision boundary, and verifiable
                    closure.
                  </p>
                </div>
                <h2>Frequently asked questions</h2>
                {current.faq.map((x) => (
                  <section key={x.q}>
                    <h3>{x.q}</h3>
                    <p>{x.a}</p>
                  </section>
                ))}
                <p>
                  Tags: {current.category.toLowerCase()}, account management,
                  workflow design
                </p>
                <Link
                  id="cta-blog-post-bookcall"
                  className="cta"
                  href="/contact-us"
                >
                  Book a free consultation
                </Link>
                <h2>Related articles</h2>
                <ul>
                  {related.map((x) => (
                    <li key={x.slug}>
                      <Link href={"/blog/" + x.slug}>{x.title}</Link> ·{" "}
                      {publishedLabel}
                    </li>
                  ))}
                </ul>
              </article>
              <aside className="sidebar">
                <ArticleToc items={current.sections.map((s)=>({id:anchor(s.heading),label:s.heading}))}/>
                <div className="card">
                  <h2>Plan the workflow</h2>
                  <p>
                    Clarify the records, owners, and decision boundaries before
                    you delegate recurring work.
                  </p>
                  <Link className="cta" href="/contact-us">
                    Get a free consultation
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        />
      </>
    );
  }
  const article = octoberBlog.find((x) => x.slug === slug);
  if (article) {
    const isNew = october13Blog.some((x) => x.slug === slug),
      published = isNew ? october13Date : october12Date,
      label = isNew ? "October 13, 2026" : "October 12, 2026";
    const related = octoberBlog.filter((x) => x.slug !== slug).slice(0, 3);
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      image: "https://" + site.domain + article.thumbnail,
      author: { "@type": "Organization", name: site.brand + " Editorial Team" },
      publisher: { "@type": "Organization", name: site.brand },
      datePublished: published,
      dateModified: published,
      mainEntityOfPage: "https://" + site.domain + "/blog/" + slug,
    };
    return (
      <>
        <section className="section">
          <div className="wrap">
            <p className="eyebrow">Blog · {article.category}</p>
            <h1>{article.title}</h1>
            <p className="lede">{article.excerpt}</p>
            <p>
              {site.brand} Editorial Team ·{" "}
              <time dateTime={published}>Published {label}</time>
            </p>
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={1200}
              height={630}
              priority
            />
            <div className="article-layout section">
              <article className="prose">
                {article.sections.map((s) => (
                  <section key={s.heading}>
                    <h2 id={anchor(s.heading)}>{s.heading}</h2>
                    <p>{s.body}</p>
                  </section>
                ))}
                <h2>Implementation checklist</h2>
                <ul>
                  {article.checklist.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="card">
                  <b>Operating boundary</b>
                  <p>{site.disclaimer}</p>
                </div>
                <h2>Continue the Blog series</h2>
                <ul>
                  {related.map((x) => (
                    <li key={x.slug}>
                      <Link href={"/blog/" + x.slug}>{x.title}</Link>
                    </li>
                  ))}
                </ul>
                <Link className="cta" href="/contact-us">
                  Discuss your account workflow
                </Link>
              </article>
              <aside className="sidebar">
                <ArticleToc items={article.sections.map((s)=>({id:anchor(s.heading),label:s.heading}))}/>
                <div className="card">
                  <h2>Blog field guide</h2>
                  <p>
                    Practical steps for a defined customer coordination
                    workflow.
                  </p>
                </div>
                <div className="card">
                  <h3>Send a request</h3>
                  <LeadForm source="october-blog-sidebar" />
                </div>
              </aside>
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </>
    );
  }
  const x = site.blog.find((v) => v[0] === slug);
  if (!x) notFound();
  const related = site.blog.filter((v) => v[0] !== slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: x[1],
    description: x[3],
    author: { "@type": "Organization", name: site.brand + " Editorial Team" },
    publisher: { "@type": "Organization", name: site.brand },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    mainEntityOfPage: "https://" + site.domain + "/blog/" + x[0],
  };
  return (
    <>
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">{x[2]}</p>
          <h1>{x[1]}</h1>
          <p className="lede">{x[3]}</p>
          <p>{site.brand} Editorial Team · Published October 1, 2026</p>
          <div className="article-layout">
            <article className="prose">
              <h2 id="quick-overview">Quick overview</h2>
              <p>
                A strong workflow gives every input an owner, every exception a
                route, and every completed task a visible record.
              </p>
              <h2 id="what-the-role-can-handle">What the role can handle</h2>
              <p>
                Support can maintain approved worklists, organize inputs,
                prepare meetings, document status, and route exceptions. It
                should never blur the line between preparation and professional
                judgment.
              </p>
              <h2 id="workflow-fit-and-role-boundaries">Workflow fit and role boundaries</h2>
              <p>{site.disclaimer}</p>
              <h2>Related Blog guides</h2>
              <ul>
                {related.map((v) => (
                  <li key={v[0]}>
                    <Link href={"/blog/" + v[0]}>{v[1]}</Link>
                  </li>
                ))}
              </ul>
              <Link className="cta" href="/contact-us">
                Map your workflow
              </Link>
            </article>
            <aside className="sidebar">
              <ArticleToc items={[{id:'quick-overview',label:'Quick overview'},{id:'what-the-role-can-handle',label:'What the role can handle'},{id:'workflow-fit-and-role-boundaries',label:'Workflow fit and role boundaries'}]}/>
              <div className="card">
                <h2>Plan the next step</h2>
                <p>
                  Talk through the workflow, its boundaries, and the support it
                  needs.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

function anchor(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
