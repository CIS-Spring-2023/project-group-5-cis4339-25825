const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { orgs } = require('../models/models')

// GET single service by ID

// GET services based on search query
// Ex: '...?name=Food&searchBy=name'

// POST new service
// PUT update service
// PUT add existing service to org
// PUT remove existing service from org
// hard DELETE services by ID, as per project specifications

module.exports = router
