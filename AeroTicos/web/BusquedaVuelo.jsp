<%-- 
    Document   : BusquedaVuelo
    Created on : 08/05/2017, 08:13:16 PM
    Author     : Mary
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Buscador de Vuelos</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300i" rel="stylesheet">

        <link href="css/estilo.css" rel="stylesheet" type="text/css"/>
        <link href="css/datetimepicker.min.css" rel="stylesheet" type="text/css"/>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css">

        <script src="js/Js.js"></script>
        <script src="js/datetimepicker.js" type="text/javascript"></script>
    </head>
    <body>
         <div id="container">
            <div id="logo">
                <img align="left" id="imagen" class="img-rounded" alt="Cinque Terre"  src="images/logo.jpg"/>
                 
                <p id="nombre">AeroTicos</p>
            </div>

           <nav class="navbar navbar-default">
                <div class="container-fluid">

                    <ul class="nav navbar-nav">
                        <li><a href="Principal.jsp">Inicio</a></li>
                        <li class="dropdown"><a class="dropdown-toggle" href="Historia.jsp">Acerca de nosotros</a>
                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Servicios</a>
                            <ul class="dropdown-menu">
                                <li><a href="Servicios.jsp">Nuestros Servicios</a></li>
                            </ul></li>
                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Contactenos</a>
                            <ul class="dropdown-menu">
                                <li><a href="Contactenos.jsp">Formulario de Contacto</a></li>
                            </ul></li>
                        <li><a href="#tf-iniciar-Sesion" class="page-scroll" data-toggle="modal" data-target="#myModal">Iniciar Sesión</a></li>

                    </ul>
                </div>
            </nav>
            <!--    Aqui empieza el modal-->
            <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <!-- Modal content-->

                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <div class="panel panel-login">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <a href="#" class="active" id="login-form-link">Iniciar sesión</a>
                                        </div>
                                        <div class="col-xs-6">
                                            <a href="#" id="register-form-link">Regístrate ahora</a>
                                        </div>
                                    </div>
                                    <hr>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <form id="login-form" action="" method="post" role="form" style="display: block;">
                                                <div class="form-group">
                                                    <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Usuario" value="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Contraseña">
                                                </div>
                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col-sm-6 col-sm-offset-3">
                                                            <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Iniciar sesión">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="text-center">
                                                                <a href="" tabindex="5" class="forgot-password">¿Has olvidado tu contraseña?</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Buscador de vuelos -->
            <div class="container">
                <h2>Buscador de Vuelos</h2>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-2">Ciudad de Origen:</label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="ori">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Ciudad de Destino</label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="des">
                        </div>
                    </div>
                    <div class="form-group" id="groupfechaSalida">
                        <label class="control-label col-sm-2" id="Salida" >Fecha de Salida</label>
                        <div class="col-sm-3">
                                <div  id="ano" class="input-group date form_date" data-date="" data-date-format="dd/mm/yyyy" data-link-field="dtp_input2" data-link-format="dd/mm/yyyy">
                                    <input class="form-control" type="text" value="" readonly placeholder="dd/mm/aaaa" id="anoTxt">
                                    <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" >Fecha de Regreso</label>
                        <div  class="col-sm-3">
                            <div class='input-group date' id='divMiCalendario2'>
                                <input type='text' id="fechaRegreso" class="form-control"  readonly/>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" >Cantidad de Pasajeros</label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="FR">
                        </div>
                    </div>

                    <div class="form-group">        
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-default">Enviar</button>
                        </div>
                    </div>
                    <div id="googleMap"></div>

                </form>

                <hr>
                <h3>Resultados de la busqueda</h3>
                <table class="table table-hover table-condensed" id="tablaVuelos"></table>
            </div>

        </div>
        <script src="js/Js.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>

    </body>
</html>
