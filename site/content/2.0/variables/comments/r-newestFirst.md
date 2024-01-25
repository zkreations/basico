---
title: r.newestFirst
---

Establece por defecto el orden de los comentarios desde el más reciente al más antiguo.

```xml
<Variable name="r.newestFirst" description="r.newestFirst" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true`         | Verdadero | {{< data boolean >}}    | Ordena comentarios del **más nuevo** al más antiguo
| `false`        | Falso     | {{< data boolean >}}    | Ordena comentarios del **más antiguo** al más nuevo
{{< /table >}}


## true

Los comentarios y las respuestas de los comentarios se ordenarán desde el **más nuevo** al más antiguo.

## false

Los comentarios y las respuestas a los mismos se ordenarán desde el **más antiguo** al más reciente.

