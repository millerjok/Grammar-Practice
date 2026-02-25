import type { Express } from "express";
import { createServer, type Server } from "http";
import { grammarLevels } from "./data/grammarLevels.js";
import { grammarQuestions } from "./data/grammarQuestions.js";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/grammar/levels", (_req, res) => {
    res.json(grammarLevels);
  });

  app.get("/api/grammar/questions/:grammarPoint", (req, res) => {
    const grammarPoint = decodeURIComponent(req.params.grammarPoint);
    const data = grammarQuestions[grammarPoint] || grammarQuestions["default"];
    res.json(data);
  });

  app.get("/api/grammar/questions", (_req, res) => {
    res.json(grammarQuestions);
  });

  const httpServer = createServer(app);
  return httpServer;
}
