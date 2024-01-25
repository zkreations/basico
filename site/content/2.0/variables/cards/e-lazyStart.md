---
title: e.lazyStart
---

Especifica el número de la entrada desde donde se empezará a aplicar el atributo `loading="lazy"` a las imágenes.

```xml
<Variable name="e.lazyStart" description="e.lazyStart" type="string" value="2"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value     | Nombre         | Tipo                  | Descripción   
| --------- | -------------- | --------------------- | --------------
| `0-999`   | Valor numérico | {{< data number >}}   |  Número de la entrada para empezar la carga diferida
{{< /table >}}

## 0-999

El número ingresado le indicará al tema que **desde esa entrada en adelante** se empezará a aplicar la carga diferida. Para conocer el impacto de este atributo, se recomiendo leer sobre la carga diferida mediante el atributo loading.

{{< pagelink title="Carga diferida de imágenes a nivel del navegador" name="web.dev" href="https://web.dev/browser-level-image-lazy-loading/" >}}