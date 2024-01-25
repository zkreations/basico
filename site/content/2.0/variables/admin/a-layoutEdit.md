---
title: a.layoutEdit
---

Habilita el botón de edición en el **Panel de Diseño de Blogger**. Por defecto puedes dar clic en cualquier parte de un widget para editarlo. Esta variable añade un botón en su lugar.

```xml
<Variable name="a.layoutEdit" description="a.layoutEdit" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value     | Nombre    | Tipo                    | Descripción   
| --------- | ----------| ------------------------| --------------
| `true`    | Verdadero | {{< data boolean >}}    | Habilita el botón "Editar" en Diseño
| `false`   | Falso     | {{< data boolean >}}    | Deshabilita el botón "Editar" en Diseño
{{< /table >}}


## true

Habilita el botón de edición en los módulos de widgets del **Panel de Diseño de Blogger**.

{{< preview "/images/variables/admin/a-layoutEdit-true.png" >}}

## false

El botón no estará disponible y en cambio podrás editar los widgets dando clic en cualquier parte de ellos.

{{< preview "/images/variables/admin/a-layoutEdit-false.png" >}}
