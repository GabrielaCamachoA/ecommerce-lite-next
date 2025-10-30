# Carpeta store

Esta carpeta maneja el estado global de la aplicación, utilizando `Zustand` .
Aquí se guardan los diferentes stores que controlan la lógica y el estado compartido entre componentes.

# Contenido

`useAuthStore` → Maneja autenticación y datos del usuario.

`useUiStor`e → Controla elementos visuales (modales, loaders, etc.).

`useCartStore` → Gestiona el estado del carrito o funciones similares.

#### Cada store debe estar separado por dominio y exportarse como un hook `(useXStore)`.