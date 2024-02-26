sequenceDiagram
participant navegador
participant servidor

    navegador->>servidor: GET https:https://studies.cs.helsinki.fi/exampleapp/spa
    activate servidor
    servidor-->>navegador: Documento HTML
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate servidor
    servidor-->>navegador: Archivo CSS
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate servidor
    servidor-->>navegador: Archivo JavaScript
    deactivate servidor

    Note over navegador,servidor: El navedor ejecuta los archivos
