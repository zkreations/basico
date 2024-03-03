---
title: p.relatedMinWidth
---

Ancho mínimo para las columnas de los artículos relacionados. El valor esperado deberá ser una [unidad de medida válida](https://lenguajecss.com/css/unidades-css/que-son/) (rem, px, em, etc).

```xml
<Variable name="p.relatedMinWidth" description="p.relatedMinWidth" type="string" value="8rem"/>
```

## Valores disponibles

Cualquier valor ingresado será interpretado como una unidad de medida.

{{< table >}}
| Value   | Nombre             | Tipo                  | Descripción   
| ------- | ------------------ | --------------------- | --------------
| `unit`  | Unidad de medida  | {{< data "{unit}" >}}  | Ancho mínimo de los artículos relacionados.
{{< /table >}}


## unit

La unidad de medida determinará el ancho mínimo de las columnas. Una vez alcanzado el ancho mínimo, las columnas **se moverán a la siguiente fila**, lo que mejora la adaptabilidad del diseño en dispositivos móviles.