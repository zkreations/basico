---
title: e.ratio
---

Establece la **relación de aspecto** para las imágenes de portada de los artículos.

```xml
<Variable name="e.ratio" description="e.ratio" type="string" value="16:9"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `16:9`.

{{< table >}}
| Value    | Nombre     | Tipo                            | Descripción 
| -------- | ---------- | ------------------------------- | --------------
| `21:9`   | Ultrawide  | {{< data "{aspect_ratio}" >}} | Imagen ultra ancha
| `16:9`   | Widescreen | {{< data "{aspect_ratio}" >}} | Imagen ancha
| `4:3`    | Fullscreen | {{< data "{aspect_ratio}" >}} | Imagen cuatro tercios
| `1:1`    | Square     | {{< data "{aspect_ratio}" >}} | Imagen cuadrado perfecto
| `1:2`    | Rectangle  | {{< data "{aspect_ratio}" >}} | Imagen rectangular vertical
| `2:3`    | Printing   | {{< data "{aspect_ratio}" >}} | Imagen de impresión
| `5:7`    | Cover      | {{< data "{aspect_ratio}" >}} | Imagen portada de película
{{< /table >}}


## 21:9

**Ultra ancha**, como películas grabadas en CinemaScope.

{{< ratio "21:9" >}}


## 16:9

**Ancha**, el estándar en monitores y otras pantallas.

{{< ratio "16:9" >}}

## 4:3

**Cuatro tercios**, cercano a un cuadrado.

{{< ratio "4:3" >}}


## 1:1

**Lados iguales**, un cuadrado perfecto.

{{< ratio "1:1" >}}


## 1:2

**Rectángulo vertical**, el formato más largo.

{{< ratio "1:2" >}}


## 2:3

**Dos tercios**, dimensiones de un diseño de impresión.

{{< ratio "2:3" >}}


## 5:7

**Portada**, para portadas de series o películas.

{{< ratio "5:7" >}}
