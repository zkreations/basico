---
title: Hooks
icon: git-pull
weight: 5
---

Los "**hooks**" o "**ganchos**" te permiten sustituir componentes en áreas específicas del tema. Estas modificaciones deben ser realizadas por un desarrollador experimentado para evitar problemas o causar errores.

## Crear componentes

Dirígete al apartado **Temas > Editar HTML**, desplázate hasta el final del código, justo arriba de `</body>` agrega la siguiente estructura:


```xml
<b:defaultmarkups>
  <b:defaultmarkup type='Common'>
    <b:includable id='HOOK_NAME'>
      <!-- Tu código personalizado  -->
    </b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
```

Tendrás que reemplazar `HOOK_NAME` por el nombre del hook que deseas modificar.

## Hooks

Aunque puedes cambiar cualquier parte del tema, **no se recomienda hacerlo**. Por lo tanto, aquí tienes una lista de los **Hooks seguros para modificar** recomendados por el desarrollador:


{{< table >}}
| Hook                  | Destino       | Descripcion
| --------------------- | ------------- | --------------------
| `page:ads1`           | Página        | Anuncio debajo del título de una página estática
| `page:ads2`           | Página        | Anuncio al final de una página estática
| `post:ads1`           | Entrada       | Anuncio debajo del título de la entrada
| `post:ads2`           | Entrada       | Anuncio al final de la entrada
| `post:afterFooter`    | Entrada       | Contenido después del pie de página de la entrada
| `post:beforeFooter`   | Entrada       | Contenido antes del pie de página de la entrada
| `post:handleComments` | Entrada       | Sistema de comentarios
| `post:header`         | Entrada       | Cabecera de la entrada
| `post:pagination`     | Blog          | Paginación del blog y entradas
| `post:shareButtons`   | Entrada       | Botones para compartir
| `widget:AdSense`      | Widget        | Contenido del widget AdSense
| `widget:BlogArchive`  | Widget        | Contenido del widget Archivo
| `widget:BlogSearch`   | Widget        | Contenido del widget Buscar
| `widget:ContactForm`  | Widget        | Contenido del widget Formulario de contacto
| `widget:FeaturedPost` | Widget        | Contenido del widget Entrada destacada
| `widget:Header`       | Widget        | Contenido del widget Cabecera
| `widget:Image`        | Widget        | Contenido del widget Imagen
| `widget:Label`        | Widget        | Contenido del widget Etiqueta
| `widget:LinkList`     | Widget        | Contenido del widget Lista de enlaces
| `widget:PopularPosts` | Widget        | Contenido del widget Entradas populares
| `widget:Profile`      | Widget        | Contenido del widget Perfil
| `widget:Text`         | Widget        | Contenido del widget Texto
| `widget:TextList`     | Widget        | Contenido del widget Lista de texto
{{< /table >}}

{{< hint "warning" >}}
Aunque estos hooks son seguros de modificar, aún existen riesgos. Si no estás seguro de lo que estás haciendo, **no realices cambios**.
{{< /hint >}}

## Ejemplos

{{< code lang="xml" >}}
<b:defaultmarkups>
  <b:defaultmarkup type='Common'>
    <b:includable id='post:ads1'>
      <p>Anuncio debajo del título</p>
    </b:includable>
    <b:includable id='post:ads2'>
      <p>Anuncio al final de la entrada</p>
    </b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
<---->
Se insertará tu código de anuncios personalizado en las entradas
{{< /code >}}


{{< code lang="xml" >}}
<b:defaultmarkups>
  <b:defaultmarkup type='Common'>
    <b:includable id='post:shareButtons'>
      <p>Otro sistema de compartir</p>
    </b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
<---->
Se insertará tu código personalizado para compartir un articulo
{{< /code >}}


{{< code lang="xml" >}}
<b:defaultmarkups>
  <b:defaultmarkup type='Common'>
    <b:includable id='post:handleComments'>
      <p>Otro sistema de comentarios</p>
    </b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
<---->
Se insertará tu sistema de comentarios personalizado
{{< /code >}}
