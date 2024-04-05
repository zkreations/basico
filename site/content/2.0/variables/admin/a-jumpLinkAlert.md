---
title: a.jumpLinkAlert
---

Muestra un aviso en las entradas que no tienen el salto de línea o la etiqueta `<!--more -->` especificada.

```xml
<Variable name="a.jumpLinkAlert" description="a.jumpLinkAlert" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value     | Nombre    | Tipo                    | Descripción
| --------- | ----------| ------------------------| --------------
| `true`    | Verdadero | {{< data boolean >}}    | Muestra el aviso si no hay un salto de línea.
| `false`   | Falso     | {{< data boolean >}}    | Deshabilita el aviso si no hay un salto de línea.
{{< /table >}}


## true

La alerta aparecerá en todos los artículos en donde el salto de línea o etiqueta `<!--more -->` este ausente. Requiere iniciar sesión en Blogger ya que solo es visible para administradores.

{{< preview "/images/variables/admin/a-jumpLinkAlert-true.webp" >}}

## false

La alerta no se mostrará en los artículos.

