---
title: f.mainReverse
---

Intercambia de lugar el cuerpo del **blog** con el **sidebar**.

```xml
<Variable name="f.mainReverse" description="f.mainReverse" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre     | Tipo                 | Descripción   
| -------------- | ---------- | -------------------- | --------------
| `true`         | Verdadero  | {{< data boolean >}} | Intercambia la posición del blog con el sidebar
| `false`        | Falso      | {{< data boolean >}} | Mantiene la posición del blog y el sidebar
{{< /table >}}


## true

La posición del blog y el sidebar **se intercambian**.

## false

El blog y el sidebar **mantienen su posición** original.