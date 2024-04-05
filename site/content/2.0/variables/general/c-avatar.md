---
title: c.avatar
---

Asigna automáticamente una **imagen de perfil por defecto** a autores sin foto, así como a comentarios de usuarios anónimos, perfiles temporales o recién creados en Blogger.

```xml
<Variable name="c.avatar" description="c.avatar" type="string" value=""/>
```

## Valores disponibles

Cualquier valor ingresado será interpretado como una URL de imagen.

{{< table >}}
| Value        | Nombre    | Tipo                 | Descripción
| ------------ | ----------| ---------------------| --------------
| `avatar.jpg` | Avatar    | {{< data image >}}   | URL de avatar por defecto
{{< /table >}}


## avatar.jpg

Se utilizará para autores sin foto y comentarios anónimos o temporales, o para perfiles de blogger con la imagen de perfil predeterminada ([blogger_logo_round_35.png](https://www.blogger.com/img/blogger_logo_round_35.png)).

{{< preview "/images/variables/general/c-avatar.webp" >}}

