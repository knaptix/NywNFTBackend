const express = require("express");
const router = express.Router();
const { uploadCollectionFields } = require('../middlewares/fileUpload');

const { createCollection, getAllUserCollection, checkUniqueCollectionName, collectionByUserId, getCreatedCollection } = require('../controllers/collection');

router.post('/create', uploadCollectionFields, createCollection);
router.get('/all', getAllUserCollection);
router.post('/checkUniqueName', checkUniqueCollectionName);
router.get('/get/:collectionId', collectionByUserId);
router.get('/getCreatedCollection', getCreatedCollection);



module.exports = router;