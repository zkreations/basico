---
title: p.tocOn
---

Inserta automáticamente en todos los artículos la **tabla de contenido**.

```xml
<Variable name="p.tocOn" description="p.tocOn" type="string" value="false"/>
```


## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value            | Nombre            | Tipo                 | Descripción
| ---------------- | ----------------- | -------------------- | ------------------------------
| `before-first-h` | Antes de `<h#>`   | {{< data string >}}  | Antes del primer encabezado
| `after-first-h`  | Después de `<h#>` | {{< data string >}}  | Después del primer encabezado
| `before-first-p` | Antes de `<p>`    | {{< data string >}}  | Antes del primer párrafo
| `after-first-p`  | Después de `<p>`  | {{< data string >}}  | Después del primer párrafo
| `true`           | Verdadero         | {{< data boolean >}} | Inserta la tabla de contenido
| `false`          | Falso             | {{< data boolean >}} | Deshabilita la tabla de contenido
{{< /table >}}

## before-first-h

La tabla de contenido estará disponible **antes** de la primera **etiqueta de encabezado**:

{{< preview "/images/variables/posts/p-tocOn-before-first-h.png" >}}

## after-first-h

La tabla de contenido estará disponible **después** de la primera **etiqueta de encabezado**:

{{< preview "/images/variables/posts/p-tocOn-after-first-h.png" >}}

## before-first-p

La tabla de contenido estará disponible **antes** de la primera **etiqueta de párrafo**:

{{< preview "/images/variables/posts/p-tocOn-before-first-p.png" >}}


## after-first-p

La tabla de contenido estará disponible **después** de la primera **etiqueta de párrafo**:

{{< preview "/images/variables/posts/p-tocOn-after-first-p.png" >}}


## true

La tabla de contenido estará disponible **antes del contenido**:

{{< preview "/images/variables/posts/p-tocOn-true.png" >}}

## false

La tabla de contenido no se insertará automáticamente.

## Manual

Para insertar manualmente la tabla de contenido, ubica este código en el lugar donde deseas que aparezca:

```html
<div class="toc"></div>
```

{{< hint "success" >}}
Al insertar manualmente, la opción **Insertar automáticamente** no tendrá efecto en ese artículo.
{{< /hint >}}
