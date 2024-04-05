---
title: f.postSidebar
---

Habilita un sidebar exclusivo para las entradas del sitio.

```xml
<Variable name="f.postSidebar" description="f.postSidebar" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción
| -------------- | ----------| ------------------------| --------------
| `true`         | Verdadero | {{< data boolean >}}    | Habilita el sidebar exclusivo de entradas
| `false`        | Falso     | {{< data boolean >}}    | Deshabilita el sidebar exclusivo de entradas
{{< /table >}}


## true

La barra lateral **exclusiva de entradas** estará disponible en la pestaña **Diseño** de tu panel de administración de Blogger.

{{< preview "/images/variables/functions/f-postSidebar-true.webp" >}}

## false

La barra lateral **exclusiva de entradas** no estará disponible en el blog.
