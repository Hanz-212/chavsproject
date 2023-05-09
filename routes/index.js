var express = require('express');
var router = express.Router();

const {PrismaClient} = require("@prisma/client")
var prisma = new PrismaClient

/* GET home page. */
router.get('/', async function(req, res, next) {
var students = await prisma.Student_Info.findMany()

  res.render('index', { title: 'Express', students: students });
});

module.exports = router;
