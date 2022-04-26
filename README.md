# Controlador web para Relé
Proyecto de aprendizaje, se trata se una aplicación para controlar un Relé desde una interfaz web.

# Arquitectura
- Backend: MVC (Modelo Vista Controlador)
    * Modelos -> Response.js -> Clase que representa una respuesta
    * Controlador -> relay-controller.js -> Clase para crear y manipular la instancia de un Relé
    * Vista (Router) -> index.js -> Se trata de una clase que recibe las peticiones del cliente y las procesa
    * Index.js -> instancia el servidor junto con el Arduino que va a controlar el relé
- Forntend: Vue.js componentes por defecto (Para este ejercicio no se necesita más)

# Código
- Backend: Javascript (Node.js, express, johnny-five)
- Frontend: Javascript (Vue.js)

# Circuito para el Relé

![](http://johnny-five.io/img/breadboard/relay-open.png)

# Nota:
En las respectivas carpetas podrás ver los comando que se necesitan para correr ambos proyectos y una, guía de como se desarrolló y como puede llegar a mejorarse.

# Objetivos
- Aprender como funciona un relé
- Manipular circuitos
- Mejorar habilidades de desarrollo

# Integrantes: 
- David Argote
- Diego Andrés de Jesús
- Maria Orozco

Corporación Universitaria Unicomfacauca
