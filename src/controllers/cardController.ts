import { Request, Response } from 'express';

import prisma from '../config';

// Get all boards
export const getCards = async (req: Request, res: Response) => {
  try {
    const cards = await prisma.card.findMany();

    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Error getting cards' });
  }
};

// Create a new board
export const createCard = async (req: Request, res: Response) => {
  const { 
    title, 
    date, 
    boardId 
  } = req.body;

  try {
    const card = await prisma.card.create({ 
      data: { 
        title, 
        date, 
        board: { 
          connect: { 
            id: boardId 
          } 
        } 
      } 
    });

    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Error creating card' });
  }
};

// Get a Card by ID
export const getCardById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const card = await prisma.card.findUnique({ where: { id: Number(id) } });

    if (!card) { 
      throw Error('Card not found');
    }

    res.status(200).json(card);
  } catch (error) {
    res.status(404).json({ message: 'Erro' });
  }
};

// Update a Card by ID
export const updateCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { 
    title, 
    date, 
    boardId 
  } = req.body;

  try {
    const card = await prisma.card.update({
      where: { 
        id: Number(id) 
      },
      data: { 
        title, 
        date, 
        board: { 
          connect: { 
            id: boardId 
          } 
        } 
      },
    });

    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Error updating card' });
  }
};

// Delete a Card by ID
export const deleteCard = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const card = await prisma.card.delete({ 
      where: { 
        id: Number(id) 
      } 
    });

    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting card' });
  }
};