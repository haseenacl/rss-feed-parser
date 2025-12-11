import { Router } from "express";
import {
  addFeed,
  getFeeds,
  deleteFeed,
  parseFeed,
  getArticles,
  getArticleById,
  refreshFeeds
} from "../controllers/rss.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: RSS Feeds
 *   description: RSS Feed Management
 */

/**
 * @swagger
 * /rss/add:
 *   post:
 *     summary: Add a new RSS feed
 *     tags: [RSS Feeds]
 */
router.post("/rss/add", addFeed);

/**
 * @swagger
 * /rss:
 *   get:
 *     summary: Get all saved RSS feeds
 *     tags: [RSS Feeds]
 */
router.get("/rss", getFeeds);

/**
 * @swagger
 * /rss/{id}:
 *   delete:
 *     summary: Delete RSS feed by ID
 *     tags: [RSS Feeds]
 */
router.delete("/rss/:id", deleteFeed);

/**
 * @swagger
 * /rss/parse:
 *   get:
 *     summary: Parse a single RSS feed
 *     tags: [RSS Feeds]
 */
router.get("/rss/parse", parseFeed);

/**
 * @swagger
 * /rss/articles:
 *   get:
 *     summary: Get all parsed articles
 *     tags: [Articles]
 */
router.get("/rss/articles", getArticles);

/**
 * @swagger
 * /rss/articles/{id}:
 *   get:
 *     summary: Get article by ID
 *     tags: [Articles]
 */
router.get("/rss/articles/:id", getArticleById);

/**
 * @swagger
 * /rss/refresh:
 *   post:
 *     summary: Refresh all RSS feeds
 *     tags: [RSS Feeds]
 */
router.post("/rss/refresh", refreshFeeds);

export default router;
