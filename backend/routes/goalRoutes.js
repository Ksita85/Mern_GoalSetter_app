const express = require('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController'); 
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getGoals).post(protect, setGoal); //this is a short way to do
// router.get('/', getGoals);
// router.post('/', setGoal);

router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;