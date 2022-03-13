const express = require('express')
const router = express.Router()

const todoCtrl = require('../controllers/todos')

router.get('/',todoCtrl.list)
router.get('/:id',todoCtrl.getOneItem)
router.post('/',todoCtrl.postItem)
router.patch('/:id',todoCtrl.patchItem)
router.patch('/toggleDone/:id',todoCtrl.toggleDoneItem)
router.delete('/:id',todoCtrl.deleteItem)

module.exports = router;