$(function () {

    $(".card-title").click(function () {
        $(".card-text").toggle("slow")
    })

    $(".correo").click(function () {
        alert("El correo fue enviado correctamente...")
    })

    // $("#ingredientes").on("dblclick", function (){
    //     $(this).css("color","red");
    // })
    // $("#preparacion").on("dblclick", function (){
    //     $(this).css("color","red");
    // })

    $("#ingredientes").on("dblclick", function () {
        if (($(this).css('color')) == 'rgb(0, 0, 0)') {
            $(this).css('color', 'rgb(255, 0, 0)');
            console.log("rojo");
        } else {
            $(this).css('color', 'rgb(0, 0, 0)');
            console.log("negro");
        }
    })

    $("#preparacion").on("dblclick", function () {
        if (($(this).css('color')) == 'rgb(0, 0, 0)') {
            $(this).css('color', 'rgb(255, 0, 0)');
            console.log("rojo");
        } else {
            $(this).css('color', 'rgb(0, 0, 0)');
            console.log("negro");
        }
    })


    $('#formulario').click(function () {
        window.location = 'https://q0iko09q8qf.typeform.com/to/lDrj8SBU'
    });


    // Habiliar uso popover
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    // Habilitar uso tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)

    })

})