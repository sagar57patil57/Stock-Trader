const state = {
    funds: 10000,   //  current funds fetched from db
    stocks: []      //  id,quantity of stocks which are bought
}

const mutations = {
    'BUY_STOCKS' (state, order) {
        //  returns refer of data found
        let record = state.stocks.find(element => order.stockId == element.id)
        if(record) {    //  if already present, just update
            record.quantity += order.quantity
        }
        else {          //  add to array stocks
            state.stocks.push({
                id: order.stockId,
                quantity: order.quantity
            })
        }
        state.funds -= order.quantity * order.price
    },

    'SELL_STOCKS' (state, order) {
        let record = state.stocks.find(element => order.stockId == element.id)
        if(record.quantity > order.quantity) {  //  if quant of record is greater then input
            record.quantity -= order.quantity
        }
        else {  //  else delete record from array stocks
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += order.quantity * order.price
    }
}

const getters = {
    funds: (state) => {
        return state.funds
    },

    stockPortfolio: (state, getters) => {   //  arg getters is global getters
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id)
            return {
                id: stock.id,
                name: record.name,
                price: record.price,
                quantity: stock.quantity
            }
        })
    }
}

const actions = {

    sellStocks: ({ commit }, order) => {
        commit('SELL_STOCKS', order)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}