<%-- 
    Document   : Rutas
    Created on : 08/05/2017, 06:37:21 PM
    Author     : Mary
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Buscador de Rutas</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300i" rel="stylesheet">
        <link href="css/estilo.css" rel="stylesheet" type="text/css"/>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>



        <script src="js/utils.js" type="text/javascript"></script>
        <script src="js/RutasJS.js" type="text/javascript"></script>

        

    </head>
    <body>

        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- Modal del BootsTrap para mostrar mensajes                  -->
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <div class="modal fade" id="myModalM" role="dialog">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Modal Header</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <p>This is a small modal.</p>
                    </div>
                </div>
            </div>
        </div>
        
         <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- Modal del BootsTrap para mostrar formulario con busqueda                  -->
        <div class="modal fade" id="myModalFormulario" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Consultando Rutas</h4>
                    </div>
                    <div class="modal-body" id="myModalBody">
                        <div class="container-fluid table-responsive">
                            <table class="table table-hover table-condensed" id="tablaRutasBusqueda"></table>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- -------------------------------------------------------->
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
                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Contactenos</a>
                            <ul class="dropdown-menu">
                                <li><a href="Contactenos.jsp">Formulario de Contacto</a></li>
                            </ul></li>
                        <li><a href="#tf-iniciar-Sesion" class="page-scroll" data-toggle="modal" data-target="#myModal">Iniciar Sesión</a></li>

                    </ul>
                </div>
            </nav>
            <!--    Aqui empieza el modal-->
            <div id="myModalI" class="modal fade" role="dialog">
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


            <!-- ********************************************************** -->
            <!-- COLUMNA DEL MENU -->
            <!-- ********************************************************** -->
            <div class="col-md-12">
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Menú Administrativo
                        <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li><a href="Flota.jsp">Gestión de Flota</a></li>
                        <li><a href="Rutas.jsp">Gestión de Rutas</a></li>
                        <li><a href="Horarios.jsp">Gestión de Horarios</a></li>
                        <li><a href="Vuelo.jsp">Gestion de Vuelos</a></li>
                        <li class="divider"></li>
                        <li><a href="Logout">Cerrar Sesión</a></li>
                    </ul>
                </div>
            </div>


            <!-- Buscador de vuelos -->
            <div class="container">

                <h2 style="margin-left: 10%">Gestión de rutas</h2>
                <br>
                <br>

                <form class="form-horizontal" id="formRutas" onsubmit="enviar(); return false;">
                    <div class="form-group" id="groupIdRuta">
                        <label class="control-label col-sm-2" for="idRuta">Identificador de ruta: </label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="idRuta" onkeypress="return validaNum(event)">
                        </div>
                    </div>
                    <div class="form-group" id="groupLugarSalida">
                        <label class="control-label col-sm-2" for="lugarSalida">Lugar de Salida: </label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="lugarSalida">
                        </div>
                    </div>
                    <div class="form-group" id="groupLugarDestino" >
                        <label class="control-label col-sm-2" for="lugarDestino">Lugar de Destino: </label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="lugarDestino">
                        </div>
                    </div>
                    <div class="form-group" id="groupDuracion">
                        <label class="control-label col-sm-2" for="duracion">Duración: </label>
                        <div class="col-sm-3">
                            <div class="input-group clock">
                                <input type="text" class="form-control" value="" placeholder="Ahora" id="duracion">
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-time"></span>
                                </span>
                            </div>

                        </div>
                    </div>

                    <div class="form-group" id="groupCosto">
                        <label class="control-label col-sm-2" for="precio">Costo: </label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="precio">
                        </div>
                    </div>
                    <div class="form-group" id="groupIdHorarioR">
                        <label class="control-label col-sm-2" for="idHorarioR">Digite el id del horario al que corresponde esta ruta: </label>
                        <div class="col-sm-3">
                            <select  class="form-control" id="idHorarioR"></select>
                        </div>
                    </div>
                    <br>
                    <div class="form-group" id="cancelarR">
                        <input type="hidden" value="agregarRutas" id="rutasAction"/>
                        <button type="reset" class="btn btn-default" id="cancelar">Cancelar</button>
                        <button type="submit" class="btn btn-default" id="enviar">Agregar ruta</button>
                    </div>
                    <br><br><br>
                    <hr>
                    <h3>Rutas Existentes</h3>
                     <div class="form-group" id="groupCedula">
                                <div class="col-sm-4" style="text-align: right; vertical-align: middle;">
                                    <p><b>Buscar por Lugar de Salida de la Ruta:</b></p>
                                </div>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="buscarId" placeholder="Digite Lugar de Salida de la Ruta">
                                </div>
                                <div class="col-sm-4">
                                    <button type="button" class="btn btn-info centered"    id="BuscarRuta">
                                        Buscar <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                     </div>
                    <hr>
                    <div class="container-fluid table-responsive">
                        <table class="table table-hover table-condensed" id="tablaRutas"></table>
                    </div> 
                    <nav aria-label="Page navigation" id="mio">
                        <ul class="pagination" id="pagination"></ul>
                    </nav>
                </form>
                <br>
                <br>
                <br>
                <hr>
                <br>
                <br>
                <table class="table table-hover table-condensed" id="tablaHorarios"></table>
                <div class="form-group height25" >
                    <div class="alert alert-success hiddenDiv" id="mesajeResult">
                        <strong id="mesajeResultNeg">Info!</strong> 
                        <span id="mesajeResultText">This alert box could indicate a neutral informative change or action.</span>
                    </div>
                </div>
            </div>
        </div>

        <!--Pie de pagina -->
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