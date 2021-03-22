const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const salt = bcrypt.genSalt(10);
const hashedPassword= bcrypt.hash('vjv', salt);
console.log(hashedPassword);