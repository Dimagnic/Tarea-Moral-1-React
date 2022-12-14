const Hobbies = () => {
  const sayHi = () => {
    alert('Esto es una Alerta')
    console.log('Tarjeta Personal de Nicolas Gontaro')
  }
  return (
    <div className='card' style={{ backgroundColor: "red" }}>

      <h1 >Nis hobbies</h1>
      <ul>
        <li>Futbol</li>
        <li>Ajedrez</li>
        <li>Running</li>
        <li>Viajar</li>
      </ul>

      <button onClick={sayHi}>Say hi</button>
    </div>
  )
}

export default Hobbies