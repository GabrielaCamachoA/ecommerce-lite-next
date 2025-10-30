#  GUÍA RÁPIDA DE RAMAS Y COMMITS


#### Estructura:

### Tipos más comunes:
-  feature/  -> Nueva funcionalidad
-  fix/      -> Corrección de errores
-   hotfix/   -> Arreglo urgente en producción
-   refactor/ -> Mejora del código sin cambiar la lógica
-   docs/     -> Actualización de documentación
-   test/     -> Pruebas unitarias o integradas
-   chore/    -> Tareas menores o mantenimiento
#
# Ejemplos:
- git checkout -b feature/login-page
- git checkout -b fix/api-authentication
- git checkout -b refactor/dashboard-component


### CONVENCIONES DE COMMITS

#### Estructura:

### Tipos de commit:
-   feat      -> Nueva funcionalidad
-   fix       -> Corrección de errores
-   docs      -> Documentación
-   style     -> Cambios de formato o estilo
-   refactor  -> Mejora interna del código
-   test      -> Agregar o modificar tests
-   chore     -> Mantenimiento del proyecto
### Ejemplos correctos:
- git commit -m "feat: add password reset functionality"
- git commit -m "fix: handle 403 errors properly"
- git commit -m "docs: update installation section"
- git commit -m "refactor: improve render performance"

### Ejemplos incorrectos :
- git commit -m "arreglo login"
- git commit -m "update cosas varias"
- git commit -m "final version"



### FLUJO DE TRABAJO RECOMENDADO

####  Asegúrate de estar en develop
- git checkout develop
- git pull origin develop

####  Crea tu rama
- git checkout -b feature/new-component

####  Haz tus cambios y commits
- git add .
- git commit -m "feat(component): create reusable button"

####  Sube la rama
git push origin feature/new-component

##   Crea el Pull Request hacia develop
#####  Título: Feature: New Component
#####  Descripción: Explica los cambios principales y su propósito


###  BUENAS PRÁCTICAS

-  Commits pequeños y descriptivos
-  Todo en inglés
-  Borra ramas ya integradas
-  No hagas commits tipo "final", "arreglo", o "cosas varias"
-  Revisa tu código antes de hacer merge
