---
title: p.shareOn
---

Lista de redes sociales que contiene los nombres de las redes sociales que se mostrarán en los botones de compartir.

```xml
<Variable name="p.shareOn" description="p.shareOn" type="string" value="facebook, x, whatsapp, telegram"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value                       | Nombre                  | Tipo                | Descripción   
| --------------------------- | ----------------------- | ------------------- | --------------
| {{< data "{share_name}" >}} | Lista de redes sociales | {{< data string >}} | Lista de redes sociales
{{< /table >}}

{{< hint "warning" >}}
Esta función solo gestiona los botones, pero no la **capacidad de compartir**. Asegúrate de que tu blog sea público y que la opción "Compartir" este habilitada en el widget Blog.
{{< /hint >}}

## share_name

Especifica una lista de redes sociales. El orden de los nombres especificados no influye en la posición del botón. Aunque no es necesario una separación, recomiendo utilizar comas para separar los valores disponibles:

{{< preview "/images/variables/posts/p-shareOn-all.png" >}}

```text
facebook, x, whatsapp, telegram, pinterest, tumblr, reddit, vk, linkedin
```
