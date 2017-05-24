/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.controller;

import com.google.gson.Gson;
import cr.ac.una.prograiv.aerolinea.bl.AvionBL;
import cr.ac.una.prograiv.aerolinea.bl.RutaBL;
import cr.ac.una.prograiv.aerolinea.domain.Avion;
import cr.ac.una.prograiv.aerolinea.domain.Ruta;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Pablo
 */
public class AvionServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
       PrintWriter out = response.getWriter();
       try {
            //String para guardar el JSON generaro por al libreria GSON
            String json;
            
            //Se crea el objeto Persona
            Avion p = new Avion();

            //Se crea el objeto de la logica de negocio
            AvionBL pBL = new AvionBL();

            //Se hace una pausa para ver el modal
            Thread.sleep(100);
            
            
            //**********************************************************************
            //se toman los datos de la session
            //**********************************************************************
            HttpSession session = request.getSession();
            
            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String accion = request.getParameter("accion");
            switch (accion) {
                case "consultarAviones":
                    json = new Gson().toJson(pBL.findAll(Avion.class.getName()));
                    out.print(json);
                    break;
                case "eliminarAviones":
                    
                        p.setIdAvion(Integer.parseInt(request.getParameter("idAvion")));
                    
                        //Se elimina el objeto
                        pBL.delete(p);

                        //Se imprime la respuesta con el response
                        out.print("El avion fue eliminado correctamente");
                 
                    break;
                case "buscarMarca":
                    String idA = request.getParameter("valor");
                    List<Avion> p1 = pBL.findAll(Avion.class.getName());
                    boolean change = true;
                    json = "[";
                    for (int i = 0; i < p1.size(); i++) {
                        if(p1.get(i).getMarca().equals(idA)){
                            if(change){
                                json += new Gson().toJson(p1.get(i));
                                change = false;
                            }
                            else{
                                json += ",";
                                json += new Gson().toJson(p1.get(i));
                            }
                        }
                    }
                    
                    json += "]";
                    
                    out.print(json);
                    break;
                case "consultarAvionesByID":
                    //se consulta la persona por ID
                    p = pBL.findByiD(Integer.parseInt(request.getParameter("idAvion")));
                    
                    //se pasa la informacion del objeto a formato JSON
                    json = new Gson().toJson(p);
                    out.print(json);
                    break;
                    
                    
                case "agregarAviones": case "modificarAvion":
                    boolean validate= true;    
                    //Se llena el objeto con los datos enviados por AJAX por el metodo post
                    p.setIdAvion(Integer.parseInt(request.getParameter("id")));
                     
                    p.setAnno(Integer.parseInt(request.getParameter("ano")));
                    //Guardar Correctamente en la base de datos
//                    String fechatxt = request.getParameter("fechaNacimiento");
//                    DateFormat format = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
//                    Date date = format.parse(fechatxt);
//                    p.setFecNacimiento(date);
                    
                    p.setModelo(request.getParameter("Modelo"));
                    p.setMarca(request.getParameter("Marca"));
                    p.setCantidadPasajeros(Integer.parseInt(request.getParameter("pasajeros")));
                    p.setFilas(Integer.parseInt(request.getParameter("filas")));
                    p.setAsientosXfila(Integer.parseInt(request.getParameter("axfilas")));
                    
                   
                    if(validate==false){
                        out.print("E~El campo excede el maximo de caracteres");
                    }
                   else if(accion.equals("agregarAviones")){ //es insertar personas
                        //Se guarda el objeto
                        if(pBL.findByiD(p.getIdAvion())== null){
                            pBL.save(p);
                            out.print("C~La ruta fue ingresada correctamente");
                        }
                        else{
                        out.print("P~Error de llave primaria");
                        }   
                    }else{//es modificar persona
                        //Se guarda el objeto
                        pBL.merge(p);

                        //Se imprime la respuesta con el response
                        out.print("C~La ruta fue modificada correctamente");
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
