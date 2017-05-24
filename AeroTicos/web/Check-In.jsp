<%-- 
    Document   : Check-In
    Created on : 08/05/2017, 08:14:57 PM
    Author     : Mary
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Check-in</title>
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

        < <div id="container">
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
        <div class="container">
            <h3 align="center">Proceda a escoger sus asientos</h3>
            <br><br>
            <div align='center'>
                <button type="button" >Asiento Disponible</button>
            <button type="button" class='asientoOcupado'>Asiento Ocupado</button>
            <button type="button" class='asientoSeleccionado'>Asiento Seleccionado</button>
            </div>
            <br>
            <br>
            <div class="Ckeck-in">
                <table class="table">
                    <thead>
                        <tr>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                            <th>D</th>
                            <th>E</th>
                            <th>F</th>
                            <th>G</th>
                            <th>H</th>
                            <th>I</th>
                            <th>J</th>
                            <th>K</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button type="button" id='A1' onclick="cambiarSeleccion('A1')">A1</button></td>
                            <td><button type="button" id='B1' onclick="cambiarSeleccion('B1')">B1</button></td>
                            <td><button type="button" id='C1' onclick="cambiarSeleccion('C1')">C1</button></td>
                            <td><button type="button" id='D1' onclick="cambiarSeleccion('D1')">D1</button></td>
                            <td><button type="button" id='E1' onclick="cambiarSeleccion('E1')">E1</button></td>
                            <td><button type="button" id='F1' onclick="cambiarSeleccion('F1')">F1</button></td>
                            <td><button type="button" id='G1' onclick="cambiarSeleccion('G1')">G1</button></td>
                            <td><button type="button" id='H1' onclick="cambiarSeleccion('H1')">H1</button></td>
                            <td><button type="button" id='I1' onclick="cambiarSeleccion('I1')">I1</button></td>
                            <td><button type="button" id='J1' onclick="cambiarSeleccion('J1')">J1</button></td>
                            <td><button type="button" id='K1' onclick="cambiarSeleccion('K1')">K1</button></td>
                        </tr>
                        <tr>
                            <td><button type="button" id='A2' onclick="cambiarSeleccion('A2')">A2</button></td>
                            <td><button type="button" id='B2' onclick="cambiarSeleccion('B2')">B2</button></td>
                            <td><button type="button" id='C2' onclick="cambiarSeleccion('C2')">C2</button></td>
                            <td><button type="button" id='D2' onclick="cambiarSeleccion('D2')">D2</button></td>
                            <td><button type="button" id='E2' onclick="cambiarSeleccion('E2')">E2</button></td>
                            <td><button type="button" id='F2' onclick="cambiarSeleccion('F2')">F2</button></td>
                            <td><button type="button" id='G2' onclick="cambiarSeleccion('G2')">G2</button></td>
                            <td><button type="button" id='H2' onclick="cambiarSeleccion('H2')">H2</button></td>
                            <td><button type="button" id='I2' onclick="cambiarSeleccion('I2')">I2</button></td>
                            <td><button type="button" id='J2' onclick="cambiarSeleccion('J2')">J2</button></td>
                            <td><button type="button" id='K2' onclick="cambiarSeleccion('K2')">K2</button></td>
                        </tr>
                        <tr>
                            <td><button type="button" id='A3' onclick="cambiarSeleccion('A3')">A3</button></td>
                            <td><button type="button" id='B3' onclick="cambiarSeleccion('B3')">B3</button></td>
                            <td><button type="button" id='C3' onclick="cambiarSeleccion('C3')">C3</button></td>
                            <td><button type="button" id='D3' onclick="cambiarSeleccion('D3')">D3</button></td>
                            <td><button type="button" id='E3' onclick="cambiarSeleccion('E3')">E3</button></td>
                            <td><button type="button" id='F3' onclick="cambiarSeleccion('F3')">F3</button></td>
                            <td><button type="button" id='G3' onclick="cambiarSeleccion('G3')">G3</button></td>
                            <td><button type="button" id='H3' onclick="cambiarSeleccion('H3')">H3</button></td>
                            <td><button type="button" id='I3' onclick="cambiarSeleccion('I3')">I3</button></td>
                            <td><button type="button" id='J3' onclick="cambiarSeleccion('J3')">J3</button></td>
                            <td><button type="button" id='K3' onclick="cambiarSeleccion('K3')">K3</button></td>
                        </tr>
                        <tr>
                            <td><hr></td>
                            <td></td>
                            <td><hr></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><hr></td>
                            <td></td>
                            <td><hr></td>
                        </tr>
                        <tr>
                            <td><button type="button" id='A4' onclick="cambiarSeleccion('A4')">A4</button></td>
                            <td><button type="button" id='B4' onclick="cambiarSeleccion('B4')">B4</button></td>
                            <td><button type="button" id='C4' onclick="cambiarSeleccion('C4')">C4</button></td>
                            <td><button type="button" id='D4' onclick="cambiarSeleccion('D4')">D4</button></td>
                            <td><button type="button" id='E4' onclick="cambiarSeleccion('E4')">E4</button></td>
                            <td><button type="button" id='F4' onclick="cambiarSeleccion('F4')">F4</button></td>
                            <td><button type="button" id='G4' onclick="cambiarSeleccion('G4')">G4</button></td>
                            <td><button type="button" id='H4' onclick="cambiarSeleccion('H4')">H4</button></td>
                            <td><button type="button" id='I4' onclick="cambiarSeleccion('I4')">I4</button></td>
                            <td><button type="button" id='J4' onclick="cambiarSeleccion('J4')">J4</button></td>
                            <td><button type="button" id='K4' onclick="cambiarSeleccion('K4')">K4</button></td>
                        </tr>
                        <tr>
                            <td><button type="button" id='A5' onclick="cambiarSeleccion('A5')">A5</button></td>
                            <td><button type="button" id='B5' onclick="cambiarSeleccion('B5')">B5</button></td>
                            <td><button type="button" id='C5' onclick="cambiarSeleccion('C5')">C5</button></td>
                            <td><button type="button" id='D5' onclick="cambiarSeleccion('D5')">D5</button></td>
                            <td><button type="button" id='E5' onclick="cambiarSeleccion('E5')">E5</button></td>
                            <td><button type="button" id='F5' onclick="cambiarSeleccion('F5')">F5</button></td>
                            <td><button type="button" id='G5' onclick="cambiarSeleccion('G5')">G5</button></td>
                            <td><button type="button" id='H5' onclick="cambiarSeleccion('H5')">H5</button></td>
                            <td><button type="button" id='I5' onclick="cambiarSeleccion('I5')">I5</button></td>
                            <td><button type="button" id='J5' onclick="cambiarSeleccion('J5')">J5</button></td>
                            <td><button type="button" id='K5' onclick="cambiarSeleccion('K5')">K5</button></td>
                        </tr>
                        <tr>
                            <td><button type="button" id='A6' onclick="cambiarSeleccion('A6')">A6</button></td>
                            <td><button type="button" id='B6' onclick="cambiarSeleccion('B6')">B6</button></td>
                            <td><button type="button" id='C6' onclick="cambiarSeleccion('C6')">C6</button></td>
                            <td><button type="button" id='D6' onclick="cambiarSeleccion('D6')">D6</button></td>
                            <td><button type="button" id='E6' onclick="cambiarSeleccion('E6')">E6</button></td>
                            <td><button type="button" id='F6' onclick="cambiarSeleccion('F6')">F6</button></td>
                            <td><button type="button" id='G6' onclick="cambiarSeleccion('G6')">G6</button></td>
                            <td><button type="button" id='H6' onclick="cambiarSeleccion('H6')">H6</button></td>
                            <td><button type="button" id='I6' onclick="cambiarSeleccion('I6')">I6</button></td>
                            <td><button type="button" id='J6' onclick="cambiarSeleccion('J6')">J6</button></td>
                            <td><button type="button" id='K6' onclick="cambiarSeleccion('K6')">K6</button></td>
                        </tr>

                    </tbody>
                </table>
            </div> 
            <br><br>
            <button type="submit" class="btn btn-default" id="atras">Atrás</button>
            <button type="submit" class="btn btn-default" id="continuar">Continuar</button>
            <br><br>
        </div>


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

