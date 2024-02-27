const JobApp = require('../models/jobModel')



const createJob = async(req, res) => {
    
    
    const {firstName, middleName, lastName,  emailAddress,  reemailAddress, title, gender, phoneNumber, link} = req.body
    
    try {
    const jobInfo = await JobApp.create({firstName, middleName, lastName,  emailAddress,  reemailAddress, title, gender, phoneNumber, link})
    res.status(200).json({status: "success", mssg: "successfully added"})
}
    
    catch (error) {
    res.status(400).json({error: error.message})
    }
    }

    const getJobs = async(req, res) => {
        try {
            const jobs = await JobApp.find({}).sort({createdAt: -1})
            res.status(200).json(jobs)
        }
        catch (error) {
            res.status(400).json({error: error.message})
            }
       
        }

module.exports = {createJob, getJobs}