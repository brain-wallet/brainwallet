#!/usr/bin/env node

import brainwallet from '../index.js'

const secret = process.argv[2] || 'a'

// console.log(secret)

const ret = await brainwallet(secret)

console.log(ret)
