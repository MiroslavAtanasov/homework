import React from 'react'
import './App.css'

function Table({ displayPeriods }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>price</th>
                    <th>from</th>
                    <th>to</th>
                </tr>
            </thead>
            <tbody>
                {displayPeriods?.map((e, i) => {
                    return <tr key={i}>
                        <td> {e.price}</td>
                        <td> {e.from}</td>
                        <td> {e.to}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Table
