import { Request, Response } from 'express';
import { randomUUID } from 'node:crypto';

import prisma from '../config';

export const getBoard = async (request: Request, response: Response) => {
  const Board = await prisma.board.findMany();

  response.status(200).json(Board);
}

export const getBoardById = async (request: Request, response: Response) => {
  const { id } = request.params;
  
  const board = await prisma.board.findUnique({ where: { id: String(id) } });
  
  response.status(200).json(board);
};

export const createBoard = async (request: Request, response: Response) => {
  const id = randomUUID();
  const {
    name,
    email,
    password,
    area
  } = request.body;

  if (!name || !email || !password || !area) {
    return response.status(400).json({ error: 'Todos os campos tem que estar preenchidos' })
  }

  const board = await prisma.board.create({
    data: {
      id
    }
  });

  response.status(201).json(board);
};

export const updateBoard = async (request: Request, response: Response) => {
  const { id } = request.params;

  const existingId = await prisma.board.findUnique({ where: { id: String(id) } })

  if (!existingId) {
    throw new Error('Board não encontrado');
  }

  const {
    email,
    password
  } = request.body;

  await prisma.board.update({
    where: {
      id: String(id)
    }, data: {
      email,
      password
    }
  });

  response.status(200).json({ message: "Board atualizado com sucesso!" });
};

export const deleteBoard = async (request: Request, response: Response) => {
  const { id } = request.params;

  const existingId = await prisma.board.findUnique({ where: { id: String(id) } })

  if (!existingId) {
    throw new Error('board não encontrado');
  }

  await prisma.board.delete({
    where: {
      id: String(id)
    }
  });

  response.status(200).json({ message: "Board deletado com sucesso!" });
};