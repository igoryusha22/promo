import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { isProduction } from '@/utils/isProduction';

export interface ArticleMetadata {
  id: string;
  title: string;
  date: string;
  description: string;
}

const POSTS_DIRECTORY = path.join(process.cwd(), 'src', 'articles');
const META_FILENAME_FRAGMENT = '/_meta.md';
const CONTENT_FILENAME_FRAGMENT = '/_content.mdx';

let articles: null | ArticleMetadata[] = null;

const getArticleMetaFileNamePath = (articleId: string) => {
  return path.join(POSTS_DIRECTORY, articleId, META_FILENAME_FRAGMENT);
};

const getArticleContentFileNamePath = (articleId: string) => {
  return path.join(POSTS_DIRECTORY, articleId, CONTENT_FILENAME_FRAGMENT);
};

export const getArticlesMetadata = async () => {
  if (isProduction()) {
    if (articles) {
      return articles;
    }
  }

  return new Promise<ArticleMetadata[]>((resolve, reject) => {
    // Get file names under /posts
    fs.readdir(
      POSTS_DIRECTORY,
      {
        recursive: true,
      },
      async (err, files) => {
        if (err) {
          return reject();
        }

        const allPostsMetadata: ArticleMetadata[] = [];

        const metadataPostPromises: Promise<void>[] = [];

        files.forEach((fileName) => {
          if (fileName instanceof Buffer) {
            fileName = fileName.toString();
          }

          if (!fileName.endsWith(META_FILENAME_FRAGMENT)) {
            return;
          }

          const id = fileName.replace(
            new RegExp(`${META_FILENAME_FRAGMENT}$`),
            ''
          );

          const fullPath = path.join(POSTS_DIRECTORY, fileName);

          metadataPostPromises.push(
            new Promise((res, rej) => {
              fs.readFile(fullPath, 'utf8', (err, fileContents) => {
                if (err) {
                  return rej();
                }

                // Use gray-matter to parse the post metadata section
                const matterResult = matter(fileContents);

                // Combine the data with the id
                allPostsMetadata.push({
                  id,
                  ...matterResult.data,
                } as ArticleMetadata);

                res();
              });
            })
          );
        });

        await Promise.allSettled(metadataPostPromises);

        // Sort posts by date
        articles = allPostsMetadata.sort((a, b) => {
          if (a.date < b.date) {
            return 1;
          } else {
            return -1;
          }
        });

        resolve(articles);
      }
    );
  });
};

export const getArticle = async (
  articleId: string
): Promise<{
  metadata: ArticleMetadata;
  content: string;
}> => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      getArticleMetaFileNamePath(articleId),
      (err, metadataFileContent) => {
        if (err) {
          return reject();
        }

        fs.readFile(
          getArticleContentFileNamePath(articleId),
          'utf-8',
          (err, contentFileContent) => {
            if (err) {
              return reject();
            }

            const { content } = matter(contentFileContent);
            const { data: frontMatter } = matter(metadataFileContent);

            resolve({
              metadata: { id: articleId, ...frontMatter } as ArticleMetadata,
              content,
            });
          }
        );
      }
    );
  });
};
