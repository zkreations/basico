---
title: Variables
weight: 2
icon: gear
---

Las variables de Blogger son valores que **se almacenan en etiquetas** en la plantilla para recuperar su valor posteriormente. En este contexto, se emplean las variables para establecer la configuración del tema.

## Localización

Para acceder a las variables, dirígete en la sección **Temas** de tu panel de administración de Blogger y utiliza la opción **Editar HTML**, encontrarás todas las variables después del encabezado de información del tema.


## Modificar valores

Este es el aspecto de una variable común que encontrarás en el tema:

```xml
[string] Title tag. (h2, h3, h4, h5, h6)
<Variable name="e.titleTag" description="e.titleTag" type="string" value="h3"/>
```
En la parte superior encontrarás el tipo de variable, la descripción y los valores aceptados. Para **modificar el valor** de una variable, simplemente cambia el valor del atributo `value` por otro aceptable.

## Ejemplos

{{< code lang="xml" >}}
[string] Ui color scheme. (dark, light)
<Variable name="c.uiScheme" description="c.uiScheme" type="string" value="dark"/>
<---->
Esta variable define el esquema de color de la interfaz de usuario. Solo podrá ser `dark` o `light`.
{{< /code >}}

{{< code lang="xml" >}}
[boolean] Enable the button to edit widgets
<Variable name="a.layoutEdit" description="a.layoutEdit" type="string" value="false"/>
<---->
Esta variable es un booleano y solo puede ser `true` o `false`. Si es `true` mostrará un botón de edición.
{{< /code >}}
