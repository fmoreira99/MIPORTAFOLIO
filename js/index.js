function calcularDiferenciaEnDias(fechaTexto) {   
   const fechaIngresada = new Date(fechaTexto);
   if (isNaN(fechaIngresada)) {
     return "Fecha no válida";
   }
   const fechaActual = new Date();
   const diferenciaEnMilisegundos = fechaIngresada - fechaActual;
   const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

   diasGallinas(Math.abs(diferenciaEnDias))
   return `La diferencia en días es: ${diferenciaEnDias}`;
 }
 
function diasGallinas(ndias)
{
   $('#container-dias').html('')

   for(let i=1; i<=ndias; i++)
   {
     
      $('#container-dias').append(`<div class="dia-gallina letraLeangue slide-br  " >
      ${i}
      </div>`)
   }
   const n_gestacion=21;
   let F_dias=ndias- n_gestacion;
   for(let d=(ndias+1); d<=n_gestacion; d++)
   {
     
      $('#container-dias').append(`<div class="dia-gallina colorR letraLeangue slide-br  " >
      ${d}
      </div>`)
   }
}
const removeC=()=>{
   $('#btn_admin').removeClass('activate ');
   $('#btn_incubacion').removeClass('activate ');
   $('#btn_ventas').removeClass('activate ');
}

$(document).ready( function() {
   removeC();
   $('#container-admin').show();
   $('#container-gestacion').hide();
   $('#containe-ventas').hide(); 
   $('#btn_admin').addClass('activate ');
});

 $("#btn_admin").click(function(evento){
   removeC();
    $('#container-admin').show();
    $('#container-gestacion').hide();
    $('#containe-ventas').hide();
    $('#btn_admin').addClass('activate ');

 });
 
 $("#btn_incubacion").click(function(evento){
   removeC();
   $('#containe-ventas').hide(); 
   $('#container-gestacion').show();
   $('#container-admin').hide();
   $('#btn_incubacion').addClass('activate ');
 });
 
 $("#btn_ventas").click(function(evento){
   removeC();
 
   $('#container-admin').hide();
   $('#container-gestacion').hide();
   $('#containe-ventas').show(); 
   $('#btn_ventas').addClass('activate ');
 });
 
