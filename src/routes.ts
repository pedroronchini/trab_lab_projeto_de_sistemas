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
  deleteBoard,
  getBoardById,
  getBoard,
  updateBoard
} from './controllers/boardController';

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
router.delete('/users/:id', deleteCard);

router.get('/users', getBoard);
router.get('/users/:id', getBoardById);
router.post('/users', createBoard);
router.put('/users/:id', updateBoard );
router.delete('/users/:id', deleteBoard);

export default router;
