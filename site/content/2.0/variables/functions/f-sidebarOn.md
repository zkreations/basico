---
title: f.sidebarOn
---

Habilita el sidebar en el blog de acuerdo a una **lista de tipos de página**.

```xml
<Variable name="f.sidebarOn" description="f.sidebarOn" type="string" value="home, index, search, labels, archive, item, static_page, error_page"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value                        | Nombre         | Tipo                    | Descripción
| ---------------------------- | -------------- | ----------------------- | --------------
| {{< data "{page_type}" >}}   | Tipo de página | {{< data string >}}     | Lista de tipos de páginas
{{< /table >}}


## page_type

Especifica una lista de tipos de página, que se utilizará como referencia para **mostrar la barra lateral**. Aunque no es necesario una separación, se recomienda utilizar una coma para separar los tipos de página.

```text
home, index, search, labels, archive, item, static_page, error_page
```

### Tabla de tipos de página

{{< table >}}
| Tipo           | Significado
| -------------- | ---------------
| `home`         | Pagina principal `/`
| `index`        | Paginación de articulos `/search`
| `search`       | Búsqueda por términos `/search?q=example`
| `labels`       | Búsqueda por etiquetas `/search/label/example`
| `archive`      | Búsqueda por fecha `/2022/08`
| `item`         | Entradas `/2022/08/example.html`
| `static_page`  | Pagina estática `/p/example.html`
| `error_page`   | Error 404 `/404`
{{< /table >}}

