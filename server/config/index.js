'use strict';

/*
  We use a separate module, Glue, to handle server composition
  It is the indispensable plugin to organize its application in 
  a modular way. This is called a "server composer".
 */
const Glue     = require('glue')
const Manifest = require('./manifest')

/*
  'Option "relativeTo" indicates where our proprietary 
  modules are placed, ie those that are not in node_modules
 */
const composeOptions = {
  relativeTo: __dirname
}


module.exports = Glue.compose.bind(Glue, Manifest.manifest, composeOptions)
