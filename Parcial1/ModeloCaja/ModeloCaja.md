
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

dy {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /*  scale the whole thing here  */
  font-size: min(2vmax, 2rem);
  gap: 0 5vmin;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

article {
  background: repeating-linear-gradient(-45deg, hsl(0 0% 70%), hsl(0 0% 70%) 1px, white 1px, white 10px);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px hsl(0 0% 0% / .028),
    0 12.5px 10px hsl(0 0% 0% / .035),
    0 22.3px 17.9px hsl(0 0% 0% / .042),
    0 41.8px 33.4px hsl(0 0% 0% / .05),
    0 100px 80px hsl(0 0% 0% / .07);
  position: relative;
}

article::before {
  content: "Margin Box";
  position: absolute;
  top: 1ex;
  left: 50%;
  transform: translateX(-50%);
  height: 3ex;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .5em;
  background: white;
  padding: .25rem 1rem;
  border-radius: 3rem;
}

article::after {
  content: "Outline & Box Shadow";
  position: absolute;
  top: 6ex;
  left: 0;
  width: 100%;
  height: 6ex;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .5em;
  color: white;
}

figure {
  width: 25vmin;
  height: 25vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6ex;
  border: 3ex solid black;
  outline: 3ex solid hsl(270 50% 40% / 80%);
	padding: 3ex;
	background:
		linear-gradient(white, white) content-box,
		linear-gradient(hotpink, hotpink) padding-box;
  position: relative;
}

figure > .scrollbar {
  background: hsl(0 0% 0% / 25%);
  position: absolute;
  visibility: hidden;
}

figure > .scrollbar.vertical {
  width: 1ex;
  height: 100%;
  top: 0;
  right: 0;
}

figure > .scrollbar.horizontal {
  height: 1ex;
  width: 100%;
  bottom: 0;
  left: 0;
}

figure[scrollbars="true"] .scrollbar {
  visibility: visible;
}

figure[inline-scrollbars="true"] {
  padding: 3ex 4ex 4ex 3ex;
}

figure::after {
  content: "Padding Box";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6ex;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .5em;
}

figure::before {
  content: "Border Box";
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  width: 100%;
  height: 6ex;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .5em;
}

form {
  display: grid;
  grid-template-columns: 1fr auto;
  place-items: center;
  justify-items: flex-end;
  gap: 1rem;
  margin-block-start: 3rem;
}

@media (height <= 640px) {
  form {
    grid-auto-flow: column;
    gap: .25rem;
  }
  
  form > label:last-of-type {
    margin-inline-start: 2rem;
  }
}


