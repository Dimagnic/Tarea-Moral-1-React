const AboutMe = () => {
    const misDatos = {
        name: "Nicolas",
        movie: "Mad max fury road",
        music: "Rock",
    }
    const sayHi = () => {
        alert('Esto es una Alerta')
        console.log('Tarjeta Personal de Nicolas Gontaro')
    }
    return (
        <div className='card' style={{ backgroundColor: "green" }}>

            <h1 >Sobre mi...</h1>
            <ul>
                <li>{misDatos.name}</li>
                <li>{misDatos.movie}</li>
                <li>{misDatos.music}</li>
            </ul>
            <button onClick={sayHi}>sayHi</button>

        </div>

    );
};

export default AboutMe;