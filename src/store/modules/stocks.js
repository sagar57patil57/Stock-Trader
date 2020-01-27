import stockData from '../../data/data'

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks
    },

    /*'BUY_STOCKS' (state, order) {
        state.stocks = state.stocks
    },*/

    'RAND_STOCKS' (state) {
        state.stocks = state.stocks
    }
}

const getters = {
    stocks: (state) => {
        return state.stocks
    }
}

const actions = {
    initStocks: ({ commit }) => {   //  init stocks state
        commit('SET_STOCKS', stockData)
    },

    buyStocks: ({ commit }, order) => {
        commit('BUY_STOCKS', order)
    },

    randomizeStocks: ({ commit }) => {
        commit('RAND_STOCKS')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}