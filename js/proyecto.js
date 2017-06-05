const color_relleno ="#d6fb08";
const color_vacio = "#fff";

$(document).ready(function(){
         $("i").on("click", function(){
             var elem = $("i");
             
             var pulsado = $(this).index(); /* con esto sabemos el indice de la estrella sobre la que se ha pulsado*/
             console.log("pulsado: " + pulsado);
             
             
             elem.each(function(){
                 var $elemento = $(this);
                 var indice = $elemento.index();


                /* coloreamos las estrella correspondiente a la pulsada y las anteriores. El resto las dejamos sin colorear */    
                 if (indice <= pulsado)
                 {
                    $elemento.removeClass("fa-star-o");        
                    $elemento.css("color",color_relleno);                     
                    $elemento.addClass("fa-star"); 
                 }
                 else if (indice > pulsado){
                     $elemento.removeClass("fa-star");        
                     $elemento.addClass("fa-star-o");
                     $elemento.css("color",color_vacio);                     
                 }         
           
             });
         });
    
    /* cuando se pulsa el botón limpiar se dejan las estrellas vacías*/
        $("button").on("click", function(){
            var elem = $("i");
            elem.each(function(){
                var $elemento = $(this);
                 $elemento.removeClass("fa-star");        
                 $elemento.addClass("fa-star-o");
                 $elemento.css("color",color_vacio);                                
             });

        });     
});