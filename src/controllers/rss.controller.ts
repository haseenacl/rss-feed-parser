import { RequestHandler } from "express";
import RssFeed from "../models/RssFeed";
import Article from "../models/Article";
import { parseRssFeed } from "../services/rss.service";

export const addFeed: RequestHandler = async (req, res): Promise<void> => {
  try {
    const feed = await RssFeed.create(req.body);
    res.status(201).json(feed);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getFeeds: RequestHandler = async (_req, res): Promise<void> => {
  const feeds = await RssFeed.find();
  res.json(feeds);
};

export const deleteFeed: RequestHandler = async (req, res): Promise<void> => {
  await RssFeed.findByIdAndDelete(req.params.id);
  res.json({ message: "Feed deleted" });
};

export const parseFeed: RequestHandler = async (req, res): Promise<void> => {
  const url = req.query.url as string;

  const feed = await RssFeed.findOne({ url });
  if (!feed) {
    res.status(404).json({ message: "Feed not found" });
    return;
  }

  const articles = await parseRssFeed(feed);
  res.json(articles);
};

export const getArticles: RequestHandler = async (_req, res): Promise<void> => {
  const articles = await Article.find();
  res.json(articles);
};

export const getArticleById: RequestHandler = async (req, res): Promise<void> => {
  const article = await Article.findById(req.params.id);
  res.json(article);
};

export const refreshFeeds: RequestHandler = async (_req, res): Promise<void> => {
  const feeds = await RssFeed.find();
  const refreshed: any[] = [];

  for (const feed of feeds) {
    const articles = await parseRssFeed(feed);
    refreshed.push({ feed: feed.name, count: articles.length });
  }

  res.json({ message: "Feeds refreshed", refreshed });
};
