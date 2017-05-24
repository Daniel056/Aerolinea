/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.controller;

import com.google.gson.Gson;
import cr.ac.una.prograiv.aerolinea.bl.AvionBL;
import cr.ac.una.prograiv.aerolinea.bl.HorarioBL;
import cr.ac.una.prograiv.aerolinea.bl.RutaBL;
import cr.ac.una.prograiv.aerolinea.bl.VueloBL;
import cr.ac.una.prograiv.aerolinea.domain.Avion;
import cr.ac.una.prograiv.aerolinea.domain.Ruta;
import cr.ac.una.prograiv.aerolinea.domain.Vuelo;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Pablo
 */
public class VuelosServlet extends HttpServlet {

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
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            try {
            //String para guardar el JSON generaro por al libreria GSON
            String json;
            
            //Se crea el objeto Persona
            Vuelo p = new Vuelo();

            //Se crea el objeto de la logica de negocio
            VueloBL pBL = new VueloBL();
            RutaBL rBL = new RutaBL();
            AvionBL  aBL = new AvionBL();

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
                case "consultarVuelos":
                    json = new Gson().toJson(pBL.findAll(Vuelo.class.getName()));
                    out.print(json);
                    break;
                case "consultarAviones":
                    json = new Gson().toJson(aBL.findAll(Avion.class.getName()));
                    out.print(json);
                    break;
                case "consultarRutas":
                    json = new Gson().toJson(rBL.findAll(Ruta.class.getName()));
                    out.print(json);
                    break; 
                case "buscarId":
                    int idA = Integer.parseInt(request.getParameter("valor"));
                    
                    List<Vuelo> p1 = pBL.findAll(Vuelo.class.getName());
                    boolean change = true;
                    json = "[";
                    for (int i = 0; i < p1.size(); i++) {
                        if(p1.get(i).getIdVuelo().equals(idA)){
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
                    
                case "eliminarVuelo":
                     //verifica que solo los administradores pueden eliminar personas
                        p.setIdVuelo(Integer.parseInt(request.getParameter("idVuelo")));
                    
                        //Se elimina el objeto
                        pBL.delete(p);

                        //Se imprime la respuesta con el response
                        out.print("El vuelo fue eliminada correctamente");
                   
                    break;
                
                case "consultarVuelosByID":
                    //se consulta la persona por ID
                    p = pBL.findByiD(Integer.parseInt(request.getParameter("idVuelo")));
                    
                    //se pasa la informacion del objeto a formato JSON
                    json = new Gson().toJson(p);
                    out.print(json);
                    break;
                    
                    
                case "agregarVuelos": case "modificarVuelo":
                    boolean validate= true;    
                  
                    p.setIdVuelo(Integer.parseInt(request.getParameter("idVuelo")));
                    p.setPkfkAvion(Integer.parseInt(request.getParameter("idAvion")));
                    p.setPkfkRuta(Integer.parseInt(request.getParameter("idRuta")));
                    //Se guarda el objeto
                        if(aBL.findByiD(p.getPkfkAvion())== null && rBL.findByiD(p.getPkfkRuta())== null){
                        //Se imprime la respuesta con el response
                        out.print("P~Error de llave primaria de horario");
                        break;
                        }

                    if(validate==false){
                        out.print("E~El campo excede el maximo de caracteres");
                    }
                   else if(accion.equals("agregarVuelos")){ 
                        
                        if(pBL.findByiD(p.getIdVuelo())== null){
                            pBL.save(p);
                            out.print("C~El vuelo fue ingresada correctamente");
                        }
                        else{
                        out.print("P~Error de llave primaria");
                        }   
                    }else{
                        pBL.merge(p);
                        out.print("C~El vuelo fue modificada correctamente");
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
