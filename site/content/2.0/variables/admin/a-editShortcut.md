---
title: a.editShortcut
---

Habilita el botón para editar rápidamente una entrada. El botón solo es visible para los administradores del blog.

```xml
<Variable name="a.editShortcut" description="a.editShortcut" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value     | Nombre    | Tipo                    | Descripción   
| --------- | ----------| ------------------------| --------------
| `true`    | Verdadero | {{< data boolean >}}    | Habilita el botón "Editar" en las entradas
| `false`   | Falso     | {{< data boolean >}}    | Deshabilita el botón "Editar" en las entradas
{{< /table >}}


## true

Habilita el botón para editar rápidamente una entrada.

{{< preview "/images/variables/admin/a-editShortcut-true.png" >}}

## false

Desactiva el botón para editar rápidamente una entrada.


{{< preview "/images/variables/admin/a-editShortcut-false.png" >}}

