---
title: c.uiToggle
---

Habilita el botón que permite a los usuarios cambiar y guardar la paleta de colores predeterminada del tema.

```xml
<Variable name="c.uiToggle" description="c.uiToggle" type="string" value="light"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value        | Nombre        | Tipo                 | Descripción   
| ------------ | ------------- | -------------------- | --------------
| `true`       | Verdadero     | {{< data boolean >}} | Muestra el botón para cambiar la paleta de colores
| `false`      | Falso         | {{< data boolean >}} | Deshabilita el botón para cambiar la paleta de colores
{{< /table >}}


## true

El botón que permite a los usuarios cambiar la paleta de colores será visible.

{{< preview "/images/variables/general/c-uiToggle-true.png" >}}

## false

El botón para cambiar la paleta de colores no será visible.
