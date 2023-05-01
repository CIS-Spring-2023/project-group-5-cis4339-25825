/* eslint-disable prettier/prettier */
const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { orgs } = require('../models/models')
/////////// APIs for 'Add Service' page /////////////////
//All CRUD ops for services

// GET service by ID
router.get('/getservice/:id', async (req, res) => {
    try {
      const service = await service.findById(req.params.id)
      res.json(service)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

// POST create new service
router.post('/createservice/', async (req, res) => {
    const service = new service({
      name: req.body.name,
      description: req.body.description,
      status: req.body.status
    })
    try {
      const newService = await service.save()
      res.status(201).json(newService)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

// PUT update existing service
router.put('/updateservice/:id', async (req, res) => {
    try {
      const service = await service.findById(req.params.id)
      if (req.body.name) {
        service.name = req.body.name
      }
      if (req.body.description) {
        service.description = req.body.description
      }
      if (req.body.status) {
        service.status = req.body.status
      }
      const updatedService = await service.save()
      res.json(updatedService)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

// DELETE existing service
router.delete('/deleteservice/:id', async (req, res) => {
    try {
      const service = await service.findById(req.params.id)
      await service.remove()
      res.json({ message: 'Service has been deleted' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

////////// APIs for 'find Service' page /////////////////
// GET services based on search query
router.get('/search/', (req, res, next) => {
    const dbQuery = { org: org }
    switch (req.query.searchBy) {
      case 'name':
        // match event name, no anchor
        dbQuery.name = { $regex: `${req.query.name}`, $options: 'i' }
        break
      case 'date':
        dbQuery.date = req.query.eventDate
        break
      default:
        return res.status(400).send('invalid searchBy')
    }
    events.find(dbQuery, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

//
module.exports = router
