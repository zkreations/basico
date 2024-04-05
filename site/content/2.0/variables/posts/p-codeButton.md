---
title: p.codeButton
---

Muestra el botón para copiar el código de los bloques de código.

```xml
<Variable name="p.codeButton" description="p.codeButton" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value        | Nombre        | Tipo                 | Descripción
| ------------ | ------------- | -------------------- | --------------
| `true`       | Verdadero     | {{< data boolean >}} | Muestra el botón para copiar el código
| `false`      | Falso         | {{< data boolean >}} | El botón no se mostrará
{{< /table >}}


## true

En todos los bloques de código se mostrará el botón que le permite al usuario copiar el código rápidamente.

{{< preview "/images/variables/posts/p-codeButton-true.webp" >}}

## false

El botón no se mostrará en ningún bloque de código.
