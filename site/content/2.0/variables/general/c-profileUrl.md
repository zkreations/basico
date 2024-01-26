---
title: c.profileUrl
---

Establece un enlace predeterminado cuando el perfil de Blogger **no es público**. Se aplica el mismo enlace a todos los perfiles privados.

```xml
<Variable name="c.profileUrl" description="c.profileUrl" type="string" value="https://blogger.com"/>
```

## Valores disponibles

Cualquier valor ingresado será interpretado como un enlace.

{{< table >}}
| Value        | Nombre        | Tipo                 | Descripción   
| ------------ | ------------- | -------------------- | --------------
| `link`       | Url de autor  | {{< data url >}}  | Enlace de perfil predeterminado
{{< /table >}}


## link

El enlace especificado se usará como vínculo en los perfiles de Blogger privados.

{{< preview "/images/variables/general/c-profileUrl.png" >}}
