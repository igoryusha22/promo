import cx from 'classnames';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';

import RemarkGfm from 'remark-gfm';

import langTypeScript from 'highlight.js/lib/languages/typescript';
import langBash from 'highlight.js/lib/languages/bash';

import '@/styles/highlight.js/github-dark.css';

import {
  ArticleMetadata,
  getArticle,
  getArticlesMetadata,
} from '@/app/(main-content)/articles/getSortedArticlesData';

const MDXRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [[RemarkGfm]],
    rehypePlugins: [
      [
        rehypeHighlight,
        { languages: { typescript: langTypeScript, bash: langBash } },
      ],
    ],
  },
};

export const generateStaticParams = async () => {
  const articles = (await getArticlesMetadata()) || [];

  return articles.map((article) => {
    return {
      slug: article.id,
    };
  });
};

const ArticlePage = async (props: any) => {
  const {
    params: { slug },
  } = props;

  let articleContent: string;
  let articleMetadata: ArticleMetadata;

  try {
    const { metadata, content } = await getArticle(slug);

    articleContent = content;
    articleMetadata = metadata;
  } catch {
    notFound();
  }

  return (
    <>
      <article className={cx('prose', 'prose-quoteless')}>
        <h1>{articleMetadata.title}</h1>

        <MDXRemote source={articleContent} options={MDXRemoteOptions as any} />
      </article>
    </>
  );
};

export default ArticlePage;
