  import { Request, Response } from "express";
import { userService } from "../services/userService.js";

export const userController = {
  create(req: Request, res: Response) {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const user = userService.create(name, email);
    return res.status(201).json(user);
  },

  getAll(req: Request, res: Response) {
    return res.json(userService.findAll());
  },

  getById(req: Request, res: Response) {
    const user = userService.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "Not found" });

    return res.json(user);
  },

  update(req: Request, res: Response) {
    const { name, email } = req.body;

    const user = userService.update(req.params.id, name, email);
    if (!user) return res.status(404).json({ error: "Not found" });

    return res.json(user);
  },

  delete(req: Request, res: Response) {
    const success = userService.delete(req.params.id);
    if (!success) return res.status(404).json({ error: "Not found" });

    return res.status(204).send();
  }
};
