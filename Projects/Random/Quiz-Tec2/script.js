const quizData = {
    "Protocolo IP y Hello": [
        {
            question: "El protocolo IP garantiza la entrega de los paquetes, comprobando que todos los fragmentos lleguen correctamente al destino antes de reconstruir el mensaje.",
            options: ["Verdadero", "Falso"],
            correct: 1,
            explanation: "Falso. El protocolo IP es no confiable y no garantiza la entrega."
        },
        {
            question: "¿Cuál de las siguientes afirmaciones describe correctamente la diferencia entre IPv4 e IPv6?",
            options: [
                "IPv4 utiliza direcciones de 64 bits e IPv6 de 128 bits",
                "IPv4 usa direcciones de 32 bits e IPv6 de 128 bits",
                "IPv4 y IPv6 usan el mismo tamaño de dirección pero distinto formato",
                "IPv6 fue diseñado solo para redes locales"
            ],
            correct: 1,
            explanation: "IPv4 usa direcciones de 32 bits e IPv6 de 128 bits."
        },
        {
            question: "La cabecera de un paquete IP contiene información sobre el origen, destino, longitud total, identificación y control de fragmentación.",
            options: ["Verdadero", "Falso"],
            correct: 0,
            explanation: "Verdadero. Toda esta información está en la cabecera IP."
        },
        {
            question: "¿Qué sucede si un router necesita fragmentar un paquete, pero el flag D (Don't Fragment) está activado en 1?",
            options: [
                "El router lo fragmenta igual, para evitar pérdida de información",
                "El router lo descarta y puede enviar un mensaje ICMP al origen",
                "El router lo reenvía sin cambios al siguiente nodo",
                "El router lo almacena hasta que el flag cambie a 0"
            ],
            correct: 1,
            explanation: "El router lo descarta y puede enviar un mensaje ICMP al origen."
        },
        {
            question: "¿Cuál de los siguientes campos del encabezado IP se usa para evitar que un paquete quede circulando indefinidamente por la red?",
            options: [
                "Checksum",
                "Protocolo de Transporte",
                "Tiempo de Vida (TTL)",
                "Longitud Total"
            ],
            correct: 2,
            explanation: "Tiempo de Vida (TTL) - se decrementa en cada salto."
        },
        {
            question: "¿Qué es un mensaje Hello?",
            options: [
                "Un mensaje que inicia la comunicación entre routers o dispositivos vecinos",
                "Un mensaje que actualiza las rutas activas",
                "Un mensaje de error de red",
                "Un mensaje que transmite datos de usuario"
            ],
            correct: 0,
            explanation: "Un mensaje que inicia la comunicación entre routers o dispositivos vecinos."
        },
        {
            question: "¿Qué dato importante contiene un mensaje Hello para establecer una conexión?",
            options: [
                "El nombre del protocolo",
                "El tiempo de espera o 'dead interval'",
                "El tamaño del paquete",
                "La dirección del servidor DNS"
            ],
            correct: 1,
            explanation: "El tiempo de espera o 'dead interval'."
        },
        {
            question: "¿Qué sucede si los mensajes Hello no coinciden entre dos routers vecinos?",
            options: [
                "La conexión se establece de todos modos",
                "No se forma la vecindad entre ellos",
                "Se reinicia el protocolo completo",
                "Se duplican los mensajes"
            ],
            correct: 1,
            explanation: "No se forma la vecindad entre ellos."
        },
        {
            question: "¿Por qué es importante la frecuencia de envío de los mensajes Hello?",
            options: [
                "Porque determina qué tan rápido se detectan fallos en la conexión",
                "Porque mejora la velocidad del Wi-Fi",
                "Porque reduce el tamaño del mensaje",
                "Porque cambia el tipo de cable usado"
            ],
            correct: 0,
            explanation: "Porque determina qué tan rápido se detectan fallos en la conexión."
        },
        {
            question: "Si un mensaje Hello es 'flexible' o 'dinámico', significa que:",
            options: [
                "Se adapta a la carga o velocidad de la red para ajustar su frecuencia",
                "Tiene más colores en su interfaz",
                "Solo se envía una vez por hora",
                "No requiere configuración"
            ],
            correct: 0,
            explanation: "Se adapta a la carga o velocidad de la red para ajustar su frecuencia."
        }
    ],
    "Protocolo TCP y NTP": [
    {
        question: "TCP garantiza entrega fiable y en orden de los datos y es orientado a la conexión.",
        options: ["Verdadero", "Falso"],
        correct: 0,
        explanation: "Verdadero. TCP es un protocolo orientado a conexión que garantiza entrega confiable y ordenada."
    },
    {
        question: "NTP utiliza por defecto el puerto TCP 123 para su comunicación.",
        options: ["Verdadero", "Falso"],
        correct: 1,
        explanation: "Falso. NTP utiliza UDP 123, no TCP."
    },
    {
        question: "En el encabezado TCP, el Número de Secuencia y el Número de Reconocimiento son campos clave para asegurar el orden y la confiabilidad.",
        options: ["Verdadero", "Falso"],
        correct: 0,
        explanation: "Verdadero. Estos campos son esenciales para el control de orden y confiabilidad en TCP."
    },
    {
        question: "TCP por sí solo no cifra el tráfico; para confidencialidad debe combinarse con TLS/SSL.",
        options: ["Verdadero", "Falso"],
        correct: 0,
        explanation: "Verdadero. TCP no proporciona cifrado, se necesita TLS/SSL para confidencialidad."
    },
    {
        question: "chrony se presenta como una alternativa moderna a ntpd, especialmente útil en entornos virtualizados.",
        options: ["Verdadero", "Falso"],
        correct: 0,
        explanation: "Verdadero. chrony es una alternativa moderna y eficiente a ntpd."
    },
    {
        question: "¿Cuál es el puerto estándar usado por NTP?",
        options: [
            "UDP 53",
            "UDP 123",
            "TCP 80",
            "TCP 443"
        ],
        correct: 1,
        explanation: "UDP 123 es el puerto estándar de NTP."
    },
    {
        question: "¿Qué mecanismo describe el establecimiento de conexión en TCP?",
        options: [
            "Handshake de dos vías",
            "Saludo de tres vías (three-way handshake)",
            "Intercambio T1–T4",
            "ARP request/reply"
        ],
        correct: 1,
        explanation: "El three-way handshake (SYN, SYN-ACK, ACK) establece la conexión TCP."
    },
    {
        question: "¿Cuál de las siguientes es una característica de TCP (no de UDP)?",
        options: [
            "Sin conexión",
            "Mínima sobrecarga",
            "Control de flujo y congestión",
            "Entrega no ordenada"
        ],
        correct: 2,
        explanation: "TCP implementa control de flujo y congestión, a diferencia de UDP."
    },
    {
        question: "En NTP, ¿qué describe mejor la jerarquía de estratos?",
        options: [
            "Clientes primero, luego servidores",
            "Todos los nodos son estrato 1",
            "Relojes de referencia (estrato 0) → servidores primarios (estrato 1) → secundarios (estrato 2) → niveles inferiores (3+)",
            "No existen estratos en NTP"
        ],
        correct: 2,
        explanation: "NTP usa una jerarquía de estratos desde 0 (relojes de referencia) hasta niveles superiores."
    },
    {
        question: "¿Cuál de estas es una buena práctica para NTP en producción?",
        options: [
            "Usar un único servidor para simplificar",
            "Deshabilitar autenticación para reducir latencia",
            "Bloquear el puerto 123/UDP en el firewall",
            "Configurar múltiples servidores y habilitar autenticación donde sea crítico"
        ],
        correct: 3,
        explanation: "Múltiples servidores y autenticación son prácticas recomendadas para NTP en producción."
    }
    ],
    "Protocolos ARP, RARP e ICMP": [
    {
        question: "¿Cuál es la función principal del Protocolo de Resolución de Direcciones (ARP)?",
        options: [
            "Comprobar la conectividad entre dos hosts en diferentes redes",
            "Descubrir la dirección MAC de un dispositivo a partir de su dirección IP",
            "Asignar direcciones IP a los dispositivos en una red local",
            "Traducir un nombre de dominio (URL) a una dirección IP"
        ],
        correct: 1,
        explanation: "ARP descubre la dirección MAC de un dispositivo a partir de su dirección IP."
    },
    {
        question: "En un mecanismo de solicitud y respuesta ARP, ¿cuál es la dirección MAC de destino utilizada en el mensaje de Solicitud ARP?",
        options: [
            "La dirección MAC del host de destino",
            "Una dirección de broadcast (FF:FF:FF:FF:FF:FF)",
            "Una dirección IP de destino específica",
            "La dirección MAC del router de la red"
        ],
        correct: 1,
        explanation: "Las solicitudes ARP usan broadcast (FF:FF:FF:FF:FF:FF) para llegar a todos los dispositivos."
    },
    {
        question: "¿Cuál es la principal vulnerabilidad de seguridad de ARP que lo hace susceptible a ataques de 'spoofing'?",
        options: [
            "La falta de cifrado en los mensajes ARP",
            "Que opera bajo un modelo de 'confianza ciega' sin autenticación",
            "La necesidad de una caché ARP en cada dispositivo",
            "El uso de la dirección MAC de broadcast para las solicitudes"
        ],
        correct: 1,
        explanation: "ARP opera sin autenticación, confiando ciegamente en las respuestas recibidas."
    },
    {
        question: "¿Para qué se utiliza la caché ARP en los sistemas operativos?",
        options: [
            "Para almacenar las contraseñas y credenciales de acceso a la red",
            "Para almacenar las asociaciones IP-MAC y evitar enviar una solicitud ARP por cada paquete",
            "Para almacenar las direcciones MAC de todos los hosts en internet",
            "Para almacenar los paquetes IP que no se han podido entregar"
        ],
        correct: 1,
        explanation: "La caché ARP almacena asociaciones IP-MAC para evitar solicitudes repetidas."
    },
    {
        question: "En la mitigación de ataques de ARP Spoofing, ¿Cuál es el papel del 'DHCP Snooping'?",
        options: [
            "Actuar como un firewall de Capa 2 para crear una tabla de enlaces IP-MAC legítimos",
            "Limitar la cantidad de solicitudes ARP que un host puede enviar",
            "Enviar mensajes ARP falsos para confundir a los atacantes",
            "Bloquear todos los paquetes ARP que se reciben en la red"
        ],
        correct: 0,
        explanation: "DHCP Snooping actúa como firewall de Capa 2 creando tablas de enlaces legítimos."
    },
    {
        question: "¿Qué problema resolvió el RARP en las estaciones de trabajo?",
        options: [
            "Latencia",
            "Falta de memoria",
            "Seguridad",
            "TCP/IP"
        ],
        correct: 3,
        explanation: "RARP permitió a estaciones sin disco obtener su dirección IP, resolviendo problemas de configuración TCP/IP."
    },
    {
        question: "¿Para qué sirve principalmente el protocolo ICMP?",
        options: [
            "Para enviar correos electrónicos",
            "Para compartir archivos entre computadoras",
            "Para avisar errores y diagnosticar problemas en la red",
            "Para asignar direcciones IP automáticamente"
        ],
        correct: 2,
        explanation: "ICMP se usa para reportar errores y diagnosticar problemas en la red."
    },
    {
        question: "¿En qué capa del modelo OSI trabaja ICMP?",
        options: [
            "Aplicación",
            "Transporte",
            "Red",
            "Enlace de datos"
        ],
        correct: 2,
        explanation: "ICMP trabaja en la Capa 3 (Red) del modelo OSI."
    },
    {
        question: "¿Cuál de estas herramientas usa ICMP para funcionar?",
        options: [
            "Ping",
            "FTP",
            "HTTP",
            "SSH"
        ],
        correct: 0,
        explanation: "Ping utiliza mensajes ICMP Echo Request y Echo Reply."
    },
    {
        question: "¿Qué cambio importante trajo ICMPv6 respecto de ICMPv4?",
        options: [
            "Desaparece el ping",
            "Ahora también reemplaza al protocolo ARP mediante el NDP",
            "ICMPv6 solo funciona en redes locales",
            "ICMPv6 elimina los mensajes de error"
        ],
        correct: 1,
        explanation: "ICMPv6 incorpora NDP (Neighbor Discovery Protocol) que reemplaza a ARP."
    }
    ],
    "Protocolo RIP y OSPF": [
    {
        question: "¿Qué métrica utiliza RIP para determinar la mejor ruta hacia un destino?",
        options: [
            "Costo del enlace basado en el ancho de banda",
            "Tiempo de transmisión (latencia)",
            "Número de saltos (hops)",
            "Longitud de la máscara de subred"
        ],
        correct: 2,
        explanation: "RIP utiliza el número de saltos (hops) como métrica."
    },
    {
        question: "RIP utiliza el algoritmo Dijkstra para calcular las rutas más cortas.",
        options: ["Verdadero", "Falso"],
        correct: 1,
        explanation: "Falso. RIP usa el algoritmo Bellman-Ford, no Dijkstra."
    },
        {
        question: "¿Cuál es la función del Holddown Timer en RIP?",
        options: [
            "Impide aceptar nuevas rutas durante un tiempo tras detectar una caída",
            "Reinicia la tabla de enrutamiento en caso de error",
            "Sincroniza los temporizadores de los routers vecinos",
            "Incrementa la frecuencia de las actualizaciones"
        ],
        correct: 0,
        explanation: "El Holddown Timer previene la aceptación de rutas nuevas inmediatamente después de detectar una caída."
        },
    {
        question: "En OSPF, el router con la mayor prioridad es elegido como DR (Designated Router).",
        options: ["Verdadero", "Falso"],
        correct: 0,
        explanation: "Verdadero. El router con mayor prioridad (y mayor Router ID en caso de empate) se elige como DR."
    },
    {
        question: "¿Cuál de las siguientes no es una ventaja de OSPF frente a RIP?",
        options: [
            "Convergencia más rápida",
            "Escalabilidad en redes grandes",
            "Menor consumo de recursos",
            "Uso de costos basados en ancho de banda"
        ],
        correct: 2,
        explanation: "OSPF consume más recursos que RIP debido a su mayor complejidad."
    },
    {
        question: "¿Qué protocolo dentro de PPP se encarga de establecer y mantener la conexión entre dos dispositivos?",
        options: [
            "PAP",
            "CHAP",
            "LCP",
            "NCP"
        ],
        correct: 2,
        explanation: "LCP (Link Control Protocol) establece y mantiene la conexión en PPP."
    },
    {
        question: "El método de autenticación CHAP envía usuario y contraseña en texto plano.",
        options: ["Verdadero", "Falso"],
        correct: 1,
        explanation: "Falso. CHAP usa un sistema de desafío-respuesta con hash, no texto plano."
    },
    {
        question: "¿Qué tipo de mensaje utiliza OSPF para descubrir y mantener comunicación con sus vecinos?",
        options: [
            "DBD (Database Description)",
            "Hello",
            "LSR (Link State Request)",
            "LSU (Link State Update)"
        ],
        correct: 1,
        explanation: "Los mensajes Hello se usan para descubrir y mantener vecindad en OSPF."
    },
    {
        question: "En OSPF, ¿qué tipo de LSA (Link-State Advertisement) es generado por cada router dentro de un área para informar sobre sus propios enlaces?",
        options: [
            "Tipo 1 – Router LSA",
            "Tipo 2 – Network LSA",
            "Tipo 3 – Summary LSA",
            "Tipo 5 – External LSA"
        ],
        correct: 0,
        explanation: "Tipo 1 (Router LSA) es generado por cada router para anunciar sus propios enlaces."
    },
    {
        question: "PPP pertenece a la capa de red (Capa 3) del modelo OSI.",
        options: ["Verdadero", "Falso"],
        correct: 1,
        explanation: "Falso. PPP pertenece a la capa de enlace de datos (Capa 2)."
    }
    ],
    "GGP-EGP": [
        {
            question: "¿Cuál es la principal diferencia de función entre GGP y EGP en la arquitectura de redes primitivas de DARPA/Internet?",
            options: [
                "GGP era para el enrutamiento interno dentro de un Sistema Autónomo (AS), mientras que EGP era para el enrutamiento externo entre Sistemas Autónomos",
                "GGP gestionaba la capa de transporte (TCP/UDP) y EGP gestionaba la capa de red (IP)",
                "GGP utilizaba métricas de retardo y ancho de banda, mientras que EGP solo usaba el número de saltos (hops)",
                "GGP fue un precursor de BGP, y EGP fue un precursor de OSPF"
            ],
            correct: 0,
            explanation: "GGP era para el enrutamiento interno dentro de un AS, mientras que EGP era para el enrutamiento externo entre Sistemas Autónomos."
        },
        {
            question: "El protocolo GGP utiliza una métrica de costo o ancho de banda para determinar la ruta más corta.",
            options: ["Verdadero", "Falso"],
            correct: 1,
            explanation: "Falso. GGP usa distancia en saltos (hops)."
        },
        {
            question: "¿Qué mecanismo utiliza GGP para garantizar la entrega confiable de sus mensajes de actualización de enrutamiento (Routing Updates) a los vecinos?",
            options: [
                "Un intercambio periódico de mensajes Hello/I-H-U, similar a EGP",
                "Un esquema de mensajes secuenciales, retransmisión y acuse de recibo (ACK/NACK)",
                "El uso exclusivo del protocolo TCP en la capa de transporte",
                "Un temporizador de espera (Hold-down timer) para evitar bucles"
            ],
            correct: 1,
            explanation: "Un esquema de mensajes secuenciales, retransmisión y acuse de recibo (ACK/NACK)."
        },
        {
            question: "La principal limitación de EGP que condujo a su reemplazo por BGP fue su arquitectura jerárquica y restringida a una estructura de árbol, que no era sostenible para el crecimiento de Internet.",
            options: ["Verdadero", "Falso"],
            correct: 0,
            explanation: "Verdadero. La estructura de árbol de EGP no era escalable."
        },
        {
            question: "¿Qué comando de mensajes periódico utiliza EGP para la fase de Mantenimiento y Monitoreo de la conectividad de los vecinos?",
            options: [
                "Request/Confirm",
                "Update/Poll",
                "Cease/Cease-Ack",
                "Hello/I-H-U (I Heard You)"
            ],
            correct: 3,
            explanation: "Hello/I-H-U (I Heard You)."
        },
        {
            question: "En GGP, ¿para qué se utiliza el algoritmo de 'K de N' (con valores típicos K=3 y N=4)?",
            options: [
                "Para calcular la distancia mínima a una red en la matriz de distancias",
                "Para determinar si un Routing Update recibido es más reciente que el almacenado",
                "Para determinar la conectividad con un vecino, declarándolo 'down' si no hay suficientes respuestas a los mensajes Echo",
                "Para establecer el Send Sequence Number inicial"
            ],
            correct: 2,
            explanation: "Para determinar la conectividad con un vecino, declarándolo 'down' si no hay suficientes respuestas a los mensajes Echo."
        },
        {
            question: "¿Cuál de los siguientes protocolos representa el reemplazo moderno de GGP y EGP, respectivamente?",
            options: [
                "EIGRP y OSPF",
                "OSPF/IS-IS y BGP",
                "RIPv2 y EGPv2",
                "IP y TCP"
            ],
            correct: 1,
            explanation: "OSPF/IS-IS y BGP."
        },
        {
            question: "GGP, como un protocolo de vector-distancia, era inmune al problema de 'Counting to infinity' (Conteo al infinito) porque fue diseñado solo para redes pequeñas (ARPANET).",
            options: ["Verdadero", "Falso"],
            correct: 1,
            explanation: "Falso. GGP no era inmune a este problema."
        },
        {
            question: "En EGP, ¿qué comando envía el gateway emisor al vecino para solicitar una actualización de su tabla de alcance de red, y qué respuesta espera?",
            options: [
                "Hello y espera un I-H-U",
                "Poll y espera un Update",
                "Request y espera un Confirm",
                "Error y espera un Cease"
            ],
            correct: 1,
            explanation: "Poll y espera un Update."
        },
        {
            question: "En el cálculo de rutas de GGP, si un gateway puede enviar y recibir tráfico en su interfaz de red, su distancia a esa red es de un salto (1 hop).",
            options: ["Verdadero", "Falso"],
            correct: 1,
            explanation: "Falso. La distancia a su propia red es 0 hops."
        }
    ],
    "SMTP, SNMP e IPsec": [
        {
            question: "¿Cuál es la vulnerabilidad fundamental del protocolo IP original que IPsec busca resolver?",
            options: [
                "Carece de mecanismos integrados para la confidencialidad, integridad y autenticación de los datos",
                "No es compatible con las aplicaciones modernas como HTTP o FTP",
                "Fue diseñado exclusivamente para redes cableadas y no para la comunicación inalámbrica",
                "Es ineficiente para enrutar paquetes en redes grandes y complejas"
            ],
            correct: 0,
            explanation: "Carece de mecanismos integrados para la confidencialidad, integridad y autenticación de los datos."
        },
        {
            question: "Un administrador necesita garantizar la integridad y autenticación del origen de los paquetes, incluyendo partes de la cabecera IP, pero no necesita cifrar los datos. ¿Qué protocolo de la suite IPsec debería utilizar?",
            options: [
                "ESP (Encapsulating Security Payload)",
                "NAT-T (NAT Traversal)",
                "AH (Authentication Header)",
                "IKE (Internet Key Exchange)"
            ],
            correct: 2,
            explanation: "AH (Authentication Header) - provee integridad y autenticación sin cifrado."
        },
        {
            question: "¿Cuál es el propósito principal de la Fase 1 del protocolo IKE?",
            options: [
                "Cifrar y autenticar directamente el tráfico de datos del usuario final",
                "Autenticar a los participantes y establecer un canal seguro para negociar las políticas de seguridad",
                "Detectar si existe un dispositivo NAT entre los dos extremos de la comunicación",
                "Negociar las Asociaciones de Seguridad (SA) unidireccionales para el protocolo ESP o AH"
            ],
            correct: 1,
            explanation: "Autenticar a los participantes y establecer un canal seguro para negociar las políticas de seguridad."
        },
        {
            question: "En una VPN de sitio a sitio para conectar dos sucursales a través de Internet, ¿cuál es el modo de operación de IPsec más utilizado?",
            options: [
                "Modo agresivo, porque establece la conexión más rápidamente",
                "Modo túnel, porque encapsula el paquete IP completo, ocultando las direcciones IP internas",
                "Modo transporte, porque es más eficiente al no añadir una nueva cabecera IP",
                "Modo principal, porque ofrece mayor seguridad de identidad"
            ],
            correct: 1,
            explanation: "Modo túnel, porque encapsula el paquete IP completo, ocultando las direcciones IP internas."
        },
        {
            question: "¿Cuál es la función principal de SNMP en una red?",
            options: [
                "Enviar correos electrónicos automáticamente",
                "Monitorear y gestionar dispositivos de red de manera centralizada",
                "Conectar dispositivos de manera inalámbrica",
                "Mejorar la velocidad de conexión a Internet"
            ],
            correct: 1,
            explanation: "Monitorear y gestionar dispositivos de red de manera centralizada."
        },
        {
            question: "¿Cuál de los siguientes componentes no forma parte de la arquitectura SNMP?",
            options: [
                "Gestor SNMP (Manager)",
                "Agente SNMP (Agent)",
                "Base de datos MIB",
                "Servidor DNS"
            ],
            correct: 3,
            explanation: "Servidor DNS no es parte de la arquitectura SNMP."
        },
        {
            question: "SNMP utiliza UDP como protocolo de transporte y opera principalmente en los puertos 161 y 162.",
            options: ["Verdadero", "Falso"],
            correct: 0,
            explanation: "Verdadero. Puerto 161 para consultas y 162 para traps."
        },
        {
            question: "¿Cuál es la secuencia correcta de comandos SMTP para enviar un correo electrónico básico?",
            options: [
                "HELO → MAIL FROM → RCPT TO → DATA → QUIT",
                "MAIL FROM → HELO → DATA → RCPT TO → QUIT",
                "DATA → HELO → MAIL FROM → RCPT TO → QUIT",
                "RCPT TO → MAIL FROM → HELO → DATA → QUIT"
            ],
            correct: 0,
            explanation: "HELO → MAIL FROM → RCPT TO → DATA → QUIT"
        },
        {
            question: "SMTP se utiliza tanto para enviar como para recibir correos electrónicos en el cliente de correo del usuario final.",
            options: ["Verdadero", "Falso"],
            correct: 1,
            explanation: "Falso. SMTP solo envía; para recibir se usa POP3 o IMAP."
        },
        {
            question: "¿Qué mecanismo de seguridad permite cifrar una conexión SMTP que inicialmente se establece sin cifrado?",
            options: [
                "SMTP-AUTH",
                "SMTPS",
                "STARTTLS",
                "SPF"
            ],
            correct: 2,
            explanation: "STARTTLS permite actualizar una conexión no cifrada a cifrada."
        }
    ],
    "VLANs y VPN": [
        {
            question: "¿Cuál es la principal ventaja de implementar VLANs en una red LAN?",
            options: [
                "Aumentar la velocidad de Wi-Fi",
                "Segmentar la red para mejorar seguridad y rendimiento",
                "Permitir que más dispositivos tengan Internet",
                "Evitar el uso de routers en la red"
            ],
            correct: 1,
            explanation: "Segmentar la red para mejorar seguridad y rendimiento."
        },
        {
            question: "¿Qué dispositivo se necesita para que dos VLANs distintas puedan comunicarse entre sí?",
            options: [
                "Switch no administrable",
                "Hub",
                "Router o Switch L3",
                "Patch panel"
            ],
            correct: 2,
            explanation: "Router o Switch L3 para enrutar entre VLANs."
        },
        {
            question: "¿Cuál es la diferencia principal entre un puerto Access y uno Trunk en un switch?",
            options: [
                "Access soporta Wi-Fi; Trunk soporta cable",
                "Access transporta una sola VLAN; Trunk transporta múltiples VLANs",
                "Trunk es más seguro",
                "Access requiere 802.1Q"
            ],
            correct: 1,
            explanation: "Access transporta una sola VLAN; Trunk transporta múltiples VLANs."
        },
        {
            question: "¿Cuál es la VLAN por defecto (default) en la mayoría de los switches cuando no se cambia la configuración inicial?",
            options: [
                "VLAN 0",
                "VLAN 1",
                "VLAN 10",
                "VLAN 99"
            ],
            correct: 1,
            explanation: "VLAN 1 es la default, aunque por seguridad se recomienda cambiarla."
        },
        {
            question: "¿Cómo ayudan las VLANs a reducir el dominio de broadcast en una red?",
            options: [
                "Apagando puertos sin uso",
                "Separando la red lógica en múltiples redes independientes",
                "Aumentando la velocidad de los puertos",
                "Usando direcciones públicas"
            ],
            correct: 1,
            explanation: "Separando la red lógica en múltiples redes independientes."
        },
        {
            question: "¿Cuál es el propósito principal de una VPN corporativa?",
            options: [
                "Aumentar la velocidad de Internet",
                "Permitir acceso remoto seguro a la red privada",
                "Compartir Wi-Fi con invitados",
                "Bloquear páginas web"
            ],
            correct: 1,
            explanation: "Permitir acceso remoto seguro a la red privada."
        },
        {
            question: "¿Qué tipo de VPN se usa principalmente para conectar dos sucursales entre sí?",
            options: [
                "Remote Access VPN",
                "SSL VPN",
                "Site-to-Site VPN",
                "Mobile VPN"
            ],
            correct: 2,
            explanation: "Site-to-Site VPN para unir redes de distintas oficinas."
        },
        {
            question: "¿Cuál es la principal ventaja de usar VPN en lugar de un enlace privado?",
            options: [
                "Mayor consumo de energía",
                "Menor seguridad",
                "Usa Internet, por lo tanto es mucho más económico",
                "Necesita equipos adicionales muy costosos"
            ],
            correct: 2,
            explanation: "Usa Internet, reduciendo costos drásticamente."
        },
        {
            question: "¿En qué capa del modelo OSI opera principalmente IPsec?",
            options: [
                "Capa 2 (Enlace)",
                "Capa 3 (Red)",
                "Capa 5 (Sesión)",
                "Capa 7 (Aplicación)"
            ],
            correct: 1,
            explanation: "IPsec trabaja en la Capa 3 (Red)."
        },
        {
            question: "¿Qué garantiza el cifrado dentro de una VPN?",
            options: [
                "Que los paquetes viajen más rápido",
                "Que si alguien intercepta los datos, no pueda leerlos",
                "Que la red tenga más ancho de banda",
                "Que no sea necesario usar contraseñas"
            ],
            correct: 1,
            explanation: "Que si alguien intercepta los datos, no pueda leerlos."
        }
    ]
};

