$(function(){
    var bId = '';
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $(".carousel").carousel({
      interval: 2000
    });

    $('#contacto').on('show.bs.modal', function (e){
      console.log('el modal contacto se está mostrando');
      var n = e.relatedTarget.id.toString();
      bId=n;
      $('#'+bId).removeClass('btn-outline-success');
      $('#'+bId).addClass('btn-primary');
      $('#'+bId).prop('disabled',true);
    });
    $('#contacto').on('shown.bs.modal', function (e){
      console.log('el modal contacto se mostró');
    });
    $('#contacto').on('hide.bs.modal', function (e){
      console.log('el modal contacto se oculta');
    });
    $('#contacto').on('hidden.bs.modal', function (e){
      console.log('el modal contacto se ocultó');
      $('#'+bId).removeClass('btn-primary');
      $('#'+bId).addClass('btn-outline-success');
      $('#'+bId).prop('disabled',false);
    });

  });