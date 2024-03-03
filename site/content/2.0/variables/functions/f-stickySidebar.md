---
title: f.stickySidebar
---

Habilita el sidebar pegajoso en el blog.

```xml
<Variable name="f.stickySidebar" description="f.stickySidebar" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value                       | Nombre           | Tipo                         | Descripción   
| --------------------------- | ---------------- | ---------------------------- | --------------
| {{< data "{fixed_mode}" >}} | Modo de fijado   | {{< data "{fixed_mode}" >}}  | Fija el sidebar según el modo ingresado
| `true`                      | Verdadero        | {{< data boolean >}}         | Fija el sidebar globalmente
| `false`                     | Falso            | {{< data boolean >}}         | Deshabilita el sidebar fijo
{{< /table >}}

## fixed_mode

Especifica un modo de fijado, lo que permite fijar el sidebar o uno de sus elementos según sea el caso. **Solo puedes elegir un modo a la vez**, de lo contrario el valor no sera válido y se interpretará como `true`.

### Modos de fijado

{{< table >}}
| Modo           | Significado
| -------------- | ---------------
| `home`         | Fija el sidebar en la página principal
| `post`         | Fija el sidebar en las entradas
| `page`         | Fija el sidebar en las páginas estáticas
| `single`       | Fija el sidebar en las entradas y páginas estáticas
| `last`         | Fija el último elemento del sidebar
| `last-in-home` | Fija el último elemento del sidebar en la página principal
| `last-in-post` | Fija el último elemento del sidebar en las entradas
| `last-in-page` | Fija el último elemento del sidebar en las páginas estáticas
| `last-in-single` | Fija el último elemento del sidebar en las entradas y páginas estáticas
{{< /table >}}


## true

El sidebar se mantendrá fijado en todo el blog.

## false

La sidebar fijo no estará habilitado en ninguna parte.