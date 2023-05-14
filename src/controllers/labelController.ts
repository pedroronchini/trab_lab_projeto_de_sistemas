import { Request, Response } from 'express';

import prisma from '../config';

// Get all boards
export const getLabel = async (req: Request, res: Response) => {
  try {

    const label = await prisma.label.findMany();

    res.status(200).json(label);
  } catch (error) {
    res.status(500).json({ message: 'Error getting label' });
  }
};

// Create a new board
export const createLabel = async (req: Request, res: Response) => {
  const { 
    color, 
    text, 
    cardId 
  } = req.body;

  try {
    const label = await prisma.label.create({
      data: {
        color,
        text,
        card: { connect: { id: cardId } },
      },
    });

    res.status(201).json(label);
  } catch (error) {
    res.status(500).json({ message: 'Error creating card' });
  }
};

// Get a Card by ID
export const getLabelById = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const label = await prisma.label.findUnique({
      where: { id: Number(id) }
    });

    res.status(200).json(label);
  } catch (error) {
    res.status(404).json({ message: 'Erro' });
  }
};

// Update a Card by ID
export const updateLabelById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { 
    color, 
    text, 
    cardId 
  } = req.body;

  try {
    const label = await prisma.label.update({
      where: { id: Number(id) },
      data: {
        color,
        text,
        card: { connect: { id: cardId } },
      },
    });
    
    res.status(200).json(label);
  } catch (error) {
    res.status(500).json({ message: 'Error updating card' });
  }
};

// Delete a Card by ID
export const deleteLabelById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const label = await prisma.label.delete({
      where: { id: Number(id) },
    });

    res.status(200).json(label);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting board' });
  }
};