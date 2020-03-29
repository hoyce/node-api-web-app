/* eslint-disable no-unused-vars */

const express = require('express')
const router = express.Router()

// Get the API docs
router.get('/', (req, res) => {
  res.send('API Docs')
})

// Get all units
router.get('/unit', (req, res) => {})

// Get one unit
router.get('/unit/:id', (req, res) => {})

// Create one unit
router.post('/unit/', (req, res) => {})

// Update one unit
router.patch('/unit/:id', (req, res) => {})

// Delete one unit
router.delete('/unit/:id', (req, res) => {})

module.exports = router
