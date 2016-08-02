#!/usr/bin/env node

const meow = require('meow')
const bfcss = require('..')

const cli = meow('=^.^= =^.^=')

const css = bfcss()

process.stdout.write(css)