let state = {
    selectedTopic: null,
    currentQuestion: 0,
    selectedAnswer: null,
    showResult: false,
    score: 0,
    answeredQuestions: []
};

function render() {
    const app = document.getElementById('app');
    
    if (!state.selectedTopic) {
        app.innerHTML = renderTopicSelection();
    } else {
        app.innerHTML = renderQuiz();
    }
}

function renderTopicSelection() {
    const topics = Object.keys(quizData);
    
    // Calcular total de preguntas
    const totalQuestions = Object.values(quizData).reduce((sum, questions) => sum + questions.length, 0);
    
    return `
        <div class="topic-selection">
            <div class="header">
                <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                </svg>
                <h1>TEC II</h1>
                <p class="subtitle">Seleccionar Tema</p>
            </div>
            
            <div class="topics-grid">
                <div class="topic-card" onclick="selectAllTopics()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-left: 4px solid #5a67d8;">
                    <h3 class="topic-title" style="color: white;">🎯 Todas las preguntas</h3>
                    <p class="topic-count" style="color: rgba(255,255,255,0.9);">${totalQuestions} preguntas - Modo completo</p>
                </div>
                
                ${topics.map((topic, index) => `
                    <div class="topic-card" onclick="selectTopic('${topic}')">
                        <h3 class="topic-title">${topic}</h3>
                        <p class="topic-count">${quizData[topic].length} preguntas</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderQuiz() {
    const questions = quizData[state.selectedTopic];
    const question = questions[state.currentQuestion];
    const totalQuestions = questions.length;
    const progress = ((state.currentQuestion + 1) / totalQuestions) * 100;
    const isFinished = state.currentQuestion === totalQuestions - 1 && state.showResult;
    
    return `
        <div class="quiz-container">
            <div class="quiz-card">
                <div class="quiz-header">
                    <button class="back-btn" onclick="backToTopics()">← Volver a temas</button>
                    <div class="question-counter">Pregunta ${state.currentQuestion + 1} de ${totalQuestions}</div>
                </div>

                <div class="progress-section">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <h2 class="topic-name">
                        ${state.selectedTopic === '_all_topics' ? 
                            `Todas las preguntas${question.topicName ? ' - ' + question.topicName : ''}` : 
                            state.selectedTopic}
                    </h2>
                </div>

                <div class="question-section">
                    <h3 class="question-text">${question.question}</h3>
                    
                    <div class="options">
                        ${question.options.map((option, index) => {
                            const isSelected = state.selectedAnswer === index;
                            const isCorrect = index === question.correct;
                            const showCorrect = state.showResult && isCorrect;
                            const showIncorrect = state.showResult && isSelected && !isCorrect;
                            
                            let classes = 'option';
                            if (showCorrect) classes += ' correct';
                            if (showIncorrect) classes += ' incorrect';
                            if (isSelected && !state.showResult) classes += ' selected';
                            if (state.showResult) classes += ' disabled';
                            
                            return `
                                <button class="${classes}" onclick="selectAnswer(${index})" ${state.showResult ? 'disabled' : ''}>
                                    <span>${option}</span>
                                    ${showCorrect ? '<span>✓</span>' : ''}
                                    ${showIncorrect ? '<span>✗</span>' : ''}
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>

                ${state.showResult ? `
                    <div class="result-box ${state.selectedAnswer === question.correct ? 'correct' : 'incorrect'}">
                        <p class="result-title">
                            ${state.selectedAnswer === question.correct ? '¡Correcto! ✓' : 'Incorrecto ✗'}
                        </p>
                        <p class="result-explanation">${question.explanation}</p>
                    </div>
                ` : ''}

                <div class="quiz-footer">
                    <div class="score">Puntuación: ${state.score} / ${state.answeredQuestions.length}</div>
                    
                    ${!state.showResult ? `
                        <button class="btn btn-primary" onclick="submitAnswer()" ${state.selectedAnswer === null ? 'disabled' : ''}>
                            Comprobar
                        </button>
                    ` : isFinished ? `
                        <div class="btn-group">
                            <button class="btn btn-secondary" onclick="backToTopics()">
                                Cambiar tema
                            </button>
                            <button class="btn btn-primary" onclick="restartQuiz()">
                                ↻ Reiniciar
                            </button>
                        </div>
                    ` : `
                        <button class="btn btn-primary" onclick="nextQuestion()">
                            Siguiente →
                        </button>
                    `}
                </div>
            </div>
        </div>
    `;
}

function selectTopic(topic) {
    state.selectedTopic = topic;
    state.currentQuestion = 0;
    state.selectedAnswer = null;
    state.showResult = false;
    state.score = 0;
    state.answeredQuestions = [];
    render();
}

function selectAllTopics() {
    // Combinar todas las preguntas de todos los temas
    const allQuestions = [];
    const topics = Object.keys(quizData);
    
    topics.forEach(topic => {
        quizData[topic].forEach(question => {
            allQuestions.push({
                ...question,
                topicName: topic
            });
        });
    });
    
    // Opcional: Mezclar las preguntas aleatoriamente
    allQuestions.sort(() => Math.random() - 0.5);
    
    // Crear un tema temporal con todas las preguntas
    quizData['_all_topics'] = allQuestions;
    
    state.selectedTopic = '_all_topics';
    state.currentQuestion = 0;
    state.selectedAnswer = null;
    state.showResult = false;
    state.score = 0;
    state.answeredQuestions = [];
    render();
}

function selectAnswer(index) {
    if (!state.showResult) {
        state.selectedAnswer = index;
        render();
    }
}

function submitAnswer() {
    if (state.selectedAnswer !== null) {
        const question = quizData[state.selectedTopic][state.currentQuestion];
        const isCorrect = state.selectedAnswer === question.correct;
        
        state.showResult = true;
        
        if (isCorrect) {
            state.score++;
        }
        
        state.answeredQuestions.push({
            question: state.currentQuestion,
            correct: isCorrect
        });
        
        render();
    }
}

function nextQuestion() {
    const totalQuestions = quizData[state.selectedTopic].length;
    
    if (state.currentQuestion < totalQuestions - 1) {
        state.currentQuestion++;
        state.selectedAnswer = null;
        state.showResult = false;
        render();
    }
}

function restartQuiz() {
    state.currentQuestion = 0;
    state.selectedAnswer = null;
    state.showResult = false;
    state.score = 0;
    state.answeredQuestions = [];
    render();
}

function backToTopics() {
    if (quizData.hasOwnProperty('_all_topics')) {
        delete quizData['_all_topics'];
    }
    state.selectedTopic = null;
    state.currentQuestion = 0;
    state.selectedAnswer = null;
    state.showResult = false;
    state.score = 0;
    state.answeredQuestions = [];
    render();
}

// Inicializar la app
render();
