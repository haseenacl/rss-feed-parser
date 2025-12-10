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
 *     summary: Add a new RSS feed URL
 *     tags: [RSS Feeds]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 example: "https://www.bbc.com/news/rss.xml"
 *     responses:
 *       200:
 *         description: Feed added successfully
 */
router.post("/rss/add", addFeed);

/**
 * @swagger
 * /rss:
 *   get:
 *     summary: Get all saved RSS feed URLs
 *     tags: [RSS Feeds]
 *     responses:
 *       200:
 *         description: List of RSS feeds
 */
router.get("/rss", getFeeds);

/**
 * @swagger
 * /rss/{id}:
 *   delete:
 *     summary: Delete an RSS feed by its ID
 *     tags: [RSS Feeds]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Feed deleted successfully
 */
router.delete("/rss/:id", deleteFeed);

/**
 * @swagger
 * /rss/parse:
 *   get:
 *     summary: Parse a single RSS feed URL
 *     tags: [RSS Feeds]
 *     parameters:
 *       - in: query
 *         name: url
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Parsed articles
 */
router.get("/rss/parse", parseFeed);

/**
 * @swagger
 * /rss/articles:
 *   get:
 *     summary: Get all parsed articles from all feeds
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: List of articles
 */
router.get("/rss/articles", getArticles);

/**
 * @swagger
 * /rss/articles/{id}:
 *   get:
 *     summary: Get an article by ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Article found
 */
router.get("/rss/articles/:id", getArticleById);

/**
 * @swagger
 * /rss/refresh:
 *   post:
 *     summary: Refresh all RSS feeds
 *     tags: [RSS Feeds]
 *     responses:
 *       200:
 *         description: Feeds refreshed successfully
 */
router.post("/rss/refresh", refreshFeeds);

export default router;
