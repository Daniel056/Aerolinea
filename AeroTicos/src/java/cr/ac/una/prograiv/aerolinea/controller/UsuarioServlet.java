/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.controller;


import com.google.gson.Gson;
import cr.ac.una.prograiv.aerolinea.bl.AvionBL;
import cr.ac.una.prograiv.aerolinea.bl.UsuarioBL;
import cr.ac.una.prograiv.aerolinea.domain.Avion;
import cr.ac.una.prograiv.aerolinea.domain.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
/**
 *
 * @author Pablo
 */
public class UsuarioServlet extends HttpServlet {
    
    
     /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            //String para guardar el JSON generaro por al libreria GSON
            String json;
            
            //Se crea el objeto Persona
            Usuario a = new Usuario();

            //Se crea el objeto de la logica de negocio
            UsuarioBL aBL = new UsuarioBL();

            //Se hace una pausa para ver el modal
            Thread.sleep(1000);
            
            
            //**********************************************************************
            //se toman los datos de la session
            //**********************************************************************
            HttpSession session = request.getSession();
            
            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String accion = request.getParameter("accion");
            switch (accion) {
                              
                case "agregarUsuario":

                    //Se llena el objeto con los datos enviados por AJAX por el metodo post
                    a.setIdUsuario(Integer.parseInt(request.getParameter("id")));
                    a.setNombUsuario(request.getParameter("nombre"));
                     a.setApellidos(request.getParameter("apellidos"));
                    //Guardar Correctamente en la base de datos
                    String fechatxt = request.getParameter("fechaNacimiento");
                    DateFormat format = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
                    Date date = format.parse(fechatxt);

                    a.setFechaNacimiento(date);  //aqui tengo que ver como settear un date
                    a.setCorreoElectronico(request.getParameter("correo"));
                    a.setDireccion(request.getParameter("direccion"));
                    a.setTelefonoTrabajo(request.getParameter("telefono"));
                    a.setCelular(request.getParameter("celular"));
                    a.setConstrasena(request.getParameter("password"));
                    

                    if(accion.equals("agregarUsuario")){ //es insertar aviones
                        //Se guarda el objeto
                        aBL.save(a);

                        //Se imprime la respuesta con el response
                        out.print("C~El usuario fue ingresado correctamente");
                        
                    }else{//es modificar persona
                        //Se guarda el objeto
                        aBL.merge(a);

                        //Se imprime la respuesta con el response
                        out.print("C~El usuario fue modificado correctamente");
                    }
                    
                    break;
                    
                default:
                    out.print("E~No se indico la acción que se desea realizare");
                    break;
            }

        } catch (NumberFormatException e) {
            out.print("E~" + e.getMessage());
        } catch (Exception e) {
            out.print("E~" + e.getMessage());
        }
    }
    
  // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    
}
