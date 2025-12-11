import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

export const swaggerDocs = (app: Express) => {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "RSS Feed Parser API",
        version: "1.0.0",
        description: "API documentation for RSS Feed Parser",
      },
      servers: [
        {
          url: "http://localhost:3004/api",
          description: "Local server"
        },
        {
          url: "https://rss-feed-parser-jpmn.onrender.com/api",
          description: "Production server (Render)"
        }
      ]
    },
    apis: ["./src/routes/*.ts"],
  };

  const swaggerSpec = swaggerJsDoc(options);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log("📘 Swagger Docs available at http://localhost:3004/api-docs");
};
