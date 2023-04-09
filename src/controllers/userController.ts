import { Request, Response } from 'express';
import { randomUUID } from 'node:crypto';
import { hashPassword } from '../utils';

import prisma from '../config';

export const getUsers = async (request: Request, response: Response) => {
  const users = await prisma.user.findMany();
  
  response.status(200).json(users);
};

export const getUserById = async (request: Request, response: Response) => {
  const { id } = request.params;
  
  const user = await prisma.user.findUnique({ where: { id: String(id) } });
  
  response.status(200).json(user);
};

export const createUser = async (request: Request, response: Response) => {
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

  const existingEmail = await prisma.user.findUnique({ where: { email } });

  if (existingEmail) {
    return response.status(400).json({ error: "Email já existente" });
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      id,
      name,
      email,
      password: hashedPassword,
      area
    }
  });

  response.status(201).json(user);
};

export const updateUser = async (request: Request, response: Response) => {
  const { id } = request.params;

  const existingId = await prisma.user.findUnique({ where: { id: String(id) } })

  if (!existingId) {
    response.status(400).json({ error: 'Error ID não encontrado' });
  }

  const {
    email,
    password
  } = request.body;

  const hashedPassword = await hashPassword(password);

  await prisma.user.update({
    where: {
      id: String(id)
    }, data: {
      email,
      password: hashedPassword
    }
  });

  response.status(200).json({ message: "Usuário atualizado com sucesso!" });
};

export const deleteUser = async (request: Request, response: Response) => {
  const { id } = request.params;

  const existingId = await prisma.user.findUnique({ where: { id: String(id) } })

  if (!existingId) {
    response.status(400).json({ error: 'Error ID não encontrado' });
  }

  await prisma.user.delete({
    where: {
      id: String(id)
    }
  });

  response.status(200).json({ message: "Usuário deletado com sucesso!" });
};
