
//Patron modulo, encapsula todo el codigo dentro de una funcion anonima autoejecutable, 
// para evitar que las variables y funciones se mezclen con otras partes del codigo, 
// y para que el codigo sea mas organizado y facil de mantener

// Patrón módulo
const miModulo = (() => {

    'use strict';

    let deck = [];

    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias HTML
    const btnPedir = document.querySelector('#btnPedir');
    const btnNuevo = document.querySelector('#btnNuevo');
    const btnDetener = document.querySelector('#btnDetener');

    const divCartasJugadores = document.querySelectorAll('.divCartas');
    const puntosHTML = document.querySelectorAll('small');

    // Crear deck
    const crearDeck = () => {

        deck = [];

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }

        return _.shuffle(deck);
    };

    // Inicializar juego
    const inicializarJuego = (numJugadores = 2) => {

        deck = crearDeck();

        puntosJugadores = [];

        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);

        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    };

    // Pedir carta
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    };

    // Valor de la carta
    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor))
            ? (valor === 'A') ? 11 : 10
            : valor * 1;
    };

    // Acumular puntos
    const acumularPuntos = (carta, turno) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    };

    // Crear carta en pantalla
    const crearCarta = (carta, turno) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');

        divCartasJugadores[turno].append(imgCarta);
    };

    // Determinar ganador
    const determinarGanador = () => {

        const [puntosJugador, puntosComputadora] = puntosJugadores;

        setTimeout(() => {

            if (puntosComputadora === puntosJugador) {
                alert('Empate');
            } else if (puntosJugador > 21) {
                alert('La computadora gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador gana');
            } else if (puntosJugador > puntosComputadora) {
                alert('Jugador gana');
            } else {
                alert('La computadora gana');
            }

        }, 100);
    };

    // Turno computadora
    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();

            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();
    };

    // Evento: pedir carta
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();

        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    // Evento: detener
    btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0]);
    });

    // Evento: nuevo juego
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        "nuevo juego": inicializarJuego
    };

})();