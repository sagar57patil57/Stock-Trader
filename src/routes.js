import Stocks from './components/stocks/Stocks'
import Portfolio from './components/portfolio/Portfolio'
import Home from './components/Home'

export const routes = [
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
    { path: '/', component: Home }
]