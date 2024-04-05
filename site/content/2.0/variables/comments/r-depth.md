---
title: r.depth
---

Establece el nivel de profundidad en las respuestas de los comentarios.

```xml
<Variable name="r.depth" description="r.depth" type="string" value="2"/>
```

## Valores disponibles

Si el valor ingresado no es válido o el número ingresado supera la cantidad permitida, el valor por defecto será `2`.

{{< table >}}
| Value  | Nombre             | Tipo                    | Descripción
| -------| ------------------ | ------------------------| --------------
| `0-3`  | Numero del 0 al 3  | {{< data number >}}     | Nivel de profundidad de las respuestas
{{< /table >}}


## 0-3

Establecer el número `0` deshabilitará la capacidad de responder comentarios. Si existían respuestas todas **serán movidas al hilo principal**, sin embargo, no ocurrirá lo mismo al cambiar entre los niveles `1` al `3`, en donde los comentarios de mayor profundidad se perderán. Un ejemplo, con **2 niveles** de profundidad:

{{< preview "/images/variables/comments/r-depth.webp" >}}
