---
title: e.snippetLength
---

Cantidad máxima de caracteres para los resúmenes de entradas.

```xml
<Variable name="e.snippetLength" description="e.snippetLength" type="string" value="360"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `70`.

{{< table >}}
| Value          | Nombre              | Tipo                 | Descripción
| -------------- | ------------------- | -------------------- | --------------
| `50-1000`      | Cantidad de dígitos | {{< data number >}}  | Establece la cantidad máxima de caracteres
{{< /table >}}


## 50-1000

La cantidad de dígitos ingresada limitará la salida de caracteres que se extrae en el resumen del articulo. El valor mínimo aceptable es `50` y el máximo `1000`, cualquier valor superior o inferior a los limites serán ignorados.