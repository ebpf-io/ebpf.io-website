---
title: eBPF Documentation
ogTitle: What is eBPF? An Introduction and Deep Dive into the eBPF Technology
ogDescription: A detailed step by step introduction to the eBPF technology with lots of references for further reading.
ogKeywords: ebpf, bpf, xdp, introduction, tutorial, what is, deep dive, documentation
---

## ¿Qué es eBPF?

eBPF es una tecnología revolucionaria con origen en el kernel de Linux que puede ejecutar programas en espacio aislado en un contexto privilegiado, como el kernel del sistema operativo. Se utiliza para ampliar de forma segura y eficiente las capacidades del kernel sin necesidad de cambiar el código fuente del kernel ni cargar módulos del kernel.

Históricamente, el sistema operativo siempre ha sido un lugar ideal para implementar funciones de observabilidad, seguridad y redes debido a la capacidad privilegiada del kernel para supervisar y controlar todo el sistema. Al mismo tiempo, es difícil evolucionar el kernel de un sistema operativo debido a su papel central y sus altos requisitos de estabilidad y seguridad. Por lo tanto, la tasa de innovación a nivel del sistema operativo ha sido tradicionalmente menor en comparación con la funcionalidad implementada fuera del sistema operativo.

![Descripción general ](overview.png)

eBPF cambia esta fórmula fundamentalmente. Al permitir ejecutar programas en espacio aislado dentro del sistema operativo, los desarrolladores de aplicaciones pueden ejecutar programas eBPF para agregar capacidades adicionales al sistema operativo en tiempo de ejecución. Luego, el sistema operativo garantiza la seguridad y la eficiencia de ejecución como si estuviera compilado de forma nativa con la ayuda de un compilador Just-In-Time (JIT) y un motor de verificación. Esto ha dado lugar a una ola de proyectos basados ​​en eBPF que cubren una amplia gama de casos de uso, incluidas las funciones de redes, observabilidad y seguridad de próxima generación.

Hoy en día, eBPF se utiliza ampliamente para impulsar una amplia variedad de casos de uso: proporcionar redes de alto rendimiento y balanceo de carga en centros de datos modernos y entornos nativos de la nube, extrayendo datos detallados de observabilidad de seguridad con baja sobrecarga, ayudando a los desarrolladores de aplicaciones a rastrear aplicaciones, proporcionando información para la resolución de problemas de rendimiento, aplicación preventiva de seguridad en tiempo de ejecución de contenedores y aplicaciones, y mucho más. Las posibilidades son infinitas y la innovación que eBPF está desbloqueando apenas ha comenzado.

### ¿Qué es eBPF.io?

eBPF.io es una plataforma destinada a que cualquier persona pueda aprender y colaborar en el proyecto eBPF. Se trata de una comunidad abierta en la que todos son bienvenidos a participar y compartir. Ya sea que estés buscando una introducción inicial a eBPF, necesites encontrar más material de lectura o estés interesado en dar tus primeros pasos como colaborador en los proyectos principales, eBPF.io te proporcionará la orientación y los recursos necesarios en tu camino.

### ¿Qué significan eBPF y BPF?

Inicialmente, BPF representaba Berkeley Packet Filter, pero en la actualidad, con la versión de eBPF (extended BPF) que va mucho más allá de la simple filtración de paquetes, el acrónimo BPF ha perdido su significado original. eBPF ahora se considera como un término independiente que no se abrevia en particular. En el código fuente de Linux, aún se utiliza el término BPF, y en herramientas y documentación, los términos BPF y eBPF suelen usarse de manera intercambiable. Para distinguirlo del eBPF actual, a veces se hace referencia al BPF original como cBPF (BPF clásico).

### ¿Cómo se llama la abeja?

