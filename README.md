# Blackjack - Juego con JavaScript Actualizado

Este proyecto consiste en un juego básico de **Blackjack** desarrollado con **HTML, CSS y JavaScript**.  
El objetivo principal del proyecto es practicar la manipulación del DOM, eventos, funciones, arreglos y organización de código utilizando el patrón módulo en JavaScript.

## Descripción del proyecto

El juego permite al usuario jugar una partida sencilla de Blackjack contra la computadora.  
El jugador puede pedir cartas, detenerse y comenzar una nueva partida. La computadora juega automáticamente después de que el jugador se detiene o supera los 21 puntos.

## Funcionalidades

- Iniciar una nueva partida.
- Pedir cartas para el jugador.
- Detener el turno del jugador.
- Turno automático de la computadora.
- Cálculo automático del valor de las cartas.
- Validación del ganador.
- Reinicio de puntos y cartas en pantalla.
- Uso de imágenes para representar las cartas.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 4
- Underscore.js

## Estructura del proyecto

```txt
02-blackjack/
│
├── index.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   └── cartas/
│       ├── 2C.png
│       ├── 2D.png
│       ├── 2H.png
│       ├── 2S.png
│       └── ...
│
└── js/
    ├── underscore-min.js
    └── juego.js