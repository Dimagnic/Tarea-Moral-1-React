const Food = () => {
  const sayHi = () => {
    alert('Esto es una Alerta')
    console.log('Tarjeta Personal de Nicolas Gontaro')
}
  return (
    <div className='card' style={{ backgroundColor: "pink" }}>

      <h1 >Mis comidas favoritas</h1>
      <ul>
        <li>Pollo a la Brasa</li>
        <li>Cebiche</li>
        <li>Papa a la Huancaina</li>
        <li>Seco de Res</li>
      </ul>

      <button onClick={sayHi}>Say hi</button>
    </div>
  )
}

export default Food