---
title: p.related
---

Inserta las **entradas relacionadas** en las entradas individuales del blog. 

```xml
<Variable name="p.related" description="p.related" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value        | Nombre        | Tipo                 | Descripción   
| ------------ | ------------- | -------------------- | --------------
| `true`       | Verdadero     | {{< data boolean >}} | Muestra las entradas relacionadas
| `false`      | Falso         | {{< data boolean >}} | Las entradas relacionadas no se mostrarán
{{< /table >}}


## true

Las entradas relacionadas se mostrarán solo cuando el usuario se desplaza hasta el area designada. Además, se **requiere al menos una etiqueta** en la entrada para la consulta.

{{< preview "/images/variables/posts/p-related-true.png" >}}

## false

El botón no se mostrará en ningún bloque de código.
