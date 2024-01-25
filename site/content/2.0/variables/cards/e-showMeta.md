---
title: e.showMeta
---

Muestra los datos de la entrada , como la fecha de publicación, el autor, las etiquetas y los comentarios. También muestra el [botón de editar la entrada]({{< ref "a-editShortcut.md" >}}) si está habilitado.

```xml
<Variable name="e.showMeta" description="e.showMeta" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value     | Nombre     | Tipo                  | Descripción   
| --------- | -----------| --------------------- | --------------
| `true`    | Verdadero  | {{< data boolean >}}  | Muestra los datos de la entrada
| `false`   | Falso      | {{< data boolean >}}  | Los datos de la entrada no se mostrarán
{{< /table >}}

## true

Los datos de la entrada se mostrarán en la página de inicio.

## false

Los datos de la entrada no se mostrarán.
