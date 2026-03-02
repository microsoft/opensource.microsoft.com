opensource.microsoft.com
El opensource.microsoft.comsitio web es un sitio web simple y basado en hechos que comparte información sobre el programa de código abierto de Microsoft, el ecosistema de código abierto que apoyamos y las oportunidades para participar en proyectos y aprender más.

El sitio es generado por Jekyll, un popular generador de sitios estáticos de código abierto implementado en Ruby (Jekyll impulsa las páginas de GitHub). Se implementa en Microsoft Azure dentro de un clúster de Linux Azure Kubernetes Service (AKS) y también hace uso de Azure Front Door y Azure CDN. Los datos dinámicos se recuperan a través de un backend de Node.js implementado en TypeScript.

Creado por Microsoft Open Source Programs Office (OSPO), parte del equipo de One Engineering System (1ES), lanzamos el sitio en agosto de 2020, reemplazando una versión anticuada. Esperamos que los equipos de Microsoft realicen actualizaciones y contribuciones al sitio para presentar proyectos nuevos e interesantes, actualizar las publicaciones de blog seleccionadas y mejorar las páginas del programa y el ecosistema.

Actualmente no tenemos planes de agregar secciones drásticamente diferentes al sitio o de ser la "fuente de la verdad" para publicaciones de blogs u otro contenido. Podemos aceptar algunas contribuciones o sugerencias coordinadas, pero solicitamos la coordinación de los problemas antes de embarcarnos en una nueva funcionalidad, ya que el sitio tiene un conjunto de requisitos que cumplir, como ser accesible a WCAG 2.1 e implementarlo en la nube de Microsoft.

La navegación del sitio principal es:

Descripción general de la página de inicio
Involucrarse
Proyectos
Ecosistema
Nuestro programa
Otro contenido incluye:

Empleos (un enlace externo)
Blog (un enlace externo)
Texto del Código de conducta
una página de agradecimiento sobre el código abierto que impulsa el proyecto
Contribuyendo
Código de conducta
Este proyecto ha adoptado el Código de conducta de código abierto de Microsoft . Para obtener más información, consulte las preguntas frecuentes sobre el Código de conducta o póngase en contacto con opencode@microsoft.com si tiene preguntas o comentarios adicionales.

CLA
Este proyecto agradece contribuciones y sugerencias. La mayoría de las contribuciones requieren que acepte un Acuerdo de licencia de colaborador (CLA) que declara que tiene derecho a otorgarnos, y que realmente lo hace, los derechos para utilizar su contribución. Para obtener más información, visite https://cla.opensource.microsoft.com .

Cuando envía una solicitud de extracción, un bot de CLA determinará automáticamente si necesita proporcionar un CLA y decorar el PR de manera adecuada (por ejemplo, verificación de estado, comentario). Simplemente siga las instrucciones proporcionadas por el bot. Solo necesitará hacer esto una vez en todos los repositorios usando nuestro CLA.

Escenarios de contribución
Gracias por su interés en contribuir al sitio web https://opensource.microsoft.com . Asegúrese de comunicar cualquier idea de contribución como un problema antes de iniciar una solicitud de extracción. Nos encantaría ver cuál es la mejor manera de involucrarlo.

Estamos contentos de que este sitio sea de código abierto (porque un sitio sobre código abierto debe ser de código abierto).

Como un sitio público alojado en microsoft.com, es posible que no podamos aceptar contribuciones generales a este sitio, por lo que su solicitud de extracción puede cerrarse y no fusionarse, incluso si es excelente, y es posible que no podamos proporcionar un contexto completo para ninguna tal decisión.

Gracias por su comprensión.

Marcas comerciales
Este proyecto puede contener marcas comerciales o logotipos de proyectos, productos o servicios. El uso autorizado de las marcas comerciales o logotipos de Microsoft está sujeto y debe seguir las Pautas de marcas comerciales y marcas comerciales de Microsoft . El uso de marcas comerciales o logotipos de Microsoft en versiones modificadas de este proyecto no debe causar confusión ni implicar el patrocinio de Microsoft. Cualquier uso de marcas comerciales o logotipos de terceros está sujeto a las políticas de dichos terceros.

Telemetría
De forma predeterminada, este proyecto no incluye telemetría ; sin embargo, las acciones de GitHub pueden generar la versión de producción del sitio sin modificaciones.

Cuando el entorno de compilación de Jekyll se establece en el nombre del entorno de producción de Microsoft - "opensource.microsoft.com" - el código de análisis y cumplimiento de cookies estándar de Microsoft para conectarse con Application Insights se incluye en el sitio.

Recolección de datos . El software puede recopilar información sobre usted y su uso del software y enviarla a Microsoft. Microsoft puede utilizar esta información para proporcionar servicios y mejorar nuestros productos y servicios. Puede desactivar la telemetría como se describe en el repositorio. También hay algunas funciones en el software que pueden permitirle a usted y a Microsoft recopilar datos de los usuarios de sus aplicaciones. Si utiliza estas funciones, debe cumplir con la ley aplicable, incluida la notificación correspondiente a los usuarios de sus aplicaciones junto con una copia de la declaración de privacidad de Microsoft. Nuestra declaración de privacidad se encuentra en https://go.microsoft.com/fwlink/?LinkID=824704. Puede obtener más información sobre la recopilación y el uso de datos en la documentación de ayuda y nuestra declaración de privacidad. Su uso del software opera como su consentimiento a estas prácticas.
Desarrollo
Desarrollando con Codespaces
Ejecute estos comandos en su espacio de código:

manojo
npm install
paquete exec jekyll serve
Luego, el editor debe indicarle que vaya al puerto reenviado para realizar la prueba.

Desarrollando localmente
Asegúrese de tener una copia funcional de Ruby, Node.js y Gulp.

manojo
npm install
trago
paquete exec jekyll serve
El Dockerfileestá disponible para albergar un local de nginxversión del sitio estático, aunque las características del sitio dinámicas no están disponibles cuando se ejecuta local y Gulp no está actualmente funcionan en el contenedor.

Acciones de GitHub
Este repositorio utiliza acciones de GitHub para varios propósitos.

Construir
La compilación principal de la main rama crea la versión estática del sitio y la almacena como un artefacto. Esto se hace utilizando un contenedor Docker específico para este entorno de compilación inc. Ruby Gems, paquetes de nodo, etc.

Solicitudes de extracción
Se puede configurar una puesta en escena separada para usar una versión de este sitio, si un mantenedor del proyecto lo aprueba, usando un comentario que incluya la frase /startContentBuild.
