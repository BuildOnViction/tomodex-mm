const Binance = require('./binance')
const Ftx = require('./ftx')
const Coingecko = require('./coingecko')

module.exports = (priceProvider = 'binance') => {
    switch(priceProvider) {
        case 'binance':
            return Binance
        case 'ftx':
            return Fxt
        case 'coingecko':
            return Coingecko
        default:
            return Binance
    }
}
