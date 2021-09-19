require('dotenv').config()

const healthcheck = require('./healthcheck')
const trackBundleMarketPlace = require('./services/bundlemarketplacetracker')

trackBundleMarketPlace()
healthcheck()
