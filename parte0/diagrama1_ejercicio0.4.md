sequenceDiagram
participant navegador
participant servidor

    navegador->>servidor: CLICK: El navegador envia la entrada del usuario al servidor
    activate servidor
    servidor-->>navegador: POST: El servidor responde con el código de estado HTTP 302
    deactivate servidor

    Note right of servidor:  Se trata de una redirección de URL, con la que el servidor solicita al navegador que realice una nueva solicitud HTTP GET a la dirección definida en la Ubicación (Location) del encabezado - la dirección notes.



    navegador->>servidor: El navegador vuelve a cargar la pagina de notas
    activate servidor
    navegador->>servidor: HTTP: La recarga provoca tres solicitudes HTTP más obtener la hoja de estilo (main.css), el código JavaScript (main.js) y los datos sin procesar de las notas (data.json).
    activate servidor


    Note right of servidor: The browser starts executing the JavaScript code that fetches the JSON from the server
