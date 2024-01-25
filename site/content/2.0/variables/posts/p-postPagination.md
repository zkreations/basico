---
title: p.postPagination
---

Muestra la paginación en las entradas individuales del blog.

```xml
<Variable name="p.postPagination" description="p.postPagination" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value        | Nombre        | Tipo                 | Descripción   
| ------------ | ------------- | -------------------- | --------------
| `true`       | Verdadero     | {{< data boolean >}} | Muestra la paginación en las entradas
| `false`      | Falso         | {{< data boolean >}} | La paginación no se mostrará
{{< /table >}}


## true

La paginación se mostrará en las entradas individuales del blog, lo que permite a los usuarios **navegar entre los artículos** del blog.

{{< preview "/images/variables/posts/p-postPagination-true.png" >}}

## false

El botón no se mostrará en ningún bloque de código.
