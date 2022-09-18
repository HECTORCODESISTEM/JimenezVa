# Propiedades Flexbox 
![image](/image.png)
Para empezar a utilizar flexbox lo primero que debemos hacer es conocer algunos de los elementos básicos de este nuevo esquema, que son los siguientes:

-Contenedor: Es el elemento padre que tendrá en su interior cada uno de los ítems   flexibles. Observa que al contrario que muchas otras estructuras CSS, por norma general, en Flex establecemos las propiedades al elemento padre.

-Eje principal: Los contenedores flexibles tendrán una orientación principal específica. Por defecto, el eje principal del contenedor flexbox es en horizontal (en fila).
-Eje secundario: De la misma forma, los contenedores flexibles tendrán una orientación secundaria, perpendicular a la principal. Si la principal es en horizontal, la secundaria será en vertical (y viceversa).
-Ítem: Cada uno de los hijos que tendrá el contenedor en su interior.



## Propiedades Flexbox Container (Contenedor Padre)
| Propiedad | Descripcion |
| --------- | ----------- |
| inline-flex     | Establece un contenedor en línea, similar a inline-block (ocupa solo el contenido). |
| align-content   | Modifica el comportamiento de la propiedad flex-wrap. Alinea flex lines |
| align-items     | Alinea verticalmente los flex items cuando los items no ocupan todo el espacio disponible en el eje x |
| justify-content | Alinea horizontalmente los flex items cuando los items no ocupan todo el espacio disponible en el eje y |
| display         | Especifica el tipo de caja usada para un elemento HTML |
| flex-direction  | Especifica la direccion de los flexible items dentro de un flex container |
| flex-flow       | Un atajo para la propieda flex-direction y flex-wrap |
| flex-wrap       | Especifica si los flex items se deben envolver o no, si no hay suficiente en la flex line |
| row             | Establece la dirección del eje principal en horizontal. |
| row-reverse     | Establece la dirección del eje principal en horizontal (invertido). |
| column          | Establece la dirección del eje principal en vertical. |
| column-reverse  | Establece la dirección del eje principal en vertical (invertido). |



## Propiedades Flexbox Items (Contenedores Hijos)
| Propiedad | Descripcion |
| --------- | ----------- |
| align-self  | Especifica el alineamiento para un flex item |
| flex        | Un atajo para flex-grow, flex-shrink y flex-basis |
| flex-basis  | Especifica la longitud inicial del flex item|
| flex-grow   | Número que indica el factor de crecimiento del ítem respecto al resto. |
| flex-start  | Agrupa los ítems al principio del eje principal. |
| flex-end    | Agrupa los ítems al final del eje principal. |
| flex-shrink | Especifica cuanto va a decrecer un flex item relativo al resto de flex items dentro del mismo container |
| order       | Especifica el orden de los flex items dentro del mismo container |
| stretch     | 	Estira los ítems para ocupar de forma equitativa todo el espacio. |