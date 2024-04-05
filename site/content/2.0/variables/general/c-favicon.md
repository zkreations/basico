---
title: c.favicon
---

Sustituye el icono favicon.ico (16x16 píxeles) de Blogger con la imagen ingresada. Se recomienda utilizar una imagen de al menos 192x192 píxeles subida previamente a Blogger.

```xml
<Variable name="c.favicon" description="c.favicon" type="string" value=""/>
```

## Valores disponibles

Cualquier valor ingresado será interpretado como una URL de imagen.

{{< table >}}
| Value         | Nombre        | Tipo                 | Descripción
| ------------- | ------------- | ---------------------| --------------
| `favicon.png` | Favicon HD    | {{< data image >}}   | Favicon de alta resolución en formato PNG
{{< /table >}}


## favicon.png

Proporciona el enlace de tu favicon en alta resolución **alojada en servidores de Google**, como Blogger o Google Fotos. Se generarán favicons de 16x16, 32x32, 96x96, 180x180 y 192x192 para diferentes dispositivos.

### 16x16

{{< preview "/images/variables/general/favicon16.webp" >}}

### 32x32

{{< preview "/images/variables/general/favicon32.webp" >}}

### 192x192

{{< preview "/images/variables/general/favicon192.webp" >}}


