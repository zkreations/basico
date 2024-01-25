---
title: f.pageSidebar
---

Habilita un sidebar exclusivo para las páginas estáticas del sitio.

```xml
<Variable name="f.pageSidebar" description="f.pageSidebar" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true`         | Verdadero | {{< data boolean >}}    | Habilita el sidebar exclusivo de páginas
| `false`        | Falso     | {{< data boolean >}}    | Deshabilita el sidebar exclusivo de páginas
{{< /table >}}


## true

La barra lateral **exclusiva de páginas estáticas** estará disponible en la pestaña **Diseño** de tu panel de administración de Blogger.

{{< preview "/images/variables/functions/f-pageSidebar-true.png" >}}

## false

La barra lateral **exclusiva de páginas** no estará disponible en el blog.