import { Request, Response } from 'express';

import prisma from '../config';

// Get all boards
export const getBoards = async (req: Request, res: Response) => {
  try {
    const boards = await prisma.board.findMany({
      include: { 
        cards: { 
          include: { 
            labels: true, 
            tasks: true 
          } 
        } 
      },
    });
    
    res.json(boards);

  } catch (error) {
    res.status(500).json({ message: 'Error getting boards' });
  }
};

// Create a new board
export const createBoard = async (req: Request, res: Response) => {
  const { title } = req.body;

  try {

    const board = await prisma.board.create({
      data: { 
        title 
      },
      include: { 
        cards: { 
          include: { 
            labels: true, 
            tasks: true 
          } 
        } 
      },
    });

    res.status(201).json(board);

  } catch (error) {
    res.status(500).json({ message: 'Error creating board' });
  }
};

// Get a board by ID
export const getBoardById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {

    const board = await prisma.board.findUnique({
      where: { 
        id: parseInt(id) 
      },
      include: { 
        cards: { 
          include: { 
            labels: true,
            tasks: true 
          } 
        }
      },
    });

    if (!board) return res.status(404).json({ message: 'Board not found' });
    res.json(board);

  } catch (error) {

    res.status(500).json({ message: 'Error getting board' });
  }
};

// Update a board by ID
export const updateBoardById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;
  
  try {
    const updatedBoard = await prisma.board.update({
      where: { 
        id: parseInt(id) 
      },
      data: { 
        title 
      },
      include: { 
        cards: { 
          include: { 
            labels: true, 
            tasks: true 
          } 
        } 
      },
    });

    res.status(200).json(updatedBoard);
  } catch (error) {
    res.status(500).json({ message: 'Error updating board' });
  }
};

// Delete a board by ID
export const deleteBoardById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {

    const deletedBoard = await prisma.board.delete({
      where: { 
        id: parseInt(id) 
      },
      include: {
        cards: { 
          include: { 
            labels: true, 
            tasks: true 
          } 
        } 
      },
    });

    res.status(200).json(deletedBoard);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting board' });
  }
};