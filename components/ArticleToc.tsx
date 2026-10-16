type Item = { id: string; label: string };

export default function ArticleToc({items}:{items:Item[]}) {
  return <nav className="article-toc" aria-label="Table of contents">
    <p className="eyebrow">On this page</p>
    <ol>{items.map((item,index)=><li key={item.id}><a href={`#${item.id}`}><span>{String(index+1).padStart(2,'0')}</span>{item.label}</a></li>)}</ol>
  </nav>;
}
