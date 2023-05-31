import express from 'express';
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser
} from './controllers/userController';
import {
  createCard,
  deleteCard,
  getCardById,
  getCards,
  updateCard
} from './controllers/cardController';
import {
  createBoard,
  deleteBoardById,
  getBoardById,
  getBoards,
  updateBoardById
} from './controllers/boardController';
import {
  deleteTasksById,
  getTasksById,
  getTasks,
  updateTaskById,
  createTask
} from './controllers/tasksController';
import {
  createLabel,
  deleteLabelById,
  getLabelById,
  getLabel,
  updateLabelById
} from './controllers/labelController';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/cards', getCards);
router.get('/cards/:id', getCardById);
router.post('/cards', createCard);
router.put('/cards/:id', updateCard);
router.delete('/cards/:id', deleteCard);

router.get('/board', getBoards);
router.get('/board/:id', getBoardById);
router.post('/board', createBoard);
router.put('/board/:id', updateBoardById);
router.delete('/board/:id', deleteBoardById);

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTasksById);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTaskById);
router.delete('/tasks/:id', deleteTasksById);

router.get('/label', getLabel);
router.get('/label/:id', getLabelById);
router.post('/label', createLabel);
router.put('/label/:id', updateLabelById);
router.delete('/label/:id', deleteLabelById);

export default router;
