//Declaracion de variables
let respuesta, respuestaValidada

//Class constructora de objeto
class Manga {
    constructor(titulo, autor, genero, lanzamiento, tomos, editorial) {
        this.titulo = titulo
        this.autor = autor
        this.genero = genero        
        this.lanzamiento = lanzamiento     
        this.tomos = tomos
        this.editorial = editorial        
    }
}

// Listado de objetos de los Mangas del catálogo
const mangaNro1 = new Manga("Dragon Ball Super", "Akira Toriyama", ["shonen", "accion"], 2015, 18, "IVREA")
const mangaNro2 = new Manga("My Hero Academia", "Kōhei Horikoshi", ["shonen", "accion", "drama", "escolar"], 2014, 35, "IVREA")
const mangaNro3 = new Manga("One Piece", "Eiichirō Oda", ["shonen", "accion", "fantasia", "comedia", "aventura"], 1997, 102, "IVREA")
const mangaNro4 = new Manga("Death Note", "Tsugumi Ōba", ["shonen", "sisterio", "sobrenatural"], 2003, 12, "IVREA")
const mangaNro5 = new Manga("Naruto", "Masashi Kishimoto", ["shonen", "accion", "fantasia", "comedia", "artes marciales", "aventura"], 2002, 72, "IVREA")
const mangaNro6 = new Manga("Boruto", "Ukyō Kodachi", ["shonen", "accion", "fantasia", "comedia", "artes marciales", "aventura"], 2016, 17, "IVREA")
const mangaNro7 = new Manga("One Punch-Man", "Akira Toriyama", ["seinen", "sccion", "comedia"], 2009, 26, "IVREA")
const mangaNro8 = new Manga("Sakura Card Captor", "CLAMP", ["shojo", "comedia", "romance", "escolar"], 1996, 12, "IVREA")
const mangaNro9 = new Manga("Sailor Moon", "Naoko Takeuchi", ["shojo", "comedia", "romance", "drama", "aventura"], 1992, 18, "IVREA")
const mangaNro10 = new Manga("Kill la Kill", "Kazuki Nakashima", ["shonen", "shojo", "accion", "comedia", "drama"], 2013, 3, "IVREA")
const mangaNro11 = new Manga("Berserk", "Kentaro Miura", ["seinen", "accion", "drama", "aventura"], 1989, 41, "PANINI")
const mangaNro12 = new Manga("Shingeki no Kyojin", "Hajime Isayama", ["shonen", "accion", "drama", "aventura"], 2009, 34, "IVREA")
const mangaNro13 = new Manga("Jujutsu Kaisen", "Gege Akutami", ["shonen", "accion", "aventura", "sobrenatural"], 2018, 19, "IVREA")
const mangaNro14 = new Manga("Kimetsu no Yaiba", "Koyoharu Gotōge", ["shonen", "accion", "aventura", "sobrenatural"], 2016, 23, "IVREA")
const mangaNro15 = new Manga("Black Clover", "Yūki Tabata", ["shonen", "accion", "aventura"], 2015, 18, "IVREA")
const mangaNro16 = new Manga("Spy x Family", "Tatsuya Endō", ["shonen", "comedia"], 2019, 9, "IVREA")
const mangaNro17 = new Manga("Dr. Stone", "Riichiro Inagaki", ["shonen", "drama", "aventura", "comedia"], 2017, 26, "PANINI")
const mangaNro18 = new Manga("The Promise Neverland", "Kaiu Shirai", ["shonen", "drama", "aventura", "misterio"], 2016, 20, "IVREA")
const mangaNro19 = new Manga("JoJo's Bizarre Adventure", "Hirohiko Araki", ["shonen", "seinen", "accion", "aventura"], 1987, 131, "IVREA")
const mangaNro20 = new Manga("Tokyo Revengers", "Ken Wakui", ["shonen", "accion", "drama", "escolar", "comedia", "romance"], 2017, 28, "IVREA")

