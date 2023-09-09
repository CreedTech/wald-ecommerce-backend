const express = require('express');
const {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} = require('../controller/userCtrl');
const { authMiddleware } = require('../middlewares/authMiddleWare');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);

router.get('/all-users', getAllUsers);
router.get('/:id', authMiddleware, getUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
