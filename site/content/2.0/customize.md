---
title: Personalizar
icon: palette
weight: 3
---

Este tema esta optimizado para el **Diseñador de plantillas de Blogger**, por lo que puedes **personalizarlo** desde el panel de administración de Blogger. 

## Localización

Para acceder al Diseñador de plantillas de Blogger, debes ir a **Tema > Personalizar**. Todas las opciones de personalización se encuentran en la sección **Avanzado**.


## Esquemas

Puedes personalizar y visualizar los cambios en tiempo real a los distintos esquemas de colores disponibles. Para ello se incluye un botón que al pulsarlo puedes alternar entre los esquemas disponibles.

{{< preview "/images/customize/scheme-selector.png" >}}


## CSS personalizado

Es recomendable usar siempre la opción **Añadir CSS** para agregar código CSS personalizado. De esta manera todos los cambios que realices serán más fácil de localizar y eliminar en caso de que sea necesario.


## Desarrolladores

Las opciones de personalización de colores también están disponibles como clases y variables CSS. La siguiente tabla muestra todas las opciones disponibles. Las variables de color son relativas al **esquema de color actual**.

{{< table >}}
| Clase                    | Variable CSS               | Descripcion  |
| ------------------------ | -------------------------- | ------------ |
| `.primary`               | `--primary`                | Color primario |
| `.secondary`             | `--secondary`              | Color secundario |
| `.color-title`           | `--color-title`            | Color de títulos |
| `.color-text`            | `--color-text`             | Color de texto |
| `.color-subtle`          | `--color-subtle`           | Color de texto sutil |
| `.color-border`          | `--color-border`           | Color de bordes |
| `.color-header-title`    | `--color-header-title`     | Color de títulos de encabezado |
| `.color-header-subtitle` | `--color-header-subtitle`  | Color de subtítulos de encabezado |
| `.font-title-family`     | `--font-title-family`      | Fuente de títulos |
| `.font-text-family`      | `--font-text-family`       | Fuente de texto |
| `.body-background-color` | `--body-background-color`  | Color de fondo del cuerpo |
| `.bg-inset`              | `--bg-inset`               | Color de fondo de inserción |
| `.bg-subtle`             | `--bg-subtle`              | Color de fondo sutil |
| `.bg-template`           | `--bg-template`            | Color de fondo de plantilla |
{{< /table >}}


## Meteor Icons

Este tema puede usar todos los iconos de [Meteor Icons](https://meteoricons.com/) en su formato HTML. Para ello, puedes copiar el código HTML de cualquier icono y usarlo en donde lo necesites:

```html
<i data-i="adobe"></i>
```

Este método se mantiene actualizado con la última versión de Meteor Icons automáticamente, por lo tanto siempre tendrás acceso a los últimos iconos agregados.
