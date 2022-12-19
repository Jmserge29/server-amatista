const MateriasCollection = require('../Models/MateriasCollection')
const Task = require('../Models/TaskUniversity')

ListData =[
    // Comunicación --> https://image.shutterstock.com/image-photo/newspapers-computer-magazines-open-laptop-600w-1399839347.jpg
    // Ing. Sistemas --> https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg
    // Calculo --> https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg
    // Idiomas --> https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg
    // Electivas --> https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg
    // Físico --> https://image.shutterstock.com/image-photo/mathematical-physical-formulas-against-background-600w-2010979148.jpg
    // Bases De Datos --> https://image.shutterstock.com/image-illustration/server-room-3d-illustration-node-600w-1024337068.jpg
    // Diseño Dig. --> https://image.shutterstock.com/image-vector/deconstructed-postmodern-inspired-artwork-vector-600w-1816795676.jpg
    //Examen --> https://metropolisa.com/wp-content/uploads/2017/06/mp-proyectos-educativo-uninorte-2.jpg
    // Redes --> https://image.shutterstock.com/image-photo/smart-city-communication-network-concept-600w-1923558464.jpg
    // Computadores --> https://image.shutterstock.com/image-illustration/closeup-view-modern-gpu-card-600w-1720101667.jpg
    // Diseño de Sofftware --> https://i.pinimg.com/564x/65/69/b8/6569b84671e254fb3531076d4fdcb84b.jpg
    // Compiladores --> https://i.pinimg.com/564x/fc/5a/ec/fc5aec446b85f5fd919e99cca2ca8939.jpg
    // Etica --> https://img.freepik.com/vector-gratis/ilustracion-concepto-etica-empresarial_114360-8737.jpg?w=2000
    // Aprendizaje --> https://image.shutterstock.com/image-illustration/thinking-ai-humanoid-robot-analyzing-600w-1936171492.jpg
    // Investigación --> https://image.shutterstock.com/image-photo/team-computer-engineers-lean-on-600w-1104131690.jpg
    // Derecho --> https://image.shutterstock.com/image-photo/judges-gavel-on-library-background-600w-1723862410.jpg
    // Contabilidad y Administracion --> https://image.shutterstock.com/image-photo/close-woman-hand-using-calculator-600w-566835985.jpg
    // Ing. Web --> https://i.pinimg.com/564x/1a/9c/39/1a9c3904e4a7bac215219ed9a3452332.jpg
    // gestion Ambiental --> https://image.shutterstock.com/image-photo/environmental-technology-concept-sustainable-development-600w-1798672525.jpg
    // Economía --> https://image.shutterstock.com/image-photo/graphs-representing-stock-market-crash-600w-1658501806.jpg
    // UniLibre --> https://www.unilibre.edu.co/socorro/images/escudonew.png
    // Pensum Ingeniería de Sistemas UniNorte
    // 1er Semestre
    {id: "Competencias Comunicativas I", enlace: "https://image.shutterstock.com/image-photo/newspapers-computer-magazines-open-laptop-600w-1399839347.jpg"},
    {id: "Introduccion a Ingeniería De Sistemas", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Cálculo I", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    {id: "Algoritmia Y Programación I", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Exigencia de Idioma I", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    // 2do Semestre
    {id: "Competencias Comunicativas II", enlace: "https://image.shutterstock.com/image-photo/newspapers-computer-magazines-open-laptop-600w-1399839347.jpg"},
    {id: "Electiva en Historia", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Algoritmia Y Programación II", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Cálculo II", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    {id: "Física Mecánica", enlace: "https://image.shutterstock.com/image-photo/mathematical-physical-formulas-against-background-600w-2010979148.jpg"},
    {id: "Exigencia de Idioma II", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    // 3er Semestre
    {id: "Estructura De Datos I", enlace: "https://image.shutterstock.com/image-illustration/server-room-3d-illustration-node-600w-1024337068.jpg"},
    {id: "Programación Enfocada Objeto (POO)", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Electiva Humanidades", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Física Calor Ondas", enlace: "https://image.shutterstock.com/image-photo/mathematical-physical-formulas-against-background-600w-2010979148.jpg"},
    {id: "Cálculo III", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    {id: "Exigencia de Idioma III", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    // 4to Semestre
    {id: "Estructura De Datos II", enlace: "https://image.shutterstock.com/image-illustration/server-room-3d-illustration-node-600w-1024337068.jpg"},
    {id: "Ecuaciones Diferenciales", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    {id: "Electiva Ciencias de la Vida", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Matemáticas Discretas", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    {id: "Física Electricidad", enlace: "https://image.shutterstock.com/image-photo/mathematical-physical-formulas-against-background-600w-2010979148.jpg"},
    {id: "Exigencia de Idioma IV", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    // 5to Semestre
    {id: "Algoritmo y Complejidad", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Estructuras Discretas", enlace: "https://image.shutterstock.com/image-illustration/server-room-3d-illustration-node-600w-1024337068.jpg"},
    {id: "Análisis de Datos en Ing. I", enlace: "https://image.shutterstock.com/image-illustration/server-room-3d-illustration-node-600w-1024337068.jpg"},
    {id: "Diseño Digital", enlace: "https://image.shutterstock.com/image-vector/deconstructed-postmodern-inspired-artwork-vector-600w-1816795676.jpg"},
    {id: "Electiva en Ciencias Básicas", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Examen Comprehensiva I", enlace: "https://metropolisa.com/wp-content/uploads/2017/06/mp-proyectos-educativo-uninorte-2.jpg"},
    {id: "Exigencia de Idioma V", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    // 6to Semestre
    {id: "Bases De Datos", enlace: "https://image.shutterstock.com/image-illustration/server-room-3d-illustration-node-600w-1024337068.jpg"},
    {id: "Redes de Computación", enlace: "https://image.shutterstock.com/image-photo/smart-city-communication-network-concept-600w-1923558464.jpg"},
    {id: "Soluc. Comput. Problemas en Ingeniería", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Estructura del Computador I", enlace: "https://image.shutterstock.com/image-illustration/closeup-view-modern-gpu-card-600w-1720101667.jpg"},
    {id: "Electiva Básica Disciplinar", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Exigencia de Idioma VI", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    // 7mo Semestre
    {id: "Diseño de Software I", enlace: "https://i.pinimg.com/564x/65/69/b8/6569b84671e254fb3531076d4fdcb84b.jpg"},
    {id: "Optimización", enlace: "https://image.shutterstock.com/image-illustration/closeup-view-modern-gpu-card-600w-1720101667.jpg"},
    {id: "Sistemas Operacionales", enlace: "https://i.pinimg.com/564x/fc/5a/ec/fc5aec446b85f5fd919e99cca2ca8939.jpg"},
    {id: "Estructura del Computador II", enlace: "https://image.shutterstock.com/image-illustration/closeup-view-modern-gpu-card-600w-1720101667.jpg"},
    {id: "Electiva en Ética", enlace: "https://img.freepik.com/vector-gratis/ilustracion-concepto-etica-empresarial_114360-8737.jpg?w=2000"},
    {id: "Exigencia de Idioma VII", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    // 8vo Semestre
    {id: "Compiladores", enlace: "https://i.pinimg.com/564x/fc/5a/ec/fc5aec446b85f5fd919e99cca2ca8939.jpg"},
    {id: "Diseño de Software II", enlace: "https://i.pinimg.com/564x/65/69/b8/6569b84671e254fb3531076d4fdcb84b.jpg"},
    {id: "Electiva en Innovación Desarrollo y Sociedad", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Electiva en Redes", enlace: "https://image.shutterstock.com/image-photo/smart-city-communication-network-concept-600w-1923558464.jpg"},
    {id: "Electiva Profesional I", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Electiva en Ciencias Sociales", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Exigencia de Idioma VIII", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    // 9no Semestre
    {id: "Electiva en Filosofía", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Electiva en Ciencias de la Computación", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Electiva de Gestión Informática", enlace: "https://image.shutterstock.com/image-illustration/closeup-view-modern-gpu-card-600w-1720101667.jpg"},
    {id: "Electiva Profesional II", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Examen Comprehensiva II", enlace: "https://metropolisa.com/wp-content/uploads/2017/06/mp-proyectos-educativo-uninorte-2.jpg"},
    {id: "Formación Complementaria Libre I", enlace: "https://image.shutterstock.com/image-illustration/thinking-ai-humanoid-robot-analyzing-600w-1936171492.jpg"},
    // 10mo Semestre
    {id: "Electiva Estudios Del Caribe", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Electiva Profesional III", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Proyecto Final", enlace: "https://metropolisa.com/wp-content/uploads/2017/06/mp-proyectos-educativo-uninorte-2.jpg"},
    {id: "Formación Complementaria Libre II", enlace: "https://image.shutterstock.com/image-illustration/thinking-ai-humanoid-robot-analyzing-600w-1936171492.jpg"},
    // Pensum Ingeniería de Sistemas UniLibre
    // 1er Semestre
    {id: "Introducción a Ingeniería", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Lenguaje y Comunicación", enlace: "https://image.shutterstock.com/image-photo/newspapers-computer-magazines-open-laptop-600w-1399839347.jpg"},
    {id: "Cátedra Unilibrista", enlace: "https://www.latinpymes.com/wp-content/uploads/2018/07/Universidad-Libre.jpg"},
    {id: "Lógica y Algoritmos", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Cálculo Diferencial", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    {id: "Introducción a la Investigación", enlace: "https://image.shutterstock.com/image-photo/team-computer-engineers-lean-on-600w-1104131690.jpg"},
    {id: "Algebra y Trigonometría", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    {id: "Instituciones Colombianas", enlace: "https://image.shutterstock.com/image-photo/judges-gavel-on-library-background-600w-1723862410.jpg"},
    // 2do Semestre
    {id: "Inglés I", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    {id: "Aprendizaje Autónomo", enlace: "https://image.shutterstock.com/image-illustration/thinking-ai-humanoid-robot-analyzing-600w-1936171492.jpg"},
    {id: "Estructuras de Lenguajes", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Lógica Matemáticas", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    {id: "Metodología de la Investigación", enlace: "https://image.shutterstock.com/image-photo/team-computer-engineers-lean-on-600w-1104131690.jpg"},
    {id: "Cálculo Integral", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    // 3er Semestre
    {id: "Inglés II", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    {id: "Electricidad y Magnetismo", enlace: "https://image.shutterstock.com/image-photo/mathematical-physical-formulas-against-background-600w-2010979148.jpg"},
    {id: "Circuitos Digitales", enlace: "https://image.shutterstock.com/image-photo/smart-city-communication-network-concept-600w-1923558464.jpg"},
    {id: "Administración Empresarial", enlace: "https://image.shutterstock.com/image-photo/close-woman-hand-using-calculator-600w-566835985.jpg"},
    {id: "Cálculo Multivariado y Vectorial", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    // 4to Semestre
    {id: "Inglés III", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    {id: "Pensamiento Sistémico", enlace: "https://image.shutterstock.com/image-illustration/thinking-ai-humanoid-robot-analyzing-600w-1936171492.jpg"},
    {id: "Arquitectura de Computadores", enlace: "https://image.shutterstock.com/image-illustration/closeup-view-modern-gpu-card-600w-1720101667.jpg"},
    {id: "Investigación I", enlace: "https://image.shutterstock.com/image-photo/team-computer-engineers-lean-on-600w-1104131690.jpg"},
    {id: "Electiva de Formación Integral I", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    // 5to Semestre
    {id: "Inglés IV", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    {id: "Sistemas Operativos", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Física ÓPtica y Ondulatoria", enlace: "https://image.shutterstock.com/image-photo/mathematical-physical-formulas-against-background-600w-2010979148.jpg"},
    {id: "Programación II (Lógica)", enlace: "https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg"},
    {id: "Electiva de Administración I", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Ing. Softwware I (A & Diseño Sistemas)", enlace: "https://i.pinimg.com/564x/65/69/b8/6569b84671e254fb3531076d4fdcb84b.jpg"},
    // 6to Semestre
    {id: "Inglés V", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    {id: "Investigación II", enlace: "https://image.shutterstock.com/image-photo/team-computer-engineers-lean-on-600w-1104131690.jpg"},
    {id: "Inteligencia Artificial", enlace: "https://image.shutterstock.com/image-illustration/thinking-ai-humanoid-robot-analyzing-600w-1936171492.jpg"},
    {id: "Ing. Software II (Arq. De Soft)", enlace: "https://i.pinimg.com/564x/65/69/b8/6569b84671e254fb3531076d4fdcb84b.jpg"},
    {id: "Ingeniería Web", enlace: "https://i.pinimg.com/564x/1a/9c/39/1a9c3904e4a7bac215219ed9a3452332.jpg"},
    {id: "Métodos Numéricos", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    // 7to Semestre
    {id: "Estadística Descriptiva", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    {id: "Gestión Ambiental", enlace: "https://image.shutterstock.com/image-photo/environmental-technology-concept-sustainable-development-600w-1798672525.jpg"},
    {id: "Electiva de Administración II", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Investigación III", enlace: "https://image.shutterstock.com/image-photo/team-computer-engineers-lean-on-600w-1104131690.jpg"},
    {id: "Ing. Software III (Aseg. Calidad Soft.)", enlace: "https://i.pinimg.com/564x/65/69/b8/6569b84671e254fb3531076d4fdcb84b.jpg"},
    // 8to Semestre
    {id: "Electiva Básica de Ingeniería I", enlace: "https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg"},
    {id: "Ingeniería Económica", enlace: "https://image.shutterstock.com/image-photo/graphs-representing-stock-market-crash-600w-1658501806.jpg"},
    {id: "Ing. Software IV (Métricas Software)", enlace: "https://i.pinimg.com/564x/65/69/b8/6569b84671e254fb3531076d4fdcb84b.jpg"},
    // 9to Semestre
    // Pensum Contaduría Pública UniAtlántico
    // 1 er Semestre
    {id: "Fundamentos de Microeconomía I", enlace: "https://image.shutterstock.com/image-photo/graphs-representing-stock-market-crash-600w-1658501806.jpg"},
    {id: "Constitución Política de Colombia", enlace: "https://image.shutterstock.com/image-photo/judges-gavel-on-library-background-600w-1723862410.jpg"},
    {id: "Ingles", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    {id: "Matemáticas Básicas", enlace: "https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg"},
    {id: "Producción De Textos", enlace: "https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg"},
    {id: "Deporte", enlace: "enlace 7 Lógica Algoritmica"},
    // 2do Semestre
    {id: "Fundamentos de Microeconomía II", enlace: "https://image.shutterstock.com/image-photo/graphs-representing-stock-market-crash-600w-1658501806.jpg"},
    {id: "Derecho Societario", enlace: "https://image.shutterstock.com/image-photo/judges-gavel-on-library-background-600w-1723862410.jpg"},
    {id: "Reconocimiento De Activos", enlace: "https://image.shutterstock.com/image-photo/close-woman-hand-using-calculator-600w-566835985.jpg"},
    {id: "Epistemología y Teoría Contable", enlace: "https://image.shutterstock.com/image-photo/close-woman-hand-using-calculator-600w-566835985.jpg"},
    {id: "Ética", enlace: "https://img.freepik.com/vector-gratis/ilustracion-concepto-etica-empresarial_114360-8737.jpg?w=2000"},
]
createCollection = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a materia',
        })
    }

    const materia = new MateriasCollection(body)

    if (!materia) {
        return res.status(400).json({ success: false, error: err })
    }

    materia
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: materia._id,
                message: 'materia created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'materia not created!',
            })
        })
}

updateCollection = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    materia.findOne({ _id: req.params.id }, (err, materia) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'materia not found!',
            })
        }

        materia.name = body.name
        materia.collectionUniversity = body.collectionUniversity
        materia.teacher = body.teacher
        materia.day_week = body.day_week

        materia
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: tareas._id,
                    message: 'materia updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'materia not updated!',
                })
            })
    })
}

updateCollectionId = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    materia.findOne({ identificador: req.params.identificador }, (err, materia) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'materia not found!',
            })
        }

        materia.name = body.name
        materia.collectionUniversity = body.collectionUniversity
        materia.teacher = body.teacher
        materia.day_week = body.day_week
        
        materia
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    identificador: materia.identificador,
                    message: 'materia updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'materia not updated!',
                })
            })
    })
}


deleteCollection = async (req, res) => {
    await MateriasCollection.findOneAndDelete({ _id: req.params.id }, (err, materia) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!materia) {
            return res
                .status(404)
                .json({ success: false, error: `materia not found` })
        }

        return res.status(200).json({ success: true, data: materia })
    }).catch(err => console.log(err))
}

deleteCollectionId = async (req, res) => {
    await MateriasCollection.findOneAndDelete({ identificador: req.params.identificador }, (err, materia) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!materia) {
            return res
                .status(404)
                .json({ success: false, error: `materia not found` })
        }

        return res.status(200).json({ success: true, data: materia })
    }).catch(err => console.log(err))
}

getCollectionById = async (req, res) => {
    await MateriasCollection.findOne({ _id: req.params.id }, (err, materia) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
    }

        return res.status(200).json({ success: true, data: materia })
    }).catch(err => console.log(err))
}

getCollectionByIden = async (req, res) => {
    await MateriasCollection.findOne({ identificador: req.params.identificador }, (err, materia) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: materia })
    }).catch(err => console.log(err))
}

getCollectionByCollectionUniversity = async (req, res) => {
    await MateriasCollection.find({ collectionUniversity: req.params.collectionUniversity }, (err, collectionUniversity) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: collectionUniversity })
    }).catch(err => console.log(err))
}

getCollections = async (req, res) => {
    await MateriasCollection.find({}, (err, collections) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!collections.length) {
            return res
                .status(404)
                .json({ success: false, error: `collections not found` })
        }
        return res.status(200).json({ success: true, data: collections })
    }).catch(err => console.log(err))
}

Dashboard = async (req, res) => {
    // Obtengo la data de las materias asignadas a esa collection, materias = data 
    const materias = await MateriasCollection.find({ collectionUniversity: req.params.collectionUniversity });

    // Mapeo el objeto de materias para obtener el _id de MongDB --> Proceder a buscar tasks
    const dataMaterias = await Promise.all(
        materias.map(async(dato) => {
        // console.log('Los _id De MongoDB Son: ',dato._id)
        // Materias_Id = Materias_Id+ ',' + dato._id

        // Buscar el objeto de las Tasks a partir de los id de las materias registrados anteriormente
        const dataTask = await Task.find({ materias: dato._id });
        var pruebaRea = 0
        var pruebaPen = 0
        var porcentaje = 0
        var totalTasks = 0
        var dta = 0
        const dataTareasA = dataTask.map(async(dataT)=>{
            totalTasks += 1
            if(dataT.estado == false){
                pruebaPen += 1
            } else if(dataT.estado == true){
                pruebaRea += 1
            } else {
                console.log('Se solapan los datos')
            }
        })
        
        if(totalTasks == 0){
            totalTasks = 1
        }
        porcentaje = ((100*pruebaRea)/totalTasks)       // 100% --> Total de tareas | porcentaje ? --> tareas Realizadas
        // console.log('El Porcentaje general de la materia con _id: ',dato._id, ' es :', porcentaje + '%' )
        // console.log('Las tareas Pendientes son: ', pruebaPen)
        // console.log('Las tareas Realizadas son: ', pruebaRea)
        
        var enlaceRequested = ''

        ListData.map((data)=>{
            var enlacest = ''
            if(data.id == dato.name){
                enlacest = data.enlace
                enlaceRequested = enlacest
            }
        })

        if(enlaceRequested == ''){
            enlaceRequested = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqK9_KUg-gz7dpJeVztNt6f6m62rBPmQX38w&usqp=CAU'
        }

        return {IDMongo: dato._id, name: dato.name, collectionUniversity: dato.collectionUniversity, teacher: dato.teacher, day_week: dato.day_week, porcentaje: porcentaje, header: enlaceRequested}
        })
    )
    // console.log(dataMaterias)
        // materias.map((dato) => {
        // if(dato.day_week === 'Lunes'){
        //     class_Monday += 1
        // } else if (dato.day_week === 'Martes'){
        //     class_Tuesday += 1
        // } else if (dato.day_week === 'Miércoles'){
        //     class_Wednesday += 1
        // } else if (dato.day_week === 'Jueves'){
        //     class_Thursday += 1
        // } else if (dato.day_week === 'Viernes'){
        //     class_Friday += 1
        // } else {
        //     console.log('Se solapan los datos')
        // }
        // })
    res.status(201).json({message: true, data: dataMaterias})
}

api = (req, res) => {
    return res.status(201).json({api: ListData})
}

module.exports = {
    createCollection,
    updateCollection,
    updateCollectionId,
    deleteCollection,
    deleteCollectionId,
    getCollectionById,
    getCollectionByIden,
    getCollectionByCollectionUniversity,
    getCollections,
    Dashboard,
    api
}