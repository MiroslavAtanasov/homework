import './App.css'
import React, { useState, useEffect } from 'react'
import BikeRentingAlgorithm from './utils/bikesRentingAlgorithm'
import formatDate from './utils/formatDate'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Table from './Table'

function App() {
  const [from, setFrom] = useState(new Date())
  const [to, setTo] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const [price, setPrice] = useState()
  const [displayPeriods, setDisplayPeriods] = useState([])
  const [update, setUpdate] = useState()
  const [total, setTotal] = useState()

  const savePeriods = (e) => {
    e.preventDefault()
    if (price && from && to && !isNaN(price)) {
      const data = { price, from: formatDate(from), to: formatDate(to), added: formatDate(new Date()) }

      let periods = JSON.parse(localStorage.getItem("period") || "[]")
      periods.push(data)
      localStorage.setItem("period", JSON.stringify(periods))
    }
    setPrice('')
    setUpdate(!update)
  }

  const totalPrice = (e) => {
    e.preventDefault()
    const defaultPrice = 5

    if (startDate && endDate) {
      setTotal(BikeRentingAlgorithm(startDate, endDate, defaultPrice, displayPeriods))
    }
  }

  useEffect(() => {
    const period = localStorage.getItem("period")
    setDisplayPeriods(JSON.parse(period))
  }, [update])

  return (
    <div className="App">
      <h1>Bike renting</h1>
      <form className="periods">
        <input placeholder="price" type="text" value={price || ''} onChange={e => setPrice(e.target.value)} ></input>
        <DatePicker selected={from} onChange={(date) => setFrom(date)} />
        <DatePicker selected={to} onChange={(date) => setTo(date)} />
        <button onClick={savePeriods}>Add period</button>
      </form>
      <Table displayPeriods={displayPeriods} />
      <form className="total">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        <button onClick={totalPrice}>calculate total price</button>
      </form>
      <div className="price">Total price: {total}</div>
    </div >
  )
}

export default App
