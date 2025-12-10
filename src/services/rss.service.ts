import Parser from "rss-parser";
import Article from "../models/Article";
import { IRssFeed } from "../models/RssFeed";

const parser = new Parser();

export const parseRssFeed = async (feed: IRssFeed) => {
  const parsedFeed = await parser.parseURL(feed.url);

  const articles = parsedFeed.items.map((item: any) => ({
    title: item.title,
    link: item.link,
    content: item.contentSnippet,
    pubDate: item.pubDate,
    source: feed.name
  }));

  await Article.insertMany(articles);
  return articles;
};