La abeja es el logotipo oficial de eBPF y fue creada originalmente por Vadim Shchekoldin. En [la primer Conferencia de eBPF](https://ebpf.io/summit-2020.html), donde se realizó una votación y se le puso el nombre de eBee. (Para obtener detalles sobre los usos aceptables del logotipo, consulta las [Guías de Marca](https://linuxfoundation.org/brand-guidelines/) de la Linux Foundation).

## Introducción a eBPF

Los siguientes capítulos son una introducción rápida a eBPF. Si desea obtener más información sobre eBPF, consulte [la Guía de referencia de eBPF y XDP](https://cilium.readthedocs.io/en/stable/bpf/). Si usted es un desarrollador que busca crear un programa eBPF o está interesado en aprovechar una solución que utiliza eBPF, es útil comprender la arquitectura y los conceptos básicos.

### Descripción general de Hook

Los programas eBPF están controlados por eventos y se ejecutan cuando el kernel o una aplicación pasa por un determinado punto de enlace. Los hooks predefinidos incluyen llamadas al sistema, entrada/salida de funciones, puntos de seguimiento del kernel, eventos de red y muchos otros.

![Syscall hook](syscall-hook.png)

Si no existe un hook predefinido para una necesidad particular, es posible crear un rastro del kernel (kprobe) o un rastro del usuario (uprobe) para adjuntar programas eBPF casi en cualquier lugar del kernel o de las aplicaciones de usuario.

![Descripción general Hook](hook-overview.png)

### ¿Cómo se escriben los programas eBPF?

En muchos escenarios, eBPF no se usa directamente sino indirectamente a través de proyectos como [Cilium](https://ebpf.io/projects/#cilium), [bcc](https://ebpf.io/projects/#bcc) o [bpftrace](https://ebpf.io/projects/#bpftrace), que proporcionan una abstracción mejor de eBPF y no requieren escribir programas directamente, sino que ofrecen la capacidad de especificar definiciones basadas en intenciones que son luego implementados con eBPF.

![Clang](clang.png)

Si no existe una abstracción de nivel superior, los programas deben escribirse directamente. El kernel de Linux espera que los programas eBPF se carguen en forma de código de bytes. Si bien, por supuesto, es posible escribir código de bytes directamente, la práctica de desarrollo más común es aprovechar un conjunto de compiladores como [LLVM](https://llvm.org/) para compilar código pseudo-C en código de bytes eBPF.

### Carga y Verificación de Arquitectura

When the desired hook has been identified, the eBPF program can be loaded into the Linux kernel using the bpf system call. This is typically done using one of the available eBPF libraries. The next section provides an introduction into the available development toolchains.Una vez que se haya identificado el hookdeseado, el programa eBPF se puede cargar en el núcleo de Linux utilizando la llamada al sistema "bpf". Normalmente, esto se hace utilizando en una de las bibliotecas eBPF disponibles. En la siguiente sección proporcionamos una introducción a las herramientas de desarrollo disponibles.

![Go](go.png)

A medida que el programa se carga en el kernel de Linux, pasa por dos etapas antes de ser adjuntado al código solicitado:

### Verificación

El paso de verificación garantiza que el programa eBPF sea seguro de ejecutar. Valida que el programa cumpla con varias condiciones, por ejemplo:

![Carga del Programa](loader.png)

- El proceso de carga del programa eBPF tiene las capacidades requeridas (privilegios). A menos que esté eBPF sin privilegios, solo los procesos privilegiados pueden cargar programas eBPF.
- El programa no falla ni daña el sistema.
- El programa siempre se ejecuta hasta su finalización (es decir, el programa no permanece en un bucle para siempre, retrasando el procesamiento posterior).

### Compilación JIT

La etapa de compilación Just-in-Time (JIT) traduce el código de bytes genérico del programa al conjunto de instrucciones de la máquina para optimizar la velocidad de ejecución del programa. Esto hace que los programas eBPF se ejecuten tan eficientemente como el código del kernel compilado de forma nativa o como el código cargado como un módulo del kernel.

### Mapas

Un aspecto vital de los programas eBPF es la capacidad de compartir información recopilada y almacenar el estado. Para ello, los programas eBPF pueden aprovechar el concepto de mapas eBPF para almacenar y recuperar datos en un amplio conjunto de estructuras de datos. Se puede acceder a los mapas eBPF desde programas eBPF, así como desde aplicaciones en el espacio del usuario (user space) a través de una llamada al sistema (system call).

![Arquitectura del mapa](map-architecture.png)

La siguiente es una lista incompleta de los tipos de mapas admitidos para comprender la diversidad de las estructuras de datos. Para varios tipos de mapas, está disponible una variación compartida y por CPU.

- Tablas hash, matrices
- LRU (menos utilizado recientemente)
- Búfer de anillo
- Seguimiento de pila
- LPM (coincidencia de prefijo más largo)
- ...

### Llamadas de ayuda

Los programas eBPF no pueden llamar a funciones arbitrarias del kernel. Permitir esto vincularía los programas eBPF a versiones particulares del kernel y complicaría la compatibilidad de los programas. En cambio, los programas eBPF pueden realizar llamadas a funciones auxiliares, una API estable y conocida que ofrece el kernel.

![Ayudante](helper.png)

El conjunto de llamadas de ayuda disponibles está en constante evolución. Ejemplos de llamadas de ayuda disponibles:

- Generar números aleatorios
- Obtener fecha y hora actuales
- Acceso al mapa eBPF
- Obtener contexto de proceso/cgroup
- Manipular paquetes de red y lógica de reenvío

### Llamadas de cola y función

Los programas eBPF se pueden componer con el concepto de cola y llamadas a funciones. Las llamadas a funciones permiten definir y llamar funciones dentro de un programa eBPF. Las llamadas de cola pueden llamar y ejecutar otro programa eBPF y reemplazar el contexto de ejecución, de manera similar a cómo opera la llamada al sistema execve() para procesos regulares.

![Llamada de cola](tailcall.png)

### Seguridad eBPF

_Un gran poder también debe conllevar una gran responsabilidad._

eBPF es una tecnología increíblemente poderosa y ahora se ejecuta en el corazón de muchos componentes críticos de la infraestructura de software. Durante el desarrollo de eBPF, la seguridad de eBPF fue el aspecto más crucial cuando se consideró la inclusión de eBPF en el kernel de Linux. La seguridad de eBPF se garantiza a través de varias capas:

#### Privilegios requeridos

A menos que esté habilitado eBPF sin privilegios, todos los procesos que pretendan cargar programas eBPF en el kernel de Linux deben ejecutarse en modo privilegiado (root) o requerir la capacidad CAP_BPF. Esto significa que los programas que no son de confianza no pueden cargar programas eBPF.

Si se habilita eBPF sin privilegios, los procesos sin privilegios pueden cargar ciertos programas eBPF sujetos a un conjunto de funcionalidades reducido y con acceso limitado al kernel.

#### Verificador

Si a un proceso se le permite cargar un programa eBPF, todos los programas aún pasan por el verificador eBPF. El verificador eBPF garantiza la seguridad del programa en sí. Esto significa, por ejemplo, es posible:

- Los programas se validan para garantizar que siempre se ejecuten hasta su finalización, p. Es posible que un programa eBPF nunca se bloquee o permanezca en un bucle para siempre. Los programas eBPF pueden contener los llamados bucles acotados, pero el programa sólo se acepta si el verificador puede garantizar que el bucle contiene una condición de salida que se garantiza que se cumplirá.
- Los programas no pueden utilizar variables no inicializadas ni acceder a la memoria fuera de los límites.
- Los programas deben ajustarse a los requisitos de tamaño del sistema. No es posible cargar programas eBPF arbitrariamente grandes.
- El programa debe tener una complejidad finita. El verificador evaluará todas las rutas de ejecución posibles y debe ser capaz de completar el análisis dentro de los límites del límite superior de complejidad configurado.

El verificador pretende ser una herramienta de seguridad que comprueba que los programas sean seguros de ejecutar. No es una herramienta de seguridad que inspecciona lo que están haciendo los programas.

#### Endurecimiento

Una vez completada con éxito la verificación, el programa eBPF se ejecuta a través de un proceso de endurecimiento según si el programa se carga desde un proceso privilegiado o no privilegiado. Este paso incluye:

- **Protección de ejecución de programas**: la memoria del kernel que contiene un programa eBPF está protegida y es de solo lectura. Si por alguna razón, ya sea un error del kernel o una manipulación maliciosa, se intenta modificar el programa eBPF, el kernel fallará en lugar de permitirle continuar ejecutando el programa dañado/manipulado.
- **Mitigación contra Spectre**: según se especula, las CPU pueden predecir erróneamente las ramas y dejar efectos secundarios observables que podrían extraerse a través de un canal lateral. Para nombrar algunos ejemplos: los programas eBPF enmascaran el acceso a la memoria para redirigir el acceso bajo instrucciones transitorias a áreas controladas, el verificador también sigue rutas de programa accesibles solo bajo ejecución especulativa y el compilador JIT emite Retpolines en caso de que las llamadas finales no se puedan convertir en llamadas directas. .
- **Cegamiento constante**: todas las constantes del código están cegadas para evitar ataques de pulverización JIT. Esto evita que los atacantes inyecten código ejecutable como constantes que, en presencia de otro error del kernel, podrían permitir a un atacante saltar a la sección de memoria del programa eBPF para ejecutar el código.

#### Contexto de tiempo de ejecución abstraído

Los programas eBPF no pueden acceder directamente a la memoria del kernel arbitraria. El acceso a datos y estructuras de datos que se encuentran fuera del contexto del programa debe realizarse a través de los asistentes de eBPF. Esto garantiza un acceso constante a los datos y hace que dicho acceso esté sujeto a los privilegios del programa eBPF, ejemplo: un programa eBPF en ejecución puede modificar los datos de ciertas estructuras de datos si se puede garantizar que la modificación sea segura. Un programa eBPF no puede modificar aleatoriamente las estructuras de datos en el kernel.

## ¿Por qué eBPF?

### El poder de la capacidad de programación

Comencemos con una analogía. ¿Recuerdas GeoCities? Hace 20 años, las páginas web solían estar escritas casi exclusivamente en lenguaje de marcado estático (HTML). Una página web era básicamente un documento con una aplicación (navegador) capaz de mostrarlo. Si observamos las páginas web hoy en día, se han convertido en aplicaciones completas y la tecnología basada en la web ha reemplazado a la gran mayoría de las aplicaciones escritas en lenguajes que requieren compilación. ¿Qué habilitó esta evolución?

![Geocities](geocities.png)

La respuesta corta es la capacidad de programación con la introducción de JavaScript. Desencadenó una revolución masiva que resultó en que los navegadores se convirtieran en sistemas operativos casi independientes.

¿Por qué ocurrió esta evolución? Los programadores ya no estaban tan limitados por los usuarios que ejecutaban versiones específicas de navegadores. En lugar de convencer a los organismos de que se necesitaba una nueva etiqueta HTML, la disponibilidad de los bloques necesarios para la construcción, desacopló el ritmo de innovación del navegador subyacente en comparación con la aplicación que se ejecutaba sobre él. Por supuesto, esta explicación es un poco simplificada, ya que HTML evolucionó con el tiempo y contribuyó al éxito, pero la evolución de HTML por sí sola no habría sido suficiente.

Antes de tomar este ejemplo y aplicarlo a eBPF, echemos un vistazo a un par de aspectos clave que fueron vitales en la introducción de JavaScript:

- **Seguridad**: El código no confiable se ejecuta en el navegador del usuario. Esto se resolvió mediante la creación de un entorno seguro para los programas JavaScript y abstrayendo el acceso a los datos del navegador.
- **Entrega Continua**: La evolución de la lógica del programa debe ser posible sin necesidad de enviar constantemente nuevas versiones del navegador. Esto se logró proporcionando los componentes de bajo nivel adecuados para construir lógica arbitraria.
- **Rendimiento**: La capacidad de programación debe ofrecerse con un sobrecosto mínimo. Esto se resolvió con la introducción de un compilador Just-in-Time (JIT). Para todos los casos mencionados anteriormente, se pueden encontrar contrapartes exactas en eBPF por la misma razón.

### El impacto de eBPF en el Kernel de Linux

Ahora volvamos a eBPF. Para comprender el impacto de la capacidad de programación de eBPF en el kernel de Linux, es útil tener una comprensión de alto nivel de la arquitectura del kernel de Linux y cómo interactúa con las aplicaciones y el hardware.

![Arquitectura del Kernel](kernel-arch.png)

El propósito principal del kernel de Linux es abstraer el hardware físico o virtual y proporcionar una API consistente (llamadas al sistema) que permita que las aplicaciones se ejecuten y compartan los recursos. Para lograr esto, se mantienen una amplia variedad de subsistemas y capas para distribuir estas responsabilidades. Cada subsistema generalmente permite cierto nivel de configuración para adaptarse a las diferentes necesidades de los usuarios. Si un comportamiento deseado no se puede configurar, se requerirá un cambio en el kernel, lo que históricamente dejaba dos opciones:

<CardsList>

<CardItem title="Soporte al Código fuente">

1. Cambiar el código fuente del kernel y convencer a la comunidad del kernel de Linux de que el cambio es necesario.
2. Esperar varios años para que la nueva versión del kernel se convierta en un estándar.

</CardItem>

<CardItem title="Módulo del Kernel">

1. Escribir un módulo del kernel.
2. Actualizarlo regularmente, ya que cada lanzamiento del kernel puede romperlo.
3. Correr el riesgo de corromper tu kernel de Linux debido a la falta de límites de seguridad.

</CardItem>

</CardsList>

Con eBPF, está disponible una nueva opción que permite reprogramar el comportamiento del kernel de Linux sin necesidad de realizar cambios en el código fuente del kernel o cargar un módulo del kernel. En muchos aspectos, esto es muy similar a cómo JavaScript y otros lenguajes de scripting desbloquearon la evolución de sistemas que se habían vuelto difíciles o costosos de cambiar.

## Herramientas de Desarrollo

Existen varias herramientas de desarrollo que ayudan en el desarrollo y gestión de programas eBPF. Todas ellas abordan diferentes necesidades de los usuarios:

#### bcc

BCC es un framework que permite a los usuarios escribir programas python con programas eBPF incrustados en su interior. El framework está dirigido a los casos de uso que implican la generación de perfiles/rastreo de aplicaciones y sistemas en los que se utiliza un programa eBPF para recopilar estadísticas o generar eventos intuitivos y un homólogo en el espacio de usuario recopila los datos y los muestra en un formato legible para el ser humano. La ejecución del programa python generará el bytecode eBPF y lo cargará en el kernel.

![bcc](bcc.png)

#### bpftrace

bpftrace es un lenguaje de rastreo de alto nivel para Linux eBPF y está disponible en kernels de Linux semi-recientes (Version 4.x). bpftrace utiliza LLVM como backend para compilar scripts a bytecode eBPF y hace uso de BCC para interactuar con el subsistema Linux eBPF así como con las capacidades de rastreo existentes en Linux: rastreo dinámico del kernel (kprobes), rastreo dinámico a nivel del usuario (uprobes) y tracepoints. El lenguaje bpftrace está inspirado en awk, C+ y trazadores predecesores como DTrace y SystemTap.

![bpftrace](bpftrace.png)

#### Biblioteca Go de eBPF

La biblioteca Go de eBPF proporciona una biblioteca genérica de eBPF en que puedes ver todo el proceso de llegar al bytecode de eBPF y la carga y gestión de programas eBPF. Los programas eBPF se crean normalmente escribiendo un lenguaje de alto nivel y luego utilizan el compilador clang/LLVM para compilar al bytecode de eBPF.

![Go](go.png)

#### Biblioteca libbpf C/C++

La biblioteca libbpf es una biblioteca eBPF genérica basada en C/C++ que ayuda a entender y desacoplar la carga de archivos objeto eBPF generados desde el compilador clang/LLVM en el núcleo y, en general, abstrae la interacción con la llamada al sistema BPF proporcionando API de biblioteca fáciles de usar para las aplicaciones.

![Libbpf](libbpf.png)

## Obtén más información

Si deseas saber más sobre eBPF, continúa leyendo los siguientes materiales adicionales:

### Documentation

- [BPF & XDP Reference Guide](https://cilium.readthedocs.io/en/stable/bpf/), Cilium Documentation, Aug 2020
- [BPF Documentation](https://www.kernel.org/doc/html/latest/bpf/index.html), BPF Documentation in the Linux Kernel
- [BPF Design Q&A](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst), FAQ for kernel-related eBPF questions

### Tutorials

- [Learn eBPF Tracing: Tutorial and Examples](http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html), Brendan Gregg's Blog, Jan 2019
- [XDP Hands-On Tutorials](https://github.com/xdp-project/xdp-tutorial), Various authors, 2019
- [BCC, libbpf and BPF CO-RE Tutorials](https://facebookmicrosites.github.io/bpf/blog/), Facebook's BPF Blog, 2020

### Talks

#### Generic

- [eBPF and Kubernetes: Little Helper Minions for Scaling Microservices](https://www.youtube.com/watch?v=99jUcLt3rSk) ([Slides](https://kccnceu20.sched.com/event/ZemQ/ebpf-and-kubernetes-little-helper-minions-for-scaling-microservices-daniel-borkmann-cilium)), Daniel Borkmann, KubeCon EU, Aug 2020
- [eBPF - Rethinking the Linux Kernel](https://www.infoq.com/presentations/facebook-google-bpf-linux-kernel/) ([Slides](https://docs.google.com/presentation/d/1AcB4x7JCWET0ysDr0gsX-EIdQSTyBtmi6OAW7bE0jm0)), Thomas Graf, QCon London, April 2020
- [BPF as a revolutionary technology for the container landscape](https://www.youtube.com/watch?v=U3PdyHlrG1o&t=7) ([Slides](https://fosdem.org/2020/schedule/event/containers_bpf/attachments/slides/4122/export/events/attachments/containers_bpf/slides/4122/BPF_as_a_revolutionary_technology_for_the_container_landscape.pdf)), Daniel Borkmann, FOSDEM, Feb 2020
- [BPF at Facebook](https://www.youtube.com/watch?v=ZYBXZFKPS28), Alexei Starovoitov, Performance Summit, Dec 2019
- [BPF: A New Type of Software](https://youtu.be/7pmXdG8-7WU?t=8) ([Slides](https://www.slideshare.net/brendangregg/um2019-bpf-a-new-type-of-software)), Brendan Gregg, Ubuntu Masters, Oct 2019
- [The ubiquity but also the necessity of eBPF as a technology](https://www.youtube.com/watch?v=mFxs3VXABPU), David S. Miller, Kernel Recipes, Oct 2019

#### Deep Dives

- [BPF and Spectre: Mitigating transient execution attacks](https://www.youtube.com/watch?v=6N30Yp5f9c4) ([Slides](https://ebpf.io/summit-2021-slides/eBPF_Summit_2021-Keynote-Daniel_Borkmann-BPF_and_Spectre.pdf))
  , Daniel Borkmann, eBPF Summit, Aug 2021
- [BPF Internals](https://www.usenix.org/conference/lisa21/presentation/gregg-bpf) ([Slides](https://www.usenix.org/system/files/lisa21_slides_gregg_bpf.pdf)), Brendan Gregg, USENIX LISA, Jun 2021

#### Cilium

- [Advanced BPF Kernel Features for the Container Age](https://www.youtube.com/watch?v=PJY-rN1EsVw) ([Slides](https://fosdem.org/2021/schedule/event/containers_ebpf_kernel/attachments/slides/4358/export/events/attachments/containers_ebpf_kernel/slides/4358/Advanced_BPF_Kernel_Features_for_the_Container_Age_FOSDEM.pdf)), Daniel Borkmann, FOSDEM, Feb 2021
- [Kubernetes Service Load-Balancing at Scale with BPF & XDP](https://www.youtube.com/watch?v=UkvxPyIJAko&t=21s) ([Slides](https://linuxplumbersconf.org/event/7/contributions/674/attachments/568/1002/plumbers_2020_cilium_load_balancer.pdf)), Daniel Borkmann & Martynas Pumputis, Linux Plumbers, Aug 2020
- [Liberating Kubernetes from kube-proxy and iptables](https://www.youtube.com/watch?v=bIRwSIwNHC0) ([Slides](https://docs.google.com/presentation/d/1cZJ-pcwB9WG88wzhDm2jxQY4Sh8adYg0-N3qWQ8593I/edit#slide=id.g7055f48ba8_0_0)), Martynas Pumputis, KubeCon US 2019
- [Understanding and Troubleshooting the eBPF Datapath in Cilium](https://www.youtube.com/watch?v=Kmm8Hl57WDU) ([Slides](https://static.sched.com/hosted_files/kccncna19/20/eBPF%20and%20the%20Cilium%20Datapath.pdf)), Nathan Sweet, KubeCon US 2019
- [Transparent Chaos Testing with Envoy, Cilium and BPF](https://www.youtube.com/watch?v=gPvl2NDIWzY) ([Slides](https://static.sched.com/hosted_files/kccnceu19/54/Chaos%20Testing%20with%20Envoy%2C%20Cilium%20and%20eBPF.pdf)), Thomas Graf, KubeCon EU 2019
- [Cilium - Bringing the BPF Revolution to Kubernetes Networking and Security](https://www.youtube.com/watch?v=QmmId1QEE5k) ([Slides](https://www.slideshare.net/ThomasGraf5/cilium-bringing-the-bpf-revolution-to-kubernetes-networking-and-security)), Thomas Graf, All Systems Go!, Berlin, Sep 2018
- [How to Make Linux Microservice-Aware with eBPF](https://www.youtube.com/watch?v=_Iq1xxNZOAo) ([Slides](https://www.slideshare.net/InfoQ/how-to-make-linux-microserviceaware-with-cilium-and-ebpf)), Thomas Graf, QCon San Francisco, 2018
- [Accelerating Envoy with the Linux Kernel](https://www.youtube.com/watch?v=ER9eIXL2_14), Thomas Graf, KubeCon EU 2018
- [Cilium - Network and Application Security with BPF and XDP](https://www.youtube.com/watch?v=ilKlmTDdFgk) ([Slides](https://www.slideshare.net/ThomasGraf5/dockercon-2017-cilium-network-and-application-security-with-bpf-and-xdp)), Thomas Graf, DockerCon Austin, Apr 2017

#### Hubble

- [Hubble - eBPF Based Observability for Kubernetes](https://static.sched.com/hosted_files/kccnceu20/1b/Aug19-Hubble-eBPF_Based_Observability_for_Kubernetes_Sebastian_Wicki.pdf), Sebastian Wicki, KubeCon EU, Aug 2020

### Books

- [Learning eBPF](https://isovalent.com/books/learning-ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=partner), Liz Rice, O'Reilly, 2023
- [Security Observability with eBPF](https://isovalent.com/books/ebpf-security/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=partner), Natália Réka Ivánkó and Jed Salazar, O'Reilly, 2022
- [What is eBPF?](https://isovalent.com/books/ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=partner), Liz Rice, O'Reilly, 2022
- [Systems Performance: Enterprise and the Cloud, 2nd Edition](http://www.brendangregg.com/systems-performance-2nd-edition-book.html), Brendan Gregg, Addison-Wesley Professional Computing Series, 2020
- [BPF Performance Tools](http://www.brendangregg.com/bpf-performance-tools-book.html), Brendan Gregg, Addison-Wesley Professional Computing Series, Dec 2019
- [Linux Observability with BPF](https://www.oreilly.com/library/view/linux-observability-with/9781492050193/), David Calavera, Lorenzo Fontana, O'Reilly, Nov 2019

### Articles & Blogs

- [BPF for security - and chaos - in Kubernetes](https://lwn.net/Articles/790684/), Sean Kerner, LWN, Jun 2019
- [Linux Technology for the New Year: eBPF](https://thenewstack.io/linux-technology-for-the-new-year-ebpf/), Joab Jackson, Dec 2018
- [A thorough introduction to eBPF](https://lwn.net/Articles/740157/), Matt Fleming, LWN, Dec 2017
- [Cilium, BPF and XDP](https://opensource.googleblog.com/2016/11/cilium-networking-and-security.html), Google Open Source Blog, Nov 2016
- [Archive of various articles on BPF](https://lwn.net/Kernel/Index/#Berkeley_Packet_Filter), LWN, since Apr 2011
- [Various articles on BPF by Cloudflare](https://blog.cloudflare.com/tag/ebpf/), Cloudflare, since March 2018
- [Various articles on BPF by Facebook](https://facebookmicrosites.github.io/bpf/blog/), Facebook, since August 2018
