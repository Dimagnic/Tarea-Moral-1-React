const Technologies = () => {
  const sayHi = () => {
    alert('Esto es una Alerta')
    console.log('Tarjeta Personal de Nicolas Gontaro')
  }
  return (
    <div className='card' style={{ backgroundColor: "yellow" }}>

      <h1 >Mis conocimientos</h1>
      <ul>
        <li>Javascript</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>

      <button onClick={sayHi}>Say hi</button>
    </div>
  )
}

export default Technologies