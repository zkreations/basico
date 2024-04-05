---
title: c.sponsor
badge: pro
---

Configura el  nombre de la etiqueta que se usará para identificar los artículos patrocinados.

```xml
<Variable name="c.sponsor" description="c.sponsor" type="string" value="sponsor"/>
```

## Valores disponibles

Cualquier valor ingresado será interpretado como la etiqueta de patrocinados.

{{< table >}}
| Value                       | Nombre                  | Tipo                | Descripción
| --------------------------- | ----------------------- | ------------------- | --------------
| {{< data "{label_name}" >}} | Nombre de la etiqueta   | {{< data string >}} | Etiqueta que marca los artículos patrocinados
{{< /table >}}

{{< hint "warning" >}}
El nombre de la etiqueta debe ser único y no debe coincidir con el nombre de ninguna otra etiqueta.
{{< /hint >}}

## label_name

Especifica el nombre de la etiqueta que marcará los artículos patrocinados. El nombre de la etiqueta también se  muestra junto al aviso de patrocinio.

{{< preview "/images/variables/general/c-sponsorLabel.webp" >}}

