//inicializar o jquery

// $ é +/- = document.getElementById
$(document).ready(function () {

    $('nav a, footer a').click(function () {

        $('html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;

    });


    //validação do formulário
    $('#btnEnviar').click(function () {

        let erro = false;

        if ($('#txtNome').val().trim() == '') {
            $('#txtNome').css('border-color', 'red');
            erro = true;
        } else {
            $('#txtNome').css('border-color', 'green');
        }

        if ($('#txtEmail').val().trim() == '') {
            $('#txtEmail').css('border-color', 'red');
            erro = true;
        } else if (validateEmail($('#txtEmail').val()) == false) {
            //quer dizer que o e-mail é invalido
            $('#txtEmail').css('border-color', 'red');
            erro = true;
        } else {
            $('#txtEmail').css('border-color', 'green');
        }

        if ($('#txtMensagem').val().trim() == '') {
            $('#txtMensagem').css('border-color', 'red');
            erro = true;
        } else {
            $('#txtMensagem').css('border-color', 'green');
        }

        //mensagem de erro e envio
        if (erro == true) {
            $('.dvErro').html("Existe algum erro no formulário");
            $('.dvErro').css('color', 'red');
        } else {

            //envio do Form (submit)
            $('#frmContato').submit();

            $('.dvErro').html("Mensagem enviada com sucesso!");
            $('.dvErro').css('color', 'green');
        }

    });

});

//função para validação de email
function validateEmail(puEmail) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(puEmail);
}
