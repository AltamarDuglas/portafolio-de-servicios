# Registro de Decisiones de Diseño y Desarrollo

En este archivo registraré las decisiones que he tomado durante la construcción de mi portafolio, explicando el porqué de cada una, siguiendo la filosofía SOLID y las mejores prácticas de desarrollo.

## 1. Configuración del Proyecto y Tecnologías

### Elección de Vite + React
He decidido utilizar **Vite** como herramienta de construcción por su rapidez en el desarrollo y su excelente integración con **React**. React me permite crear componentes reutilizables y mantener un estado predecible, lo cual es ideal para un portafolio dinámico.

### TailwindCSS para el Estilo
Utilizo **TailwindCSS** porque me permite iterar rápidamente en el diseño sin salir del HTML. Además, facilita la creación de un sistema de diseño consistente mediante clases de utilidad, lo que ayuda a mantener el código limpio y escalable (cumpliendo indirectamente con el principio de responsabilidad única en las clases CSS).

### Framer Motion para Animaciones
He elegido **Framer Motion** para las animaciones debido a su API declarativa y potente. Me permite añadir ese toque "premium" y fluido que el usuario busca, con transiciones suaves y micro-interacciones que mejoran la experiencia de usuario (UX).

### React-tsparticles para el Fondo
Para el fondo animado solicitado, utilizo **tsparticles**. Es la biblioteca estándar para este tipo de efectos, ofreciendo un alto rendimiento y una configuración muy flexible para lograr esa atmósfera oscura y misteriosa.

## 2. Estética "Don't Starve" (Sin alusiones directas)

Para lograr el estilo de *Don't Starve* sin copiar el juego, me enfocaré en:
- **Paleta de colores**: Negros profundos, grises ceniza, toques de pergamino viejo (#F5F5DC) y rojo oscuro o naranja quemado para acentos.
- **Tipografía**: Utilizaré fuentes con serifa que parezcan escritas a mano o con un estilo victoriano/gótico moderno.
- **Bordes y Sombras**: Implementaré bordes ligeramente irregulares o con texturas que imiten el dibujo a lápiz o tinta.
- **Contraste**: Mucho contraste entre el fondo oscuro y los elementos interactivos.

## 3. Arquitectura y Código

### Principio de Responsabilidad Única (SOLID)
Cada componente tendrá una única función. Por ejemplo, el componente `ProjectCard` se encargará únicamente de mostrar la información de un proyecto, mientras que `ParticlesBackground` manejará exclusivamente la configuración del fondo animado.

### Comentado de Código
Como se solicitó, comentaré extensamente el código para explicar no solo *qué* hace, sino *por qué* lo hace, facilitando el mantenimiento futuro y la comprensión del flujo de datos.

## 4. Sección de Contacto

### Simplicidad y Enfoque Comercial
He actualizado el formulario de contacto para que sea una herramienta de conversión directa. He decidido incluir campos específicos como **"Nombre o Empresa"** y **"WhatsApp / Celular"**, lo cual facilita la comunicación inmediata y profesional con clientes potenciales. El campo de mensaje se ha reorientado a **"¿En qué puedo ayudarte?"** para invitar al usuario a describir sus necesidades de proyecto de forma clara, manteniendo la estética de "nota de superviviente" pero con una funcionalidad orientada a negocios.

## 5. Lenguaje de Programación

### Cambio de TypeScript a JavaScript
A petición del usuario, he revertido el proyecto de TypeScript a **JavaScript puro**. Aunque TypeScript ofrece seguridad de tipos, JavaScript permite un desarrollo más ágil y directo en este contexto, eliminando la necesidad de compilación intermedia y simplificando la estructura de archivos para el usuario. He mantenido comentarios JSDoc para preservar cierta claridad en la estructura de datos.
## 6. Resolución de Problemas

### Error de PostCSS con Tailwind v4
Se detectó un error al intentar usar `tailwindcss` directamente en PostCSS con la versión 4. Se solucionó migrando al plugin oficial `@tailwindcss/vite` en `vite.config.js` y eliminando `postcss.config.js`, lo cual es el camino recomendado para la v4.

### Error de exportación en Lucide-React
Se corrigió un `SyntaxError` relacionado con el icono de GitHub. En las versiones más recientes de `lucide-react` (0.400+), los iconos de marcas comerciales (como GitHub, LinkedIn, etc.) han sido eliminados por razones legales y de enfoque de la librería. He sustituido estos iconos por alternativas genéricas como `Code2` y `Terminal` para asegurar que la aplicación no falle, manteniendo una estética profesional y coherente.

## 7. Dinamismo en el Hero

### Carrusel de Soluciones
He decidido reemplazar las etiquetas estáticas de habilidades por un **carrusel de texto infinito**. Esta decisión se basa en el principio de "mostrar, no solo decir". En lugar de listar tecnologías, ahora mostramos soluciones concretas que el usuario ofrece (Arquitectura, IA, Consultoría), utilizando una animación suave de Framer Motion. Para mejorar el acabado premium, he aplicado una **máscara de degradado (mask-image)** que difumina el texto al entrar y salir del contenedor. Además, he configurado el carrusel para que sea **arrastrable (draggable)**, permitiendo a los visitantes interactuar con él manualmente. He implementado una lógica que detiene la animación al arrastrar y la **reanuda automáticamente** al soltar, manteniendo el flujo infinito de soluciones con una estética limpia y minimalista dentro de la temática oscura.

## 8. Accesibilidad y Navegación

### Botones de Acción en el Hero
Para mejorar la **accesibilidad (UX)**, he añadido botones prominentes en la parte inferior de la sección Hero. Esta decisión responde a la necesidad de facilitar al usuario el acceso a las secciones clave (Proyectos y Habilidades) sin depender únicamente de la barra de navegación superior. Estos botones utilizan el estilo `sketchy-border` para mantener la coherencia visual y cuentan con estados de hover diferenciados para una respuesta clara al usuario.

## 9. Tono y Perfil Profesional

### Profesionalización de Títulos
He decidido sustituir los títulos de sección con nombres de fantasía (como "Conocimientos Arcanos") por términos industriales estándar (**"Habilidades Técnicas"**, **"Proyectos Destacados"**, etc.). Esta decisión busca equilibrar la estética visual única del portafolio con la seriedad que requiere una presentación profesional ante reclutadores y clientes, asegurando que la información sea fácil de identificar a primera vista.

### Sección "Sobre Mí" (Perfil Profesional)
He implementado una sección de **Sobre Mí** que sintetiza la trayectoria del usuario. Además, he añadido un bloque específico titulado **"¿Cómo puedo ayudar a tu empresa?"**. Esta decisión estratégica busca transformar el perfil de un "listado de habilidades" en una "propuesta de valor", comunicando directamente beneficios tangibles como la escalabilidad, la integración de IA y la eficiencia operativa.

## 10. Arquitectura Multi-vista (SPA)

### Separación de la sección "Conóceme"
He decidido implementar un sistema de **navegación basada en estados** utilizando el hook `useState` de React y `AnimatePresence` de Framer Motion. Esta decisión permite separar el contenido informativo detallado ("Sobre Mí" y propuesta de valor) de la página principal de proyectos. Esto beneficia la experiencia de usuario (UX) al evitar el scroll infinito y permitir que el visitante se enfoque en una sola narrativa a la vez (Portfolio vs. Perfil Personal), manteniendo la fluidez y la estética sombría mediante transiciones horizontales animadas.

## 11. Identidad Visual (Logo)

### Implementación de LogoSVG
He decidido sustituir el logo de texto simple por un **componente SVG personalizado (`LogoSVG`)**. El diseño consiste en una llama estilizada con trazos irregulares y efectos de parpadeo, siguiendo la técnica de dibujo a mano. Esta decisión refuerza la temática de supervivencia y creatividad ("la chispa del código") y proporciona un punto de interés visual inmediato en la barra de navegación, elevando la calidad percibida de la marca personal.

## 12. Refactorización y Arquitectura (SOLID)

### Aplicación de Responsabilidad Única (SRP)
He realizado una refactorización profunda de `App.jsx` para mejorar la **mantenibilidad y legibilidad**. He extraído las secciones a componentes independientes:
- **`layout/`**: `Navbar` y `Footer` (Estructura global).
- **`sections/`**: `Hero`, `ProjectsSection`, `SkillsSection` y `SolutionsCarousel` (Bloques de contenido).
- **`views/`**: `AboutView` (Lógica de vista independiente).

Esta decisión permite que `App.jsx` actúe únicamente como un **Orquestador**, delegando la lógica visual a componentes especializados. Esto facilita la edición de secciones específicas sin riesgo de afectar el resto de la aplicación y cumple con los estándares de ingeniería de software modernos.

## 13. Pulido de UI y Experiencia de Usuario

### Mejora del Formulario de Contacto
He rediseñado la sección de contacto para que sea visualmente más impactante. He pasado de un gris genérico a un tono **pergamino cálido (`#f2ead3`)**, mejorado el contraste de los campos y añadido detalles narrativos como la "mancha de café". El formulario ahora se siente como un objeto físico dentro del mundo del portafolio, pero con campos de entrada claros y profesionales.

### Navbar Compacto y Profesional
He rediseñado el Navbar para que sea mucho más **compacto y funcional** en escritorio. He reducido la altura de la barra (`py-6`), ajustado el logo a una escala más elegante (`scale-110`) y optimizado los espaciados entre enlaces. Además, he añadido una sutil línea inferior de separación y un fondo con mayor opacidad (`bg-ds-black/80`) para asegurar que la navegación sea clara y profesional sin robarle protagonismo al contenido principal.

### Corrección de Responsividad del Navbar
Tras observar problemas de solapamiento en móviles, he ajustado dinámicamente las dimensiones del Navbar. He reducido la escala del logo (`scale-90`) y los espaciados (`gap-4`) en pantallas pequeñas. Además, he implementado una **etiqueta inteligente** que cambia "Conóceme" por "Perfil" en móviles muy estrechos para evitar que el texto se amontone, asegurando una navegación limpia sin perder el estilo expansivo en escritorio.

## 18. Acceso Directo y Conectividad Social

### Enlaces de Contacto en el Hero
Para maximizar la conversión y facilitar el contacto inmediato, he añadido una fila de **enlaces sociales (LinkedIn, GitHub y Email)** directamente en la sección Hero. Estos enlaces utilizan iconos de `lucide-react` y tipografía `font-mono` para mantener el estilo de "desarrollador". He implementado efectos de escalado suave y cambio de color en hover para invitar a la interacción sin saturar visualmente la bienvenida.

## 15. Interactividad y Feedback Visual Avanzado

### Estados de Clic y Hover
He perfeccionado la respuesta visual de las tarjetas de proyecto añadiendo estados **"active" y "tap"**. Ahora, la imagen no solo se ilumina al pasar el mouse, sino que alcanza su máxima saturación y brillo al hacer clic, proporcionando una confirmación táctil inmediata.

### Legibilidad y Contexto
He mejorado la presentación de la descripción de los proyectos. Ahora cuenta con un **tamaño de fuente mayor (`text-base`)** y un borde lateral decorativo que la separa visualmente del título, permitiendo que el usuario entienda rápidamente el valor de cada proyecto. Además, he aumentado el límite de líneas visibles (`line-clamp-3`) para ofrecer más contexto sin romper el diseño de cuadrícula.

### Optimización de Respuesta Visual (Hover Fix)
Tras detectar que el efecto de hover no era lo suficientemente evidente en todos los entornos, he reestructurado las capas de las tarjetas. He implementado una **capa de oscurecimiento dedicada (`z-20`)** que se desvanece suavemente mediante `opacity`, asegurando que la transición a color de la imagen sea inmediata y no dependa únicamente de filtros complejos de Tailwind, asegurando una respuesta táctil y visual perfecta.

## 17. Navegación Global y Refactorización del Navbar

### Navbar Global y Smooth Scroll
He transformado el Navbar en un componente **global y persistente**. Ahora, independientemente de la vista en la que se encuentre el usuario ("Home" o "Conóceme"), todas las opciones de navegación están disponibles. He implementado una función `handleNavClick` que orquesta de forma inteligente el cambio de vistas y el desplazamiento suave (`smooth scroll`) hacia las secciones específicas (`#projects`, `#skills`, `#contact`).

### Minimalismo y Consistencia
Siguiendo el feedback del usuario, he realizado los siguientes ajustes estéticos:
- **Eliminación de Iconos**: He quitado los iconos que acompañaban a los textos para evitar que el diseño se vea sobrecargado o "desconfigurado", priorizando la limpieza visual de las fuentes JetBrains Mono e Inter.
- **Unificación de Estilos**: He igualado el estilo del botón "Contacto" con el resto de los enlaces de navegación, eliminando los bordes decorativos anteriores para lograr una barra de navegación homogénea, profesional y equilibrada.

### Estados Activos e Interacción
He implementado una detección automática de secciones mediante `IntersectionObserver`. Ahora, el Navbar resalta automáticamente la sección que el usuario está viendo mientras hace scroll. Además, he corregido el problema del scrollbar horizontal en el Navbar, asegurando que todos los elementos encajen perfectamente sin barras de desplazamiento intrusivas.

## 16. Tipografía y Legibilidad Profesional

### Cambio a JetBrains Mono e Inter
Atendiendo a la solicitud de mejorar la legibilidad y buscando un estilo similar a **Cascadia Code**, he migrado el sistema tipográfico a:
- **`JetBrains Mono`**: Utilizada para elementos técnicos, etiquetas y el estilo "serif" que antes era más ornamental. También se ha aplicado a los **títulos de las tarjetas de proyecto** para asegurar una legibilidad máxima y una estética de ingeniería coherente en todo el flujo de trabajo del usuario.
- **`Inter`**: Implementada como fuente principal para el cuerpo del texto (`body`), asegurando que las descripciones largas y los formularios sean extremadamente fáciles de leer en cualquier pantalla.
- **`Grenze Gotisch`**: Se mantiene únicamente para los títulos principales para no perder la identidad visual "Don't Starve" del proyecto.

## 14. Dinamismo y Responsividad Extrema

### Animación de Fuego en LogoSVG
Para añadir un nivel extra de inmersión, he implementado una **animación de fuego constante** en el logo. Utilizando `scaleY`, `skewX` y parpadeos de `opacity`, la llama ahora tiene un comportamiento orgánico y vibrante que simula una antorcha real, reforzando la identidad visual "viva" del portafolio.

### Navbar Adaptativo
He realizado un ajuste exhaustivo de las dimensiones del Navbar para dispositivos móviles. He reducido los espaciados (`gap-4`) y tamaños de fuente, además de implementar visibilidad condicional (`hidden sm:block`) para elementos secundarios como el subtítulo del logo. Esto garantiza que la navegación sea cómoda y no se desborde incluso en los teléfonos más pequeños.

## 19. Rediseño de Tarjetas de Proyecto (Premium Gothic)

### Eliminación del efecto "Chueco" (Sketchy Border)
Tras el feedback del usuario sobre la apariencia "chueca" de las tarjetas, he decidido eliminar la clase `.sketchy-border` que aplicaba bordes irregulares. Esta decisión se basa en la necesidad de proyectar una imagen de **precisión y profesionalismo**. Aunque el estilo irregular era coherente con la temática, afectaba negativamente la percepción de calidad y la alineación visual de la cuadrícula.

### Contraste y Acento Dorado (Gold Contrast)
Para resolver problemas de contraste contra el fondo negro profundo, he introducido el color `ds-gold` (#d4af37). Este tono dorado gótico no solo mejora la visibilidad de los títulos y etiquetas, sino que también refuerza la estética de "pergamino y oro" del portafolio.

### Resplandor Difuminado (Glow Effect)
Atendiendo a la solicitud del usuario, he aplicado un **resplandor dorado difuminado (`ds-glow-gold`)** a las tarjetas. A diferencia del spotlight anterior, este efecto es más suave y constante, proporcionando una separación clara entre la tarjeta y el fondo sin resultar intrusivo, logrando ese acabado "premium" y misterioso.

### Refinamiento de Animaciones y Estructura
- **Alineación Perfecta**: He vuelto a una estructura rectangular limpia con bordes sutiles de color carbón (`ds-charcoal/50`) y un fondo con degradado radial.
- **Micro-interacciones**: He ajustado las transiciones de `framer-motion` para que el levantamiento de la tarjeta sea más fluido (`easeOut`) y elegante.
- **Detalles Ornamentales**: He sustituido los bordes gruesos por líneas de esquina minimalistas que aparecen al hacer hover, reforzando la estética gótica sin comprometer la limpieza del diseño.
- **Optimización de Contenido**: He reorganizado el layout interno para que las imágenes, títulos y tags tengan un respiro visual equilibrado, mejorando la jerarquía de la información.

## 20. Tipografía Técnica Avanzada (Cascadia Code)

### Integración de Cascadia Code
Para reforzar la identidad de "desarrollador de software" y por preferencia del usuario, he integrado la fuente **Cascadia Code** para los subtítulos de la sección de habilidades. Esta fuente, diseñada por Microsoft para terminales y editores de código, proporciona una estética moderna y técnica que contrasta perfectamente con la fuente gótica de los títulos principales, creando un equilibrio entre lo narrativo/gótico y lo profesional/tecnológico. He configurado un fallback hacia **JetBrains Mono** para asegurar la consistencia en sistemas donde Cascadia no esté presente.

## 21. Dinamismo y Visibilidad de Contacto (Social Breathing)

### Animación de Respiración (Breathing)
Para asegurar que los puntos de contacto (LinkedIn, GitHub, Email) no pasen desapercibidos, he implementado una **animación de respiración** sutil mediante opacidad. He aplicado retardos escalonados (`animation-delay`) a cada enlace para crear un efecto visual orgánico y fluido que atrae la mirada del usuario de forma no intrusiva.

### Refuerzo del Acento Dorado
He sustituido el color de acento anterior por **`ds-gold`** en estos enlaces. Además de mejorar el contraste, he añadido un efecto de **resplandor dorado (drop-shadow)** al pasar el mouse, lo que proporciona un feedback visual de alta calidad y refuerza la identidad "Premium Gothic" del Hero. También he migrado estos textos a la fuente **Cascadia Code** para mantener la coherencia con el estilo técnico del resto del portafolio.

## 22. Consistencia Técnica en Títulos de Proyectos

### Uso de Cascadia Code para Proyectos
Siguiendo mi objetivo de dotar al portafolio de una estética de ingeniería de software premium, he decidido aplicar la fuente **Cascadia Code** a los títulos de cada proyecto dentro de las tarjetas. Esta decisión refuerza el contraste entre la temática "Don't Starve" (representada por la fuente gótica de los encabezados de sección) y la naturaleza técnica de mi trabajo como desarrollador. Al usar una fuente de terminal para los nombres de los proyectos, comunico de forma subliminal que cada tarjeta representa un fragmento de código o una solución técnica real, mejorando la coherencia visual con el resto de elementos `mono` del sitio.

## 23. Dinamismo Atmosférico: Estrellas Fugaces

### Implementación de ShootingStars (Refinada)
Basándome en el feedback sobre la naturalidad del efecto, he refactorizado la lógica de generación. He sustituido el intervalo fijo por un **timeout recursivo con retrasos variables (4-10 segundos)**, lo que evita la aparición simultánea de múltiples estrellas y hace que el evento sea verdaderamente ocasional. Además, he acelerado la animación CSS y reducido el tamaño de la estela para lograr un efecto más sutil y "premium" que se integra mejor con el fondo de partículas sin distraer al usuario.

## 24. Identidad Visual: Icono Personalizado (Favicon)

### Creación del Favicon
He decidido generar e implementar un **nuevo icono personalizado** para la pestaña del navegador. Siguiendo la estética de "llama gótica" que ya utilizábamos en el logo principal, este nuevo icono ha sido diseñado con un estilo de trazo de carbón y alto contraste. Esta decisión busca unificar la experiencia de marca desde el momento en que el usuario ve la pestaña de su navegador, asegurando que el portafolio se sienta como un producto completo, profesional y cuidado en cada detalle visual. He migrado del formato SVG genérico a un PNG de alta resolución para asegurar una representación fiel del estilo artístico "sketchy".

## 25. Navegación Móvil: Menú Hamburguesa

### Implementación del Menú Lateral (Refinada)
Tras el feedback sobre la transparencia y la obstrucción de la sección Hero, he decidido refactorizar el menú móvil a una **barra lateral (sidebar) sólida**. He sustituido el overlay centrado por un diseño que se desliza desde la derecha, utilizando un fondo `bg-ds-black` casi opaco para garantizar la legibilidad. He añadido una **capa de atenuación (backdrop)** con desenfoque suave para separar visualmente el menú del contenido principal. Esta estructura no solo es más común y cómoda en dispositivos móviles, sino que también refuerza la jerarquía visual del portafolio al tratar el menú como una capa superior e independiente.
