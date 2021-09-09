const {Router} = require('express');
const router = Router();
const {calculadora} = require('../User/service/userService');

router.get('/', (req, res) => {
    res.render('index');
});
router.post('/resultado/', async (req, res) => {

    res.render('resultado', {calculadora:calculadora(req.body.operationId, req.body.operationType, req.body.operationNumber)});
});
module.exports = router;