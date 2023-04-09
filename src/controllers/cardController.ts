import { Request, Response } from 'express';
import { randomUUID } from 'node:crypto';

import prisma from '../config';

export const getCards = async (request: Request, response: Response) => {
  const cards = await prisma.card.findMany();

  response.status(200).json(cards);
}

export const getCardById = async (request: Request, response: Response) => {
  const { id } = request.params;
  
  const card = await prisma.card.findUnique({ where: { id: String(id) } });
  
  response.status(200).json(card);
};

export const createCard = async (request: Request, response: Response) => {
  const id = randomUUID();
  const {
    title,
    labels,
    date,
    tasks,
    desc
  } = request.body;

  if (!title || !tasks) {
    return response.status(400).json({ error: 'Todos os campos tem que estar preenchidos' })
  }

  const card = await prisma.card.create({
    data: {
      id,
      title,
      labels,
      date,
      tasks,
      desc
    }
  });

  response.status(201).json(card);
};

export const updateCard = async (request: Request, response: Response) => {
  const { id } = request.params;

  const existingId = await prisma.card.findUnique({ where: { id: String(id) } })

  if (!existingId) {
    throw new Error('Card não encontrado');
  }

  const {
    title,
    labels,
    date,
    tasks,
    desc
  } = request.body;

  await prisma.card.update({
    where: {
      id: String(id)
    }, data: {
      title,
      labels,
      date,
      tasks,
      desc
    }
  });

  response.status(200).json({ message: "Card atualizado com sucesso!" });
};

export const deleteCard = async (request: Request, response: Response) => {
  const { id } = request.params;

  const existingId = await prisma.card.findUnique({ where: { id: String(id) } })

  if (!existingId) {
    throw new Error('Card não encontrado');
  }

  await prisma.card.delete({
    where: {
      id: String(id)
    }
  });

  response.status(200).json({ message: "Card deletado com sucesso!" });
};