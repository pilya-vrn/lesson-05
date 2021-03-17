import { Request } from "express";
import { getRepository } from "typeorm";
import { Book } from "../entity/Book";
import { BadRequestError } from "../error/BadRequestError";
import { NotFoundError } from "../error/NotFoundError";
import { schemaBookCreate } from "../schema/book";
import { App } from "../types/app";

const repository = getRepository(Book)

export const bookGetAll: App.Action = async (req, res) => {
  const books = await repository.find({ relations: ['authors'] })
  res.json(books)
}

export const bookGetById: App.Action = async (req: Request<{ id: string }>, res) => {
  const book = await repository.findOne(req.params.id, { relations: ['authors'] })

  if (!book) {
    throw new NotFoundError()
  }

  res.json(book)
}

export const bookCreate: App.Action = async (req, res) => {
  await schemaBookCreate.validate(req.body, { abortEarly: false })
  const book = await repository.save(req.body)
  res.status(201).json(book)
}
