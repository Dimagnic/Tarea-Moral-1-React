const FreeTime = () => {
  const sayHi = () => {
    alert('Esto es una Alerta')
    console.log('Tarjeta Personal de Nicolas Gontaro')
  }
  return (
    <div className='card' style={{ backgroundColor: "blue" }}>

      <h1 >Mi tiempo libre</h1>
      <ul>
        <li>Leer</li>
        <li>Estudiar</li>
        <li>Meditar</li>
      </ul>

      <button onClick={sayHi}>Say hi</button>
    </div>
  )
}

export default FreeTime