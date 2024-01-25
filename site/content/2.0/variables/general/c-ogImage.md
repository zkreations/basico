---
title: c.ogImage
---

Imagen predeterminada (1200x630) para metadatos de **Open Graph**. Esta imagen se usará en la página de inicio y en todas las entradas que no tengan una imagen específica.

```xml
<Variable name="c.ogImage" description="c.ogImage" type="string" value=""/>
```

## Valores disponibles

Cualquier valor ingresado será interpretado como una URL de imagen.

{{< table >}}
| Value            | Nombre             | Tipo                | Descripción   
| ---------------- | ------------------ | ------------------- | --------------
| `og-image.jpg`   | Imagen Open Graph  | {{< data image >}}  | Imagen destinada a la etiqueta `og:image`
{{< /table >}}


## og-image.jpg

La imagen que se utilizará al compartir el enlace de la página principal en redes sociales. También se usará esta imagen si la entrada no contiene ninguna imagen.

### Facebook

{{< og >}}

### Twitter

{{< og type="twitter" >}}

### Discord

{{< og type="discord" >}}
