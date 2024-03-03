---
title: Tipografía
---

La tipografía ahora **es universal** y pueden ser utilizados en cualquiera tema de zkreations. Tomé la decisión de normalizarlos para facilitar su uso y evitar problemas de compatibilidad. Esto también te permite **cambiar de tema conservando tus entradas**:

{{< pagelink title="Tipografía universal" name="Códigos para insertar en articulos" href="https://www.zkreations.com/p/typography.html" >}}

Los estilos tipográficos son independientes y fueron escritos para fomentar las **buenas prácticas** en la redacción de los artículos. Estos estilos están disponibles en entradas y páginas estáticas.

## Saltos de linea

Los saltos de línea con las etiquetas `<br>` están deshabilitados por defecto, solo se interpretarán dentro de etiquetas `<p>`, con el fin de crear una estructura más limpia y consistente en los artículos. 

### Habilitar etiquetas br

Si por alguna razón necesitas utilizar los saltos de línea tradicionales, puedes habilitarlos con el siguiente código CSS:

```css
.typography { --typography-spacing: 0 }
.typography br { display: initial }
```

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

## Meteor Icons

Puede usar todos los iconos de [Meteor Icons](https://meteoricons.com/) en su formato HTML. Tan solo copia el código HTML de cualquier icono y úsalo en donde lo necesites:

```html
<i data-i="adobe"></i>
```

El método HTML se mantiene actualizado con la última versión de Meteor Icons automáticamente, por lo tanto siempre tendrás acceso a los íconos más recientes.
