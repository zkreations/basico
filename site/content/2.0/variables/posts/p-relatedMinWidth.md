---
title: p.relatedMinWidth
---

Ancho mínimo para las columnas de los artículos relacionados. El valor esperado deberá ser una [unidad de medida válida](https://lenguajecss.com/css/unidades-css/que-son/) (rem, px, em, etc).

```xml
<Variable name="p.relatedMinWidth" description="p.relatedMinWidth" type="string" value="8rem"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value   | Nombre             | Tipo                 | Descripción   
| ------- | ------------------ | -------------------- | --------------
| `unit`  | Unidad de medida  | {{< data "{unit}" >}}  | Cantidad de elementos relacionados a mostrar
{{< /table >}}


## unit

La unidad de medida indicada determinará la cantidad máxima en la que las columnas pueden reducir su ancho. Una vez que se alcance el ancho mínimo, las columnas **se moverán a la siguiente fila**, lo que mejora la adaptabilidad del diseño en dispositivos móviles.