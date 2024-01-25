---
title: p.codeHighlight
---

Habilita la funcionalidad de resaltado de sintaxis en los bloques de código, la cual utiliza la librería [highlight.js](https://highlightjs.org/).

```xml
<Variable name="p.codeHighlight" description="p.codeHighlight" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value        | Nombre        | Tipo                 | Descripción   
| ------------ | ------------- | -------------------- | --------------
| `true`       | Verdadero     | {{< data boolean >}} | Resalta la sintaxis de los bloques de código
| `false`      | Falso         | {{< data boolean >}} | El código se mostrará sin resaltar
{{< /table >}}


## true

El código de todos los bloques de código se mostrará resaltado. Solo se cargará la librería de resaltado de sintaxis **si existe al menos un bloque de código** en la entrada.

{{< preview "/images/variables/posts/p-codeHighlight-true.png" >}}

## false

El código se mostrará sin resaltar.

{{< preview "/images/variables/posts/p-codeHighlight-false.png" >}}