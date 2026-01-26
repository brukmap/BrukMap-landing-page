# Landing Page - BrukMap

## Stack Técnico
- **Framework:** Astro
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS

---

## Información del Proyecto

### Nombre
**BrukMap**

### Tagline
- ES: "Explora lo alternativo"
- EN: "Explore the alternative"

### Descripción corta
App de mapas para descubrir lugares alternativos, únicos y fuera de lo común. Cafeterías con encanto, galerías de arte underground, tiendas vintage, rooftops secretos y mucho más.

### Descripción larga
BrukMap es tu guía para explorar el lado alternativo de las ciudades. Olvídate de las recomendaciones genéricas y descubre esos lugares especiales que solo los locales conocen: desde cafeterías escondidas y librerías independientes hasta galerías de arte underground y spots 420 friendly.

Con BrukMap puedes:
- Explorar lugares alternativos cerca de ti
- Contribuir añadiendo tus propios descubrimientos
- Crear tu "Sanctuary" privado con spots personales
- Compartir lugares con amigos y grupos (burbujas)
- Usar la app sin conexión con datos descargados

---

## Identidad Visual

### Paleta de Colores
```css
/* Background */
--bg-primary: #0A0A0A;
--bg-secondary: #121212;
--bg-tertiary: #1A1A1A;
--bg-elevated: #1E1E1E;

/* Accent - Verde */
--accent-primary: #1ceb23;
--accent-secondary: #18a01c;
--accent-muted: rgba(28, 235, 35, 0.15);
--accent-glow: rgba(28, 235, 35, 0.3);

/* Text */
--text-primary: #FFFFFF;
--text-secondary: #A0A0A0;
--text-tertiary: #808080;

/* Semantic */
--success: #4ed152;
--warning: #FFB800;
--error: #FF4444;
--info: #00B8FF;
```

### Tipografía
- **Headings:** Montserrat (Bold, ExtraBold, Black)
- **Body:** Inter (Regular, Medium, SemiBold)

### Estilo Visual
- Dark theme minimalista/brutalista
- Acentos en verde neón con efectos glow
- Bordes sutiles (#2A2A2A)
- Border radius: 8-16px
- Sombras con glow verde en elementos destacados

---

## Categorías de Lugares

### Gastronomía
- Cafetería, Street Food, Vegano, Bar, Rooftop

### Cultura
- Arte, Libros, Galería, Teatro, Cine, Graffiti

### Compras
- Vintage, Segunda Mano, Mercado, Donaciones

### Música
- Música en vivo, Vinilos

### Naturaleza
- Parque, Huerto, Surf

### Bienestar
- Yoga, Gimnasio, Coworking

### Deportes
- Skatepark

### Adultos
- 420 Friendly, Smoke Shop, Nudismo, Swingers

---

## Features Principales

### 1. Mapa de Spots
- Mapa interactivo con lugares alternativos
- Filtros por categoría
- Búsqueda por nombre y ubicación
- Vista de detalles con fotos, descripción y direcciones

### 2. Contribuciones
- Cualquier usuario puede añadir lugares
- Sistema de moderación comunitaria
- Crédito al contribuidor

### 3. Sanctuary (Social)
- Spots privados solo para ti
- Compartir con amigos específicos
- Crear "burbujas" (grupos) para compartir lugares
- Sistema de códigos de amigo

### 4. Modo Offline
- Descargar datos de ciudades
- Funciona sin conexión a internet
- Sincronización automática

### 5. Eventos
- Calendario de eventos alternativos
- Filtros por fecha y categoría
- Favoritos

---

## Secciones de la Landing

### Hero
- Título principal con tagline
- CTA para descargar (App Store / Play Store)
- Preview de la app (mockup de teléfono)
- Background con efecto de mapa/grid

### Features
- Grid de features principales con iconos
- Animaciones sutiles al hacer scroll

### Categorías
- Showcase visual de las categorías
- Ejemplos de lugares

### Social Proof
- Estadísticas (lugares, usuarios, ciudades)
- Testimonios de usuarios

### Screenshots
- Carrusel de capturas de pantalla de la app
- Diferentes pantallas: mapa, detalles, sanctuary, perfil

### CTA Final
- Llamada a la acción para descargar
- Links a stores
- QR code opcional

### Footer
- Links: Términos, Privacidad, Soporte
- Redes sociales
- Email de contacto: soporte@brukmap.app

---

## Assets Necesarios

### Imágenes
- [ ] Logo de BrukMap (SVG, PNG)
- [ ] Icono de la app (512x512)
- [ ] Screenshots de la app (iPhone y Android)
- [ ] Mockups de teléfonos con la app
- [ ] Iconos de categorías
- [ ] Badges de App Store y Play Store

### Contenido
- [ ] Textos finales en español e inglés
- [ ] Política de privacidad
- [ ] Términos de uso

---

## SEO

### Keywords
- mapas alternativos
- lugares únicos
- spots secretos
- cafeterías escondidas
- guía local
- lugares underground
- app de viajes alternativa

### Meta
```html
<title>BrukMap - Explora lo alternativo</title>
<meta name="description" content="Descubre lugares alternativos, únicos y fuera de lo común. Cafeterías escondidas, galerías underground, tiendas vintage y más.">
```

---

## URLs de Stores (placeholder)

- App Store: `https://apps.apple.com/app/brukmap/id...`
- Play Store: `https://play.google.com/store/apps/details?id=app.brukmap`

---

## Notas Adicionales

- La landing debe ser responsive (mobile-first)
- Soporte para modo oscuro nativo del navegador (ya que la app es dark)
- Lazy loading para imágenes
- Animaciones sutiles con CSS/JS (no excesivas)
- Considerar internacionalización (i18n) para ES/EN
