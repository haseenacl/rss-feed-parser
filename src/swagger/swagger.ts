import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

export const swaggerDocs = (app: Express, port: number) => {
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
          url: "https://rss-feed-parser-jpmn.onrender.com/api",
          description: "Production server",
        },
        {
          url: `http://localhost:${port}/api`,
          description: "Local development server",
        },
      ],
    },

    // IMPORTANT: Use dist folder during build + src folder during dev
    apis: ["./src/routes/*.ts", "./dist/routes/*.js"],
  };

  const swaggerSpec = swaggerJsDoc(options);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log(`📘 Swagger Docs available at http://localhost:${port}/api-docs`);
};
