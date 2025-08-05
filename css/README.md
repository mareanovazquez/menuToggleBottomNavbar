# Sistema de Variables CSS - Documentación

## 📁 Estructura de Archivos

```
css/
├── variables.css     # Variables CSS personalizadas
├── style.css        # Estilos principales (usa las variables)
└── README.md        # Esta documentación
```

## 🎨 Categorías de Variables

### Colores Principales
- `--color-primary`: #453F78 (morado principal)
- `--color-primary-light`: #6A668D (morado claro para hovers)
- `--color-secondary`: #BBB5BD (gris para texto secundario)

### Colores de Fondo
- `--bg-main`: #F9F8F8 (fondo principal)
- `--bg-navbar`: #FFF8E3 (fondo de navegación)
- `--bg-section-2` a `--bg-section-5`: Gradiente de amarillos

### Tipografía
- `--font-family-primary`: "Space Grotesk", sans-serif
- Pesos: de `--font-weight-light` (300) a `--font-weight-black` (900)
- Tamaños: de `--font-size-small` (16px) a `--font-size-xl` (50px)

### Espaciado y Dimensiones
- `--spacing-xs` a `--spacing-xl`: Sistema de espaciado consistente
- `--navbar-height-mobile/desktop`: Alturas de navegación
- `--section-height`: 70vh para secciones

### Transiciones y Efectos
- `--transition-fast`: 0.3s ease-in-out
- `--transition-medium`: 0.4s ease-in-out
- `--transition-slow`: 1.2s ease
- `--shadow-navbar`: Sombra para navegación fija

## 🚀 Cómo Usar

### 1. Importar Variables
```css
@import url('./variables.css');
```

### 2. Usar Variables en CSS
```css
.mi-elemento {
    color: var(--color-primary);
    background: var(--bg-navbar);
    padding: var(--spacing-md);
    transition: var(--transition-fast);
}
```

### 3. Personalizar para Nuevos Proyectos
1. Modifica `variables.css` con tus colores y valores
2. Los cambios se aplicarán automáticamente a todo el proyecto
3. Mantén la estructura de nombres para consistencia

## 🎯 Ventajas del Sistema

### ✅ Mantenibilidad
- Cambios globales desde un solo archivo
- Consistencia visual automática
- Fácil actualización de temas

### ✅ Escalabilidad
- Fácil creación de temas alternativos
- Sistema preparado para modo oscuro
- Variables semánticas reutilizables

### ✅ Desarrollo Eficiente
- Menos repetición de código
- Valores estandarizados
- Mejor organización del código

## 🔧 Personalización Avanzada

### Crear un Tema Alternativo
```css
/* tema-oscuro.css */
:root {
    --color-primary: #E8E4FF;
    --bg-main: #1a1a1a;
    --bg-navbar: #2d2d2d;
    /* ... más variables */
}
```

### Breakpoints Responsivos
```css
@media (min-width: var(--breakpoint-lg)) {
    /* Estilos para pantallas grandes */
}
```

### Variables de Componente
```css
:root {
    /* Botones */
    --btn-padding: var(--spacing-md) var(--spacing-lg);
    --btn-border-radius: var(--border-radius-sm);
    
    /* Cards */
    --card-shadow: var(--shadow-navbar);
    --card-padding: var(--spacing-lg);
}
```

## 📱 Compatibilidad

- ✅ Todos los navegadores modernos
- ✅ CSS Custom Properties nativas
- ✅ Sin dependencias externas
- ✅ Fallbacks automáticos

## 🔄 Migración de Proyectos Existentes

1. Crea `variables.css` con los valores de tu proyecto
2. Reemplaza valores hardcodeados por variables
3. Prueba en diferentes breakpoints
4. Documenta variables específicas del proyecto

## 💡 Mejores Prácticas

### Nomenclatura
- Usa nombres semánticos: `--color-primary` no `--purple`
- Agrupa por categoría: `--spacing-*`, `--color-*`
- Mantén consistencia en los nombres

### Organización
- Variables globales en `:root`
- Variables de componente en selectores específicos
- Documenta variables complejas

### Performance
- Agrupa variables relacionadas
- Evita anidación excesiva
- Usa fallbacks cuando sea necesario

---

*Este sistema está diseñado para ser la base de múltiples proyectos. Personaliza las variables según tus necesidades y mantén la estructura para máxima eficiencia.*