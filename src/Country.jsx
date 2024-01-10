import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Country = () => {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')
  const [filterApi, setFilterApi] = useState(data)
  const [mode,setMode] = useState('light')
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(api => setData(api))
  }, [])

  function handleInput(e) {
    setInput(e.target.value)
  }

  const filterResult = (myregion) => {
    const result = data.filter(x => (x.region === myregion))
    setFilterApi(result)
  }


  useEffect(() => {
    setFilterApi(data)
  }, [data])



  return (
    <div className='big'>
      <nav>
        <h1>Where in the world ?</h1>
        <button className={`icon ${mode}`} style={{ background: "none" , border:'none' }} onClick={() => {
        mode === 'light' ? setMode('.dark') : setMode('.light')
        mode === 'light' ? localStorage.setItem('mode', 'dark') : localStorage.setItem('mode', 'light')
      }} > {mode === 'light' ? <i class="fa-solid fa-moon" style={{ color: "black", fontSize: "23px" }}></i> : <i class="fa-solid fa-sun" style={{ color: "black", fontSize: "23px" }}></i>}</button>
      </nav>
      <div className="input">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" value={input} onChange={handleInput} placeholder='Search for country ...' />
      </div>

      <div className="all">
        <ul className='regionFilter'>
          <li onClick={() => filterResult('Africa')}>Africa</li>
          <li onClick={() => filterResult('Americas')}>America</li>
          <li onClick={() => filterResult('Asia')}>Asia</li>
          <li onClick={() => filterResult('Europe')}>Europe</li>
          <li onClick={() => filterResult('Oceania')}>Oceania</li>
        </ul>
        <div className='cards'>
          {filterApi

            .filter(x => x.name.common.toLowerCase().includes(input.toLowerCase()))
            .map((x) => <div className='card' key={x.id}>
              <Link to={'/detail/name/' + x.name.common} key={x.name.common}>
                <img width={230} height={100} src={x.flags.png} />
                <p><b>{x.name.common}</b></p>
                <p><b>Population :</b>{x.population}</p>
                <p><b>Region :</b>{x.region}</p>
                <p><b>Capital :</b>{x.capital}</p>
              </Link>
            </div>)}
        </div>
      </div>

    </div>
  )
}

export default Country