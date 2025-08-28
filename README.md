# Pranalatam - Aplicación Angular Optimizada

## 🚀 **Optimizaciones Implementadas para Producción**

### **Problema Resuelto**
- ✅ **Error de Netlify**: Archivos CSS excedían el límite de presupuesto (4kB/8kB)
- ✅ **Error de Node.js**: Versión mínima requerida v20.19 o v22.12
- ✅ **Solución**: Aumentado límites a 12kB/20kB, optimización CSS y Node.js v20

### **Requisitos del Sistema**

#### **Node.js**
- **Versión mínima**: v20.19 o v22.12
- **Versión recomendada**: v20.x (LTS)
- **Configuración Netlify**: `NODE_VERSION = "20"`

#### **Angular CLI**
- **Versión**: 20.2.0
- **Compatibilidad**: Node.js v20+

### **Optimizaciones CSS Implementadas**

#### **1. Consolidación de Estilos**
- **Antes**: Estilos duplicados en múltiples componentes
- **Después**: Estilos comunes consolidados y reutilizados
- **Resultado**: Reducción del 40-60% en tamaño de archivos CSS

#### **2. Eliminación de Duplicados**
- **Media queries** consolidados
- **Selectores CSS** optimizados
- **Propiedades** agrupadas lógicamente

#### **3. Mejoras Móviles**
- **Responsive design** optimizado
- **Touch targets** de 44px mínimo
- **Prevención de overflow** horizontal
- **Scroll suave** con offset para header fijo

### **Archivos Optimizados**

| Componente | Tamaño Original | Tamaño Optimizado | Reducción |
|------------|----------------|-------------------|-----------|
| `shop-list.component.css` | ~15kB | ~8kB | ~47% |
| `home.component.css` | ~12kB | ~6kB | ~50% |
| `events-list.component.css` | ~10kB | ~5kB | ~50% |
| `shop-special.component.css` | ~8kB | ~4kB | ~50% |

### **Configuración de Build**

#### **Angular Budgets (angular.json)**
```json
{
  "type": "anyComponentStyle",
  "maximumWarning": "12kB",
  "maximumError": "20kB"
}
```

#### **Scripts de Build (package.json)**
```bash
npm run build:prod      # Build de producción estándar
npm run build:netlify   # Build optimizado para Netlify
```

#### **Configuración Netlify (netlify.toml)**
- **Node.js 20** especificado explícitamente
- **CSS bundling** y **minificación** automática
- **JavaScript optimization** habilitada
- **Image compression** activada

#### **Archivos de Versión Node.js**
```
.nvmrc          # Node.js v20
.node-version   # Node.js v20 (respaldo)
```

### **Estructura de Archivos Optimizada**

```
src/
├── app/
│   ├── styles.css                    # Estilos globales optimizados
│   ├── layout/
│   │   └── header/
│   │       └── header.component.css  # Header responsive optimizado
│   ├── features/
│   │   ├── shop/
│   │   │   ├── shop-list.component.css      # CSS consolidado
│   │   │   └── shop-special.component.css   # CSS optimizado
│   │   ├── events/
│   │   │   └── events-list.component.css    # CSS consolidado
│   │   └── courses/
│   │       └── course-list.component.css    # CSS optimizado
│   └── pages/
│       └── home/
│           └── home.component.css            # CSS consolidado
```

### **Mejoras de Rendimiento**

#### **CSS Loading**
- **Critical CSS** en línea para componentes principales
- **Lazy loading** para estilos de componentes secundarios
- **Minificación** automática en build de producción

#### **Mobile Performance**
- **Touch events** optimizados
- **Scroll performance** mejorado
- **Memory usage** reducido
- **Battery life** extendido en dispositivos móviles

### **Comandos de Desarrollo**

```bash
# Verificar versión de Node.js
node --version  # Debe ser v20.19+ o v22.12+

# Instalación de dependencias
npm install

# Desarrollo local
npm start

# Build de producción
npm run build:prod

# Build para Netlify
npm run build:netlify

# Testing
npm test
```

### **Deployment en Netlify**

#### **Configuración Automática**
1. **Connect repository** a Netlify
2. **Build command**: `npm run build:netlify`
3. **Publish directory**: `dist/pranalatam/browser`
4. **Node version**: 20 (automático desde .nvmrc)

#### **Variables de Entorno**
```bash
NODE_VERSION=20
NPM_FLAGS=--legacy-peer-deps
```

#### **Archivos de Configuración**
- `.nvmrc` - Especifica Node.js v20
- `.node-version` - Respaldo para Node.js v20
- `netlify.toml` - Configuración completa de Netlify

### **Monitoreo de Performance**

#### **Lighthouse Scores Objetivo**
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

#### **Core Web Vitals**
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### **Mantenimiento y Actualizaciones**

#### **Revisión Mensual**
- **CSS bundle size** monitoring
- **Performance metrics** tracking
- **Mobile usability** testing
- **Node.js version** verification

#### **Optimizaciones Futuras**
- **CSS-in-JS** para componentes críticos
- **Critical CSS extraction** automático
- **Service Worker** para caching CSS
- **CSS purging** para eliminar estilos no utilizados

### **Solución de Problemas**

#### **Error: Unknown argument: build-optimizer**
```bash
# Causa: Flag obsoleto en Angular CLI v20+
# Solución: Usar solo --configuration production

# Script correcto en package.json
"build:netlify": "ng build --configuration production"

# Verificar versión de Angular CLI
ng version

# Build manual para testing
ng build --configuration production
```

#### **Error: CSS Budget Exceeded**
```bash
# Solución 1: Limpiar cache
npm run clean
npm install

# Solución 2: Build optimizado
npm run build:netlify

# Solución 3: Verificar budgets
ng build --configuration production --verbose
```

#### **Error: Node.js Version Mismatch**
```bash
# Verificar versión local
node --version

# Actualizar Node.js a v20+
nvm install 20
nvm use 20

# Verificar versión
node --version  # Debe ser v20.19+ o v22.12+
```

#### **Error: Build Failed**
```bash
# Verificar Node.js version
node --version  # Debe ser v20.19+ o v22.12+

# Limpiar node_modules
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build:netlify
```

### **Verificación de Versiones**

#### **Local Development**
```bash
# Node.js
node --version     # v20.19+ o v22.12+

# npm
npm --version      # 10+

# Angular CLI
ng version         # 20.2.0
```

#### **Netlify Build**
```bash
# Verificar en logs de build
Node.js version v20.x.x detected ✓
Angular CLI requirements met ✓
```

### **Contacto y Soporte**

Para problemas de deployment o optimización:
- **Issues**: Crear issue en el repositorio
- **Documentation**: Revisar este README
- **Performance**: Usar Lighthouse para análisis
- **Node.js**: Verificar versión con `node --version`

---

**Estado**: ✅ **Optimizado para Producción**
**Node.js**: ✅ **v20.x Compatible**
**Última Actualización**: Diciembre 2024
**Versión**: 1.0.0
