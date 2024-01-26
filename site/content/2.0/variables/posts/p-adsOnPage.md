---
title: p.adsOnPage
---

Habilita los anuncios insertados al inicio y al final de **una página estática**.

```xml
<Variable name="p.adsOnPage" description="p.adsOnPage" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value        | Nombre        | Tipo                 | Descripción   
| ------------ | ------------- | -------------------- | --------------
| `true`       | Verdadero     | {{< data boolean >}} | Muestra anuncios en una página estática
| `false`      | Falso         | {{< data boolean >}} | No muestra anuncios en una páginas
{{< /table >}}


## true

Los anuncios se insertarán en **todas las páginas estáticas**. Estos se ubicarán debajo del título y al final del contenido. Los anuncios solo se insertarán si el Blog tiene [AdSense habilitado](https://support.google.com/blogger/answer/1269077).

## false

Los anuncios no se insertarán en las páginas estáticas.
