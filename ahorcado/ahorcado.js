/*El ahorcado es un juego para dos o mas jugadores. Un jugador piensa en una palabra, frase u oración y el otro trata de adivinar según lo que
sugiere por letras o dentro de un cierto número de oportunidades.

En este ejercicio haremos una versión de un único jugador. De forma que tendría que adivinar la palabra que se ha elegido de forma aleatoria de un
array inicial. Para conseguir adivinarla dispondrá de 5 intentos.(cad intento mostrara una imagen)

Además, dispondra de una zona donde clicar las diferentes letras(o que las introduzca), una lista con las letras fallidas, la palabra con los
huecos y letras adivinadas, y un botón de ayuda que dará la letra más repetida en la palabra(aunque esta resta dos intentos). Por otro lado el
usuario podrá resetear la partida y almacenará una cookie con si ha ganado o no. Y será notificado mediante un mensaje si ha ganado o ha perdido.

Funciones que debe cumplir el programa:
- Deberas rellenar un array con 10 palabras que el usuario inserte por teclado.
- Se seleccionará de forma aleatoria una de dichas palabras y tendrás que pintar en la página web de la forma en la que representar las letras.
- Contador de intentos restantes; partimos con cinco intentos para adivinarlos. Se debe mostrar el contador de intentos restantes y además se os
proporciona en la tarea imágenes para representar el ahorcado.
- Zona donde se pueda hacer clic, para seleccionar dicha letra( div para cada letra).
- Si la letra seleccionada la tiene la palabra, se mostrará en la palabra oculta. Si no se le resta el intento y se inserta en la lista de fallidas
- Debe hacer un boton de AYUDA que con el doble clic nos dará como pista la letra más repetida de la palabra, aunque restará dos intentos.
- Lista de letras fallidas, mostradas en la página web.
- Debe haber un botón para COMPROBAR palabra, el cuál va a tomar la palabra introducida por el usuario en campo y si es correcta el jugador
ha ganado finalizando el juego, y si es incorrecta pero tiene intentos puede seguir jugando.
- Si el usuario pulsa "f" el juego se reinicia, seleccionando otra palabra nueva.
- Si el jugador gana o pierde debes dejarlo en la web con un mensaje de enhorabuena o de ánimo para la siguiente.
- Crea una cookie que expire a los 8 minutos con si el usuario ha ganado o perdido*/
