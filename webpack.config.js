/**
 * Copyright 2015-2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/* eslint-env node */
const pkg = require( './package.json' );
const path = require( 'path' );

const webpack = require( 'laxar-infrastructure' ).webpack( {
   devtool: '#source-map',
   context: __dirname,
   rules: [
      {
         test: /\.js$/,
         exclude: path.resolve( __dirname, 'node_modules' ),
         loader: 'babel-loader'
      },
      {
         test: /\.spec.js$/,
         exclude: path.resolve( __dirname, 'node_modules' ),
         loader: 'laxar-mocks/spec-loader'
      }
   ]
} );


module.exports = [
   webpack.library(),
   webpack.browserSpec( [ `./spec/${pkg.name}.spec.js` ] )
];
