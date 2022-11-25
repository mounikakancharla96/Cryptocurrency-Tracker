import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {currencyName, currencyLogo, euroValue, usdValue} = currencyItem

  return (
    <li className="sub-container">
      <div className="img-name">
        <img src={currencyLogo} alt={currencyName} className="currency-img" />
        <p className="sub">{currencyName}</p>
      </div>
      <div className="sub-container">
        <p className="sub">{usdValue}</p>
        <p className="sub">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
