---
title: f.blogOnHome
---

Habilita el Blog en la página de inicio del sitio. No tiene efecto en el resto de las páginas ya que el blog siempre estará disponible obligatoriamente.

```xml
<Variable name="f.blogOnHome" description="f.blogOnHome" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true`         | Verdadero | {{< data boolean >}}    | Muestra el Blog en la página de inicio
| `false`        | Falso     | {{< data boolean >}}    | Oculta el Blog en la página de inicio
{{< /table >}}


## true

El blog **estará disponible** en la página de inicio del sitio y en todos los tipos de páginas.

## false

**No se muestra** el blog en la página de inicio del sitio, pero estará disponible en todos los tipos de páginas.
