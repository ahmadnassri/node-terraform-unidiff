#!/usr/bin/env node
const unidiff = require('.')

process.on('uncaughtException', errorHandler)

function errorHandler ({ message }) {
  console.error(message)
  process.exit(1)
}

const file = process.argv[2]

if (!file) {
  throw new Error('a terraform plan is required')
}

// attempt to load plan file
const plan = require(file)

// process file
const patches = unidiff(plan)

// display output
console.log(patches.join('\n\n'))
