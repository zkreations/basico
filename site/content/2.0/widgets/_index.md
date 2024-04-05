---
title: Widgets
weight: 4
icon: cube
---

Los widgets tienen características especiales y se relacionan con la plantilla **según su ubicación**. En esta sección de la documentación, aprenderás más sobre ellos.


## Common Widgets

Los widgets comunes son aquellos que se pueden utilizar en cualquier ubicación de la plantilla y se agregan en la pestaña **Diseño** de tu panel de administración.

## Superior Widgets

Los widgets superiores se obtienen de widgets comunes, reemplazando el título por un dato tipo {{< data object >}} literal de Blogger como se muestra a continuación:

```javascript
{ title: "Prueba" }
```

## Mutable Widgets

Los widgets mutables se obtienen de widgets comunes al ubicarlos en secciones específicas de la plantilla, en donde cambian su estructura y/o funcionalidad.
