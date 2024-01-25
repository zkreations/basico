---
title: e.snippetLines
---

Cantidad máxima de líneas de texto para los resúmenes de artículos.

```xml
<Variable name="e.snippetLines" description="e.snippetLines" type="string" value="4"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value         | Nombre             | Tipo                | Descripción
| ------------- | -------------------| --------------------| --------------
| `0-999`       | Cantidad de líneas | {{< data number >}} | Cantidad máxima de líneas de texto.
{{< /table >}}

## 0-999

La cantidad de **lineas de texto máximas** para los resúmenes de artículos. Si el valor ingresado es `0` no se establecerá ningún límite.