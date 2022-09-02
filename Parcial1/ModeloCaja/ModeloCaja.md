
# Modelo Caja en Css
![modelocaja](/Parcial1/ModeloCaja/MDC.jpg)
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

 #### 3. Content / Contenido

#### 4. Margin / Margen

Este es la ultima es la ultima area de la Caja que se puede ver como una separación invisible o transparente que ayuda a separar un elemento de otro. Cuando se define un color o imagen de fondo, este no se propaga a esta sección.



## Ejemplo de codigo


<article dir="ltr">
  <figure id="box_model">
    Content Box
    <span class="vertical scrollbar"></span>
    <span class="horizontal scrollbar"></span>
  </figure>
</article>

<form action="">
  <label for="show_scrollbars">Show scrollbars?</label>
  <input id="show_scrollbars" type="checkbox">
  
  <label for="inline_scrollbars">Inline scrollbars?</label>
  <input id="inline_scrollbars" type="checkbox">
</form>