import { useState } from "react"
import { useCurrencies } from "../hooks/useCurrencies"
import Currency from "./Currency"

const List = () => {
  const { error, loading, currencies } = useCurrencies()
  const [active, setActive] = useState(null)
  const displayedCurrencies = currencies.slice(0, 500)

  return (
    <div className="container p-4 py-5 px-lg-5">
      {loading ? (
        <p>loading... it can take a while...</p>
      ) : (
        <>
          <p>
            {displayedCurrencies.length} first results / {currencies.length}
          </p>
          {displayedCurrencies.map((el) => {
            return (
              <Currency
                key={el.id}
                currency={el}
                isActive={el.id === active}
                setActive={setActive}
              />
            )
          })}
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  )
}

export default List
