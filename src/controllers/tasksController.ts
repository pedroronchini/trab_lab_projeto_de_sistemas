import { Request, Response } from 'express';

import prisma from '../config';

// Get all boards
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error getting tasks' });
  }
};

// Create a new board
export const createTask = async (req: Request, res: Response) => {
  const {
    completed,
    text,
    cardId
  } = req.body;

  try {
    const task = await prisma.task.create({
      data: {
        completed,
        text,
        card: {
          connect: {
            id: Number(cardId)
          }
        }
      },
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
};

// Get a Card by ID
export const getTasksById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const tasks = await prisma.task.findUnique({
      where: { id: Number(id) }
    });

    if (!tasks) {
      throw Error('tasks not found');
    }

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: 'Erro' });
  }
};

// Update a Card by ID
export const updateTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    completed,
    text,
    cardId
  } = req.body;

  try {

    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        completed,
        text,
        card: {
          connect: {
            id: Number(cardId)
          }
        }
      },
    });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' });
  }
};

// Delete a Card by ID
export const deleteTasksById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const task = await prisma.task.delete({
      where: {
        id: Number(id)
      },
    });

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting tasks' });
  }
};