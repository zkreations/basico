---
title: r.formFirst
---

Inserta el formulario de comentarios en la parte superior, antes de mostrar la lista de comentarios.

```xml
<Variable name="r.formFirst" description="r.formFirst" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción
| -------------- | ----------| ------------------------| --------------
| `true`         | Verdadero | {{< data boolean >}}    | Formulario de comentarios al **inicio**
| `false`        | Falso     | {{< data boolean >}}    | Formulario de comentarios al **final**
{{< /table >}}


## true

El formulario de comentarios será insertado **antes de la lista de comentarios**. Si las respuestas están habilitadas, el botón para restaurar las respuestas también se situará primero.


## false

El formulario se insertará después de la lista de comentarios.
