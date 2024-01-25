---
title: c.image
---

Establece la imagen por defecto cuando **no hay imágenes** en el articulo. No se utilizará para la vista previa de los artículos sin imágenes compartidos en redes sociales.

```xml
<Variable name="c.image" description="c.image" type="string" value=""/>
```

## Valores disponibles

Cualquier valor ingresado será interpretado como una URL de imagen.

{{< table >}}
| Value         | Nombre        | Tipo                 | Descripción   
| ------------- | ------------- | ---------------------| --------------
| `image.jpg`   | Sin imagen    | {{< data image >}}   | Imagen por defecto
{{< /table >}}


## image.jpg

Si el valor ingresado es una URL de imagen, se utilizará como imagen por defecto cuando no hay imágenes en el articulo. Si el valor ingresado está vacío, se usará los estilos sin imagen del tema.

### Con imagen

{{< preview "/images/variables/general/image.png" >}}


### Sin imagen

{{< preview "/images/variables/general/no-image.png" >}}

### Valor vacío

{{< preview "/images/variables/general/image-empty.png" >}}


