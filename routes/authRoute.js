const express = require('express');
const {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logout,
} = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleWare');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);

router.get('/all-users', getAllUsers);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);

router.get('/:id', authMiddleware, isAdmin, getUser);
router.delete('/:id', deleteUser);

router.put('/edit-user', authMiddleware, updateUser);

router.get('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.get('/unblock-user:id', authMiddleware, isAdmin, unBlockUser);

module.exports = router;
