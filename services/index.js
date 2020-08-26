const Binance = require('./binance')
const Ftx = require('./ftx')
const Coingecko = require('./coingecko')

module.exports = (priceProvider = 'binance') => {
    switch(priceProvider) {
        case 'binance':
            return Binance
        case 'ftx':
            return Ftx
        case 'coingecko':
            return Coingecko
        default:
            return Binance
    }
}
