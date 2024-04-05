---
title: p.relatedCount
---

Establece la cantidad de **entradas relacionadas** que se mostrarán en los artículos.

```xml
<Variable name="p.relatedCount" description="p.relatedCount" type="string" value="5"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `3`.

{{< table >}}
| Value   | Nombre             | Tipo                 | Descripción
| ------- | ------------------ | -------------------- | --------------
| `1-12`  | Cantidad de posts  | {{< data number >}}  | Cantidad de elementos relacionados a mostrar
{{< /table >}}


## 1-12

La cantidad de entradas relacionadas que se mostrarán en las entradas individuales. Por motivos de **rendimiento**, la consulta  solo incluye los elementos configurados más el valor de la variable [p.relatedShuffle]({{< ref "p-relatedShuffle.md" >}}).
