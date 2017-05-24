<%-- 
    Document   : Principal
    Created on : 08/05/2017, 08:18:19 PM
    Author     : Mary
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Inicio</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300i" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="css/estilo.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css">
        <script src="js/Js.js"></script>
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
                        
                            
                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Vuelos</a>
                            <ul class="dropdown-menu">
                                <li><a href="Vuelo.jsp">Gestión de Vuelos</a></li>
                                <li><a href="BusquedaVuelo.jsp">Busqueda de Vuelo</a></li>
                            </ul></li>    
                        
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



            <!--Slider Banner -->
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">

                    <div class="item active">
                        <img src="images/Southern Sky Column.jpg" alt="BN" width="50" height="100">
                        <div class="carousel-caption">
                            <h3>Southern Sky Column</h3>
                            <p>Vive una experiencia inolvidable en China!</p>
                        </div>
                    </div>

                    <div class="item">
                        <img src="images/edificio.jpg" alt="NY" width="500" height="500">
                        <div class="carousel-caption">
                            <h3>Nueva York</h3>
                            <p>Una cuidad llena de diferentes culturas!</p>
                        </div>
                    </div>

                    <div class="item">
                        <img src="images/playParaiso.jpg" alt="VN" width="460" height="345">
                        <div class="carousel-caption">
                            <h3>Playa Paraiso</h3>
                            <p>Un destino que no te puedes perder</p>
                        </div>
                    </div>

                </div>


            </div>
            <br>
            <br>
            <br>


            <div id="conenido">
                <h1>Nuestros valores</h1>
                <br>
                <h2>Pasion</h2>
                <p>Disfrutamos intensamente nuestro trabajo. Nuestra pasión se manifiesta en nuestro compromiso personal con la 
                    calidad en todo lo que hacemos, y se refleja en la actitud con que nos relacionamos con nuestros públicos de interés.</p>
                <br>
                <h2>Servicio al Cliente</h2>
                <p>nalizamos las tendencias de la industria para conocer y entender las necesidades de nuestros clientes. Enfocamos nuestros recursos y habilidades en satisfacerlas plenamente.</p>
                <br>
                <h2>Trabajo en Equipo</h2>
                <p>Trabajamos en equipo para lograr el crecimiento y eficiencia de la empresa. La colaboración y el respeto son fundamentales para el aprendizaje y crecimiento personal y organizacional.</p>
                <br>
                <h2>Excelencia Operacional</h2>
                <p>Planificamos y ejecutamos todos nuestros procesos con disciplina, excelencia, innovación y prontitud para lograr eficiencia dentro de las mejores prácticas de la industria; en cumplimiento de nuestro Código de Conducta.</p>
                <br>
                <h2>Responsabilidad Social y Ambiental</h2>
                <p>Gestionamos nuestras operaciones de forma sostenible y responsable junto a trabajadores, proveedores y clientes en beneficio de la sociedad, el ambiente y el crecimiento del negocio; logrando así un balance entre ser humano y naturaleza para el bienestar en el largo plazo.</p>

            </div>
            <br>
            <br>
            <br>

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
        </div>
    </body>
</html>