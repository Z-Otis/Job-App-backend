const express = require('express')
const {createJob, getJobs} = require('../controllers/jobController')

const router = express.Router();

router.get('/', getJobs)

 router.post('/', createJob)
                            
            

module.exports = router;