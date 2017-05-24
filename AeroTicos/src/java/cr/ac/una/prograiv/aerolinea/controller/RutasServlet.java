/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.controller;

import com.google.gson.Gson;
import cr.ac.una.prograiv.aerolinea.bl.HorarioBL;
import cr.ac.una.prograiv.aerolinea.bl.RutaBL;
import cr.ac.una.prograiv.aerolinea.domain.Horario;
import cr.ac.una.prograiv.aerolinea.domain.Ruta;
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
 * @author ChGari
 */
public class RutasServlet extends HttpServlet {

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
            Ruta p = new Ruta();

            //Se crea el objeto de la logica de negocio
            RutaBL pBL = new RutaBL();
            HorarioBL hBL = new HorarioBL();

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
                case "consultarHorarios":
                    json = new Gson().toJson(hBL.findAll(Horario.class.getName()));
                    out.print(json);
                    break;
                case "consultarRutas":
                    json = new Gson().toJson(pBL.findAll(Ruta.class.getName()));
                    out.print(json);
                    break;
                case "buscarLS":
                    String idA = request.getParameter("valor");
                    
                    List<Ruta> p1 = pBL.findAll(Ruta.class.getName());
                    boolean change = true;
                    json = "[";
                    for (int i = 0; i < p1.size(); i++) {
                        if(p1.get(i).getLugarSalida().equals(idA)){
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
                case "eliminarRuta":
                     //verifica que solo los administradores pueden eliminar personas
                        p.setIdRuta(Integer.parseInt(request.getParameter("idRuta")));
                    
                        //Se elimina el objeto
                        pBL.delete(p);

                        //Se imprime la respuesta con el response
                        out.print("La ruta fue eliminada correctamente");
                   
                    break;
                case "consultarRutasByID":
                    //se consulta la persona por ID
                    p = pBL.findByiD(Integer.parseInt(request.getParameter("idRuta")));
                    
                    //se pasa la informacion del objeto a formato JSON
                    json = new Gson().toJson(p);
                    out.print(json);
                    break;
                    
                    
                case "agregarRutas": case "modificarRuta":
                    boolean validate= true;    
                  
                    p.setIdRuta(Integer.parseInt(request.getParameter("idRuta")));
                    if(request.getParameter("lugarSalida").length()>20){
                        validate=false;
                    }
                    else{
                    p.setLugarSalida(request.getParameter("lugarSalida"));
                    }
                    if(request.getParameter("lugarDestino").length()>20){
                        validate=false;
                    }
                    else{
                    p.setLugarDestino(request.getParameter("lugarDestino"));
                    }

                    p.setPrecio(Double.parseDouble(request.getParameter("precio")));
                    p.setDuracion(request.getParameter("duracion"));
                    p.setPkfkHorario(Integer.parseInt(request.getParameter("idHorarioR")));
                    //Se guarda el objeto
                        if(hBL.findByiD(p.getPkfkHorario())== null){
                        //Se imprime la respuesta con el response
                        out.print("P~Error de llave primaria de horario");
                        }
                      
                   
                    
                    if(validate==false){
                        out.print("E~El campo excede el maximo de caracteres");
                    }
                   else if(accion.equals("agregarRutas")){ 
                        
                        if(pBL.findByiD(p.getIdRuta())== null){
                            pBL.save(p);
                            out.print("C~La ruta fue ingresada correctamente");
                        }
                        else{
                        out.print("P~Error de llave primaria");
                        }   
                    }else{
                        pBL.merge(p);
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
