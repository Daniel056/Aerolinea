<%-- 
    Document   : Contactenos
    Created on : 08/05/2017, 08:15:59 PM
    Author     : Mary
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Contactenos</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/estilo.css" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300i" rel="stylesheet">
        <link href="css/estilo.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" href="/resources/demos/style.css">
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script src="js/Js.js"></script>
    </head>
    <body>
        <div id="dialog" title="Gracias">
            <p>Tu Comentario nos ayuda a crecer cada dia mas</p>
        </div>
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
                    <li class="dropdown"><a class="dropdown-toggle"  href="BusquedaVuelo.jsp">Buscador de Vuelos</a>
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Servicios</a>
                        <ul class="dropdown-menu">
                            <li><a href="Servicios.jsp">Nuestros Servicios</a></li>
                        </ul></li>
                   <li><a href="#tf-iniciar-Sesion" class="page-scroll" data-toggle="modal" data-target="#myModal">Iniciar Sesión</a></li>

                </ul>
            </div>
        </nav>
        <!-- Formulario de contacto -->
        <div class="container">
            <h2>Formulario de Contacto</h2>
            <br><br>
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="control-label col-sm-2">Nombre:</label>
                    <div class="col-sm-10">
                        <input  class="form-control" id="nom" placeholder="Ingrese Nombre">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Correo</label>
                    <div class="col-sm-10">
                        <input  class="form-control" id="email" placeholder="Ingrese correo">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" >Telefono:</label>
                    <div class="col-sm-10">
                        <input  class="form-control" id="tel" placeholder="Ingrese Telefono particular">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2">Comentario:</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" id="nom"> </textarea>
                    </div>
                </div>

                <div class="form-group">        
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>



        <footer>
            <div class="caja-redes">


                <a href="#" class="icon-button linkedin"><i class="icon-linkedin"></i><span></span></a>
                <a href="#" class="icon-button pinterest"><i class="icon-pinterest"></i><span></span></a>
                <a href="#" class="icon-button twitter"><i class="icon-twitter"></i><span></span></a>
                <a href="#" class="icon-button facebook"><i class="icon-facebook"></i><span></span></a>
                <a href="#" class="icon-button google-plus"><i class="icon-google-plus"></i><span></span></a>


            </div>
            <div class="DerechosR">
                <p>Derechos Reservados ©  </p>
                <p>Diseño Web: Pablo Fontana-Estudiante de la Universidad Nacional de Costa Rica</p>
            </div>


        </footer>

    </body>
</html>
