<%-- 
    Document   : Registro
    Created on : May 12, 2017, 4:09:19 PM
    Author     : Pablo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registro</title>
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="js/script.js" type="text/javascript"></script>

        <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300i" rel="stylesheet">

        <link href="css/estilo.css" rel="stylesheet" type="text/css"/>
        <link href="css/datetimepicker.min.css" rel="stylesheet" type="text/css"/>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="js/Js.js" type="text/javascript"></script>
        <script src="js/datetimepicker.js" type="text/javascript"></script>

        <script src="js/UsuarioJS.js" type="text/javascript"></script>
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
                                            <a href="Registro.jsp" id="register-form-link">Regístrate ahora</a>
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
            
            
            
            <!-----------Modal de registro -->

            <div class="modal fade" id="myModal1" role="dialog">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title" id="myModalTitle">Modal Header</h4>
                        </div>
                        <div class="modal-body" id="myModalMessage">
                            <p>Se envio el usuario Correctamente.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-----------Modal de registro -->

            <div class="modal fade" id="myModal2" role="dialog">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title" id="myModalTitle">Modal Header</h4>
                        </div>
                        <div class="modal-body" id="myModalMessage">
                            <p>Se envio el usuario Correctamente.</p>
                        </div>
                    </div>
                </div>
            </div>
            
             <!-- Gestion de Usuarios -->
            <div class="container">

                <h2 style="margin-left: 10%">Resgistro para Nuevos Usuarios</h2>
                <br>
                <br>

                <form class="form-horizontal" id="formUsuario">
                    <div class="form-group" id="groupIdUsuario">
                        <label class="control-label col-sm-2" for="idUsuario">Identificacion: </label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="idUsuario" type="number" >
                        </div>
                    </div>
                    <div class="form-group" id="groupNombre">
                        <label class="control-label col-sm-2" for="nom">Nombre: </label>
                        <div class="col-sm-3">
                             <input  class="form-control" id="nom" >
                        </div>
                    </div>
                    <div class="form-group" id="groupApe" >
                        <label class="control-label col-sm-2" for="ape">Apellidos: </label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="ape" >
                        </div>
                    </div>
                    <div class="form-group" id="groupAno">
                         <label class="control-label col-sm-2" for="ano">Año de Nacimiento:</label>
                            <div class="col-sm-3">
                                <div  id="ano" class="input-group date form_date" data-date="" data-date-format="dd/mm/yyyy" data-link-field="dtp_input2" data-link-format="dd/mm/yyyy">
                                    <input class="form-control" type="text" value="" readonly placeholder="dd/mm/aaaa" id="anoTxt">
                                    <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                         </div>
                         <div class="form-group" id="groupCorreo" >
                        <label class="control-label col-sm-2" for="email">Correo Electronico: </label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="email" type="email">
                        </div>
                    </div>
                    <div class="form-group" id="groupDir" >
                        <label class="control-label col-sm-2" for="dir">Direccion: </label>
                        <div class="col-sm-3">
                             <textarea class="form-control" rows="2" id="dir"></textarea>
                        </div>
                    </div>
                     <div class="form-group" id="groupTel" >
                        <label class="control-label col-sm-2" for="tel">Telefono de Trabajo: </label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="tel" type="number">
                        </div>
                    </div>
                     <div class="form-group" id="groupCel" >
                        <label class="control-label col-sm-2" for="cel">Celular: </label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="cel" type="number">
                        </div>
                    </div>
                    
                    <div class="form-group" id="groupPass" >
                        <label class="control-label col-sm-2" for="pass">Contraseña: </label>
                        <div class="col-sm-3">
                            <input  class="form-control" id="pass" type="number">
                        </div>
                    </div>
                    

                    
                    <br>
                    <div class="form-group" id="cancelarR">
                        <input type="hidden" value="agregarUsuarios" id="usuarioAction"/>
                        <button type="reset" class="btn btn-default" id="cancelar">Cancelar</button>
                        <button type="submit" class="btn btn-default" id="enviar">Agregar Usuario</button>
                    </div>
                    </div>
                    
                    

        
        
        
    </div>
    </body>
</html>