const mangas = [mangaNro1, mangaNro2, mangaNro3, mangaNro4, mangaNro5, mangaNro6, mangaNro7, mangaNro8, mangaNro9, mangaNro10, mangaNro11, mangaNro12, mangaNro13, mangaNro14, mangaNro15, mangaNro16, mangaNro17, mangaNro18, mangaNro19, mangaNro20]

//Inicio del programa
alert("BIENVENIDO AL CATÁLOGO DE MANGAS \n Contamos con los 20 titulos más recomendados! ")

//Consulta del tipo de búsqueda
do {
    respuesta = parseInt(prompt("BÚSQUEDA DE MANGAS \nIngrese el número de su opción según: \n 1 - Año de publicación \n 2 - Género \n 3 - Cantidad de tomos \n 4 - Editorial"))
    if ((respuesta != 1) && (respuesta != 2) && (respuesta != 3) && (respuesta != 4)) {
        alert("Por favor ingrese un número válido")
    }
} while ((respuesta != "1") && (respuesta != 2) && (respuesta != 3) && (respuesta != 4))


//Selección según tipo de búsqueda
switch (respuesta) {
    case 1://Por año
        do { 
            respuestaValidada = parseInt(prompt("Por favor ingrese el año de publicación del manga que busca:\n - 1987\n - 1989\n - 1992\n - 1996\n - 1997\n - 2002\n - 2003\n - 2009\n - 2013\n - 2014\n - 2015\n - 2016\n - 2017\n - 2018\n - 2019"))
        } while (respuestaValidada < 1987 || respuestaValidada === 1988 || ((respuestaValidada > 1989) && (respuestaValidada < 1992)) || ((respuestaValidada > 1992) && (respuestaValidada < 1996)) || ((respuestaValidada > 1997) && (respuestaValidada < 2002)) || ((respuestaValidada > 2003) && (respuestaValidada < 2009)) || respuestaValidada > 2019 || (isNaN(respuestaValidada)))
        // Búsqueda de manga según el año de lanzamiento
        const mangaFiltradoPublicacion = mangas.filter(manga => manga.lanzamiento == respuestaValidada)
        mangaFiltradoPublicacion.forEach(manga => {            
            console.log(`Se ha encontrado el manga ${manga.titulo}, es de ${manga.autor}, consta de ${manga.tomos} tomos y lo tiene disponible la Editorial ${manga.editorial}` + `</br>`)
            document.write(`★ Se ha encontrado el manga ${manga.titulo}, es de ${manga.autor}, consta de ${manga.tomos} tomos y lo tiene disponible la Editorial ${manga.editorial}` + `</br>`)
        })
        break
    case 2://Por género
        do { 
            respuestaValidada = prompt("Ingrese el género que quiere buscar, las opciones son : \n - Shonen\n - Shojo\n - Seinen\n - Accion\n - Drama\n - Escolar\n - Fantasia\n - Comedia\n - Misterio\n - Sobrenatural\n - Artes marciales\n - Romance\n - Aventura\n (Escriba textualmente, sin signos de puntuación)").toLocaleLowerCase()
        } while (respuestaValidada != "shonen" && respuestaValidada != "shojo" && respuestaValidada != "seinen" && respuestaValidada != "accion" && respuestaValidada != "drama" && respuestaValidada != "escolar" && respuestaValidada != "fantasia" && respuestaValidada != "comedia" && respuestaValidada != "misterio" && respuestaValidada != "sobrenatural" && respuestaValidada != "artes marciales" && respuestaValidada != "romance" && respuestaValidada != "aventura")
        // Búsqueda de genero en el array
        const mangaFiltradoGenero = mangas.filter(manga => manga.genero.includes(respuestaValidada) == true)
        mangaFiltradoGenero.forEach(manga => {
            console.log(`Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de género ${manga.genero}. Tuvo su lanzamiento en el año ${manga.lanzamiento} y se encuentra disponible en la Editorial${manga.editorial}` + `</br>`)
            document.write(`★ Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de género ${manga.genero}. Tuvo su lanzamiento en el año ${manga.lanzamiento} y se encuentra disponible en la Editorial${manga.editorial}` + `</br>`)
        })
        break
    case 3://Por cantidad de tomos
        do { 
            respuestaValidada = parseInt(prompt("Ingrese el número de la opción acorde a la cantidad de tomos que busca para su manga: \n 1 - De 1 a 12 tomos\n 2 - De 13 a 26 tomos\n 3 - Más de 26 tomos"))
        } while (respuestaValidada != 1 && respuestaValidada != 2 && respuestaValidada != 3)
        switch (respuestaValidada) {
            case 1: //Tomos de 1 a 12
                const mangaFiltradoTomos1 = mangas.filter(manga => manga.tomos <= 12)
                mangaFiltradoTomos1.forEach(manga => {
                    console.log(`Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de género ${manga.genero}. Consta de ${manga.tomos} tomos y se encuentra disponible en la Editorial ${manga.editorial}` + `</br>`)
                    document.write(`★ Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de género ${manga.genero}. Consta de ${manga.tomos} tomos y se encuentra disponible en la Editorial ${manga.editorial}` + `</br>`)
                })
                break
            case 2: // Tomos del 13 al 26
                const mangaFiltradoTomos2 = mangas.filter(manga => manga.tomos >= 13 && manga.tomos <= 26)
                mangaFiltradoTomos2.forEach(manga => {
                    console.log(`Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de género ${manga.genero}. Consta de ${manga.tomos} tomos y se encuentra disponible en la Editorial ${manga.editorial}` + `</br>`)
                    document.write(`★ Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de género ${manga.genero}. Consta de ${manga.tomos} tomos y se encuentra disponible en la Editorial ${manga.editorial}` + `</br>`)
                })
                break
            case 3: //Tomos del 26 en adelante
                const mangaFiltradoTomos3 = mangas.filter(manga => manga.tomos > 26)
                mangaFiltradoTomos3.forEach(manga => {
                    console.log(`Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de género ${manga.genero}. Consta de ${manga.tomos} tomos y se encuentra disponible en la Editorial ${manga.editorial}` + `</br>`)
                    document.write(`★ Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de género ${manga.genero}. Consta de ${manga.tomos} tomos y se encuentra disponible en la Editorial ${manga.editorial}` + `</br>`)
                })
                break
        }
        break
    case 4://Por editorial
        do {
            respuestaValidada = prompt("Ingrese el nombre de la editorial que prefiera: \n - IVREA\n - PANINI\n (Escriba textualmente, sin signos de puntuación)").toUpperCase()
        } while (respuestaValidada != "IVREA" && respuestaValidada != "PANINI")
        // Búsqueda según la editorial preferida
        if (respuestaValidada =="IVREA"){
            const mangaFiltradoEditorialIvrea = mangas.filter(manga => manga.editorial == "IVREA")
            mangaFiltradoEditorialIvrea.forEach(manga => {
                console.log(`Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de la Editorial ${manga.editorial} y consta de ${manga.tomos} tomos` + `</br>`)
                document.write(`★ Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de la Editorial ${manga.editorial} y consta de ${manga.tomos} tomos` + `</br>`)
            })
        } else{
            const mangaFiltradoEditorialPanini = mangas.filter(manga => manga.editorial == "PANINI")
            mangaFiltradoEditorialPanini.forEach(manga => {
                console.log(`Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de la Editorial ${manga.editorial} y consta de ${manga.tomos} tomos` + `</br>`)
                document.write(`★ Se ha encontrado el manga ${manga.titulo} del autor ${manga.autor}, es de la Editorial ${manga.editorial} y consta de ${manga.tomos} tomos` + `</br>`)
            })
        }
        break
}