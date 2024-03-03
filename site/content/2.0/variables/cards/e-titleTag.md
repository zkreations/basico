---
title: e.titleTag
---

Establece el tipo de encabezado que se utilizará para mostrar el **título de la entrada**.

```xml
<Variable name="e.titleTag" description="e.titleTag" type="string" value="h3"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `h3`.

{{< table >}}
| Value         | Nombre       | Tipo                | Descripción
| ------------- | -------------| --------------------| --------------
| `headings`    | Encabezados   | {{< data "{headings}" >}} | Establece el tipo de encabezado.
{{< /table >}}

## headings

El tipo de encabezado que se utilizará para mostrar el **título de la entrada**. Especifica un encabezado `<h#>`, puedes elegir un valor del 2 al 6. Por ejemplo, si el valor ingresado es `h2` entonces el resultado será:

```html
<h2 class="card-title m:fs-3 fs-4 fw-500">...</h2>
```
