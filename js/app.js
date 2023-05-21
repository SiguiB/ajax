function start(){
    $.ajax({
        type: "GET",
        url: "pelis.xml",
        dataType: "xml",
        success: function(xml) {
            $(xml).find('pelicula').each(function(){
            var titulo = $(this).find('titulo').text();
            var director = $(this).find('director').text();
            var genero = $(this).find('genero').text();
            var año = $(this).find('año').text();

            $("#tabla tbody").append("<tr><td>" + titulo + "</td><td>" + director + "</td><td>" + genero + "</td><td>" + año + "</td></tr>");
         });

			$("#tabla").DataTable({
				"paging": true,
				"searching": true,
				"ordering": true
			});
                   /* $("#buscar").on("keyup", function() {
						tabla.search(this.value).draw();
					});*/

				/*	$("#tabla thead th").on("click", function() {
						var indice = $(this).index();
						var orden = tabla.order()[0][1];
						tabla.order([[ indice, orden == "asc" ? "desc" : "asc" ]]).draw();
					});*/
				}
			});
		};
    $(document).ready(start);