ctividad: “Festival Tech del Futuro”
El ayuntamiento de una ciudad quiere organizar un Festival Tech para jóvenes: robótica, videojuegos, inteligencia artificial, realidad virtual y talleres de programación.
Tu empresa ha recibido el encargo de crear una página web informativa del evento.
La información principal del festival deberá estar guardada en un archivo XML validado con DTD, y la web se diseñará con HTML y CSS.
La idea es simular un caso real: una web muestra información que viene de datos estructurados. XML permite organizar datos de forma jerárquica, y DTD permite comprobar que esos datos siguen unas reglas concretas.

Crear un pequeño proyecto web formado por:
festival-tech/
 ├── index.html
 ├── estilos.css
 ├── festival.xml
 └── festival.dtd

Resultado final
Debeis entregar una página web con:
    • Título del festival
    • Imagen o banner principal
    • Descripción del evento

    • Lista de actividades
    -• Horarios
    • Lugar
    -• Precios
    • Formulario visual de inscripción
    • Diseño con CSS
    • Archivo XML bien formado
    • Archivo DTD que valide el XML

Parte 1: Crear el archivo XML
Archivo: festival.xml
El XML debe guardar la información del festival:
    • nombre del festival
    • ciudad
    • fecha
    • lugar
    • actividades
    • precio
    • contacto

Ejemplo base:

<festival>
    <nombre>Festival Tech del Futuro</nombre>
    <ciudad>Barcelona</ciudad>
    <fecha>2026-05-18</fecha>
    <lugar>Centro Joven Digital</lugar>
    <actividades>
        <actividad id="a1" tipo="robotica">
            <titulo>Batalla de Robots</titulo>
            <descripcion>Competición de robots diseñados por estudiantes.</descripcion>
            <hora>10:00</hora>
            <precio>Gratis</precio>
        </actividad>
        <actividad id="a2" tipo="videojuegos">
            <titulo>Torneo Gaming Retro</titulo>
            <descripcion>Competición de videojuegos clásicos y actuales.</descripcion>
            <hora>12:00</hora>
            <precio>3€</precio>
        </actividad>
        <actividad id="a3" tipo="ia">
            <titulo>Taller de Inteligencia Artificial</titulo>
            <descripcion>Aprende cómo funciona una IA creando un pequeño chatbot.</descripcion>
            <hora>16:00</hora>
            <precio>5€</precio>
        </actividad>
    </actividades>
    <contacto>
        <email>info@festivaltech.com</email>
        <telefono>666555444</telefono>
    </contacto>
</festival>    

Parte 2: Crear la DTD
Archivo: festival.dtd

<!ELEMENT festival (nombre, ciudad, fecha, lugar, actividades, contacto)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT ciudad (#PCDATA)>
<!ELEMENT fecha (#PCDATA)>
<!ELEMENT lugar (#PCDATA)>
<!ELEMENT actividades (actividad+)>
<!ELEMENT actividad (titulo, descripcion, hora, precio)>
<!ATTLIST actividad id ID #REQUIRED>
<!ATTLIST actividad tipo (robotica | videojuegos | ia | realidad_virtual | programacion) #REQUIRED>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT descripcion (#PCDATA)>
<!ELEMENT hora (#PCDATA)>
<!ELEMENT precio (#PCDATA)>
<!ELEMENT contacto (email, telefono)>
<!ELEMENT email (#PCDATA)>
<!ELEMENT telefono (#PCDATA)>

Parte 3: Comprobar la validación
Debeis probar errores intencionados:
Prueba 1
Borrar el atributo id de una actividad.
Debe dar error porque en la DTD aparece como obligatorio:
<!ATTLIST actividad id ID #REQUIRED>
Prueba 2
Cambiar el orden de los elementos:
<descripcion>...</descripcion>
<titulo>...</titulo>
Debe dar error porque la DTD exige:
<!ELEMENT actividad (titulo, descripcion, hora, precio)>
Prueba 3
Poner un tipo no permitido:
<actividad id="a4" tipo="musica">
Debe dar error porque musica no está en la enumeración.

Parte 4: Crear la página HTML
Archivo: index.html


Parte 5: Crear el CSS
Archivo: estilos.css

Parte 6: Relación entre XML y web
Responder:
    1. ¿Qué información aparece tanto en el XML como en la web?
    2. ¿Por qué podría ser útil guardar los datos en XML?
    3. ¿Qué comprueba la DTD?
    4. ¿Qué ocurre si cambio el orden de los elementos?
    5. ¿Qué ventaja tiene usar atributos como id o tipo?

Parte 7: Mejoras opcionales
Elige una:
Nivel extra 1
Añadir una cuarta actividad al XML y a la web.
Nivel extra 2
Añadir una nueva categoría permitida en la DTD:
ciberseguridad
Nivel extra 3
Mejorar el diseño con:
    • iconos
    • colores propios
    • imagen de fondo
    • tarjetas con hover
    • menú de navegación

Entrega final
Entregar una carpeta comprimida con:
festival-tech.zip
 ├── index.html
 ├── estilos.css
 ├── festival.xml
 └── festival.dtd

Errores que deben evitar
    • No cerrar etiquetas XML.
    • Poner más de un elemento raíz.
    • Cambiar el orden definido en la DTD.
    • Usar un valor de atributo no permitido.
    • No enlazar correctamente la DTD.
    • Poner archivos en carpetas distintas sin ajustar la ruta.

Herramientas recomendadas
    • Visual Studio Code
    • Extensión: XML Language Support by Red Hat
    • Navegador web
    • Validador XML online si VS Code no muestra errores
Producto final esperado
Una pequeña web visual y atractiva de un festival tecnológico, acompañada de un XML validado con DTD que contiene los datos principales del evento.