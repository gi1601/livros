
var form = document.querySelector("#formLivros")

 form.addEventListener("submit", function(event) {
     event.preventDefault() 

     var livros = document.querySelector("input[name=livros]").value

     
     var url = "https://gutendex.com/books?search=" + encodeURI(livros)

     
     fetch(url)
         .then(function(response) {
             return response.json() 
         })
         .then(function(data) {
            console.log(data)
            var conteudo = document.querySelector("#conteudo")
            var resultados = data.results; 
            var html = ""

            resultados.forEach(livro => {
                html += "<div class='html'>"
                html += "<div class='sarah'>"
                html += "<b><p class='html2'> Title: " + livro.title + "</p></b> "
                html += "<p class='html1' >ID: " + livro.id + "</p>"
                html += "<p class='html3'>Subjects: " + livro.subjects + "</p>"
                html += "<b><p class='html4'> Authors: " + livro.authors + "</p></b>"
                html += "<p class='html5'>Translators: " + livro.translators + "</p>"
                html += "</div>"
                html += "<div class='pires'>"
                html += "<p class='html6'>Bookshelves: " + livro.bookshelves + "</p>"
                html += "<p class='html7'>Languages: " + livro.languages + "</p>"
                html += "<p class='html8'>Copyright: " + livro.copyright + "</p>"
                html += "<p class='html9'>Media_type: " + livro.media_type + "</p>"
                html += "<p class='html10'>Formats: " + livro.formats + "</p>"
                html += "<p class='html11'>Download_count: " + livro.download_count + "</p>"
                html += "</div>"
                html += "</div>"

                conteudo.innerHTML = html
            });
             

         })
 })