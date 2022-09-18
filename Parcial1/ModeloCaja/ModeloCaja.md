
# Modelo Caja en Css

>"El modelo de caja CSS es un módulo CSS que define cajas rectangulares, incluyendo sus rellenos y márgenes, que son generadas para los elementos y que se disponen de acuerdo al modelo de formato visual"

Una cosa realmente importante para recordar al escribir CSS, o al trabajar en la web en general, es que todo lo que muestra CSS es una caja. Ya sea que uses **[border-radius]** en una caja para que se parezca a un círculo, o incluso solo un texto: la clave a recordar es que todo es una caja.

Las cajas se componen de áreas de modelo de caja distintas que realizan un trabajo específico.
**Esta compuesta por:**
- Margin (Márgenes). 
- Border (Bordes). 
- Padding (Relleno). 
- Content (Contenido). 

### A continuacion se dara un concepto de cada una de estas:

#### 1. Content / Contenido

 Es la área en la que reside el contenido.Este contenido puede controlar el tamaño de su elemento principal, por lo que suele ser el área de tamaño más variable.

#### 2. Relleno / Padding

  Este rodea la caja de contenido y es el espacio creado por la propiedad de **[padding].** Debido a que el padding está dentro de la caja, el fondo de la caja será visible en el espacio que crea. Si nuestra caja tiene reglas de desbordamiento establecidas, como **[overflow: auto] o [overflow: scroll]**, las barras de desplazamiento ocuparán este espacio también.

#### 3. Border / Bordes
La caja de borde son los límites de su caja y el filo del borde es el límite de lo que puedes ver visualmente. La propiedad de **[border]** se usa para enmarcar visualmente un elemento.

#### 4. Margin / Margen

 Es el espacio alrededor de tu caja, definida por la regla de **[margin]**. Propiedades como el **[outline]** y **[box-shadow]** ocupan este espacio porque están pintadas por encima de los elementos, por lo que no afectan el tamaño de nuestra caja. Puedes tener un **[outline-width]** de **200px** en nuestra caja y todo lo que está dentro e incluido la caja de borde sería exactamente del mismo tamaño.
 ##### Ejemplo basico de Una Caja
    p {
    width: 100px;
    height: 50px;
    padding: 20px;
    border: 1px solid;
    }


## Ejemplo Visual

![ejemplo1.1](/Parcial1/ModeloCaja/EjMDC.png)

#### Para Comprender esta analogia :
- La caja de contenido es la obra de arte.
- La caja de padding es el blanco mate, entre el marco y la obra de arte.
- La caja de borde es el marco, que proporciona un borde literal para la obra de arte.
- La caja de margen es el espacio entre cada cuadro.
- La sombra ocupa el mismo espacio que la caja de margen.

