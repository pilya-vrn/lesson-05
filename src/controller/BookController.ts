import { getRepository } from "typeorm";
import { Book } from "../entity/Book";
import { App } from "../types/app";

const repository = getRepository(Book)

export const bookGetAll: App.Action = async (req, res) => {
  const data = await repository.find({ relations: ['authors'] })
  res.json(data)
}
