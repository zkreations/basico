---
title: r.shortname
---

Habilita el [sistema de comentarios de Disqus](https://disqus.com/) en el Blog. Si el valor ingresado **está vacío**, se usará el sistema de Blogger.

```xml
<Variable name="r.shortname" description="r.shortname" type="string" value=""/>
```

## Valores disponibles

Cualquier valor ingresado se interpretará por defecto como `shortname`

{{< table >}}
| Value          | Nombre     | Tipo                | Descripción
| -------------- | ---------- | ------------------- | --------------
| `shortname`    | Shortname  | {{< data string >}} | Nombre corto de Disqus
{{< /table >}}

## Shortname

El nombre corto o **"Shortname"** es el identificador de los comentarios de Disqus. Dirígete a tu panel de administración de tu cuenta de Disqus, luego al apartado **"General"** y copia el valor mostrado en el campo **"Shortname"**.

## false

Los comentarios de Disqus no estarán disponibles y **se usará el sistema de Blogger**.


{{< pagelink title="What's a shortname?" name="Aprende a encontrar el shortname" href="https://help.disqus.com/en/articles/1717111-what-s-a-shortname" >}}
