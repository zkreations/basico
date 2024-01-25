---
title: Tipografía
---

Los estilos tipográficos del tema son independientes y fueron escritos para fomentar las buenas prácticas en la redacción de los artículos. Estos estilos están disponibles en entradas y páginas estáticas.

## Saltos de linea

Los saltos de línea con las etiquetas `<br>` están deshabilitados por defecto, solo se interpretarán dentro de etiquetas `<p>`, con el fin de crear una estructura más limpia y consistente en los artículos. 

### Variables CSS

Algunas cualidades gráficas, como el espaciado entre líneas y en linea, y la distancia entre columnas en la galería, pueden ser modificadas con variables CSS. Para ello, agrega el siguiente código CSS modificando los valores a tu gusto: 

```css
.typography {
  --typography-inline-spacer: .5rem;
  --typography-spacing-headings: 1rem;
  --typography-gallery-spacer: 2px;
  --typography-gallery-columns: 14rem;
}
```

### Habilitar etiquetas br

Si por alguna razón necesitas utilizar los saltos de línea tradicionales, puedes habilitarlos con el siguiente código CSS:

```css
.typography { --typography-spacing: 0 }
.typography br { display: initial }
```

## Tipografía

La Tipografía de mis trabajos **es universal** y pueden ser utilizados en cualquiera de mis temas. Tomé la decisión de normalizarlos para facilitar su uso y evitar confusiones. Esto también te permitirá **cambiar de tema sin conservando tus entradas**. Aprende más sobre los shortcodes en la página que realicé para ellos: 

{{< pagelink title="Tipografía universal" name="Códigos para insertar en articulos" href="https://www.zkreations.com/p/typography.html" >}}