import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      currencyLogo: eachData.currency_logo,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))
    console.log(data)
    console.log(updatedData)
    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state
    return (
      <div className="cryptocurrency-container">
        {isLoading ? (
          <div testid="loader" className="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="image"
            />
            <ul className="lists">
              <li className="header-container">
                <h1 className="header">Coin Type</h1>
                <div className="value-container">
                  <h1 className="header">USD</h1>
                  <h1 className="header">EURO</h1>
                </div>
              </li>
              {currencyData.map(eachCurrency => (
                <CryptocurrencyItem
                  key={eachCurrency.id}
                  currencyItem={eachCurrency}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
