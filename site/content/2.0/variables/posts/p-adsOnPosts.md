---
title: p.adsOnPosts
---

Habilita los anuncios insertados al inicio y al final de una entrada.

```xml
<Variable name="p.adsOnPosts" description="p.adsOnPosts" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value        | Nombre        | Tipo                 | Descripción   
| ------------ | ------------- | -------------------- | --------------
| `true`       | Verdadero     | {{< data boolean >}} | Muestra anuncios en entradas
| `false`      | Falso         | {{< data boolean >}} | No muestra anuncios en entradas
{{< /table >}}


## true

Los anuncios se insertarán en **todas las entradas** y se ubicarán debajo del título y al final del contenido. Los anuncios solo se insertarán si el Blog tiene [AdSense habilitado](https://support.google.com/blogger/answer/1269077).

## false

Los anuncios no se insertarán en las entradas.
