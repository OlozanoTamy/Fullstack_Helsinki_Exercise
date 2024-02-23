sequenceDiagram
participant navegador
participant servidor

    navegador->>servidor: CLICK: El navegador envia solo una solicitud POST 201
    activate servidor

    Note right of servidor:  POST a la dirección new_note_spa contiene la nueva nota como datos JSON que contienen tanto el contenido de la nota
    servidor-->>navegador: El servidor responde con el código de estado 201 Created
    deactivate servidor

    Note over navegador,servidor: Esta vez, el servidor no solicita una redirección, el navegador permanece en la misma página y no envía más solicitudes HTTP.
