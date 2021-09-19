require('dotenv').config()

const healthcheck = require('../promenade-thumbnail-indexer/healthcheck')
const trackBundleMarketPlace = require('./services/bundlemarketplacetracker')

trackBundleMarketPlace()
healthcheck()
