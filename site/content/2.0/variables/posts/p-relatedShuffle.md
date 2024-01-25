---
title: p.relatedShuffle
---

El valor ingresado aumenta la cantidad de entradas que se utilizan en la fórmula para obtener los post relacionados. A mayor número, más probable es obtener entradas diferentes y más antiguas.

```xml
<Variable name="p.relatedShuffle" description="p.relatedShuffle" type="string" value="5"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `0`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción
| -------------- | ----------| ------------------------| --------------
| `1-99`         | Nivel     | {{< data number >}}     | Nivel de aleatoriedad
{{< /table >}}

## 1-99

El numero especificado se utiliza en la formula que finalmente obtiene la cantidad de relacionados configurados en la variable [p.relatedCount]({{< ref "p-relatedCount.md" >}}).

{{< hint "warning" >}}
Mientras mayor sea el número **más datos deberán descargarse** en la consulta, lo que puede perjudicar el rendimiento. Si no estás seguro no modifiques el valor por defecto.
{{< /hint >}}