/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.controller;

import com.google.gson.Gson;
import cr.ac.una.prograiv.aerolinea.bl.HorarioBL;
import cr.ac.una.prograiv.aerolinea.domain.Horario;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
/**
 *
 * @author Daniel
 */
public class HorariosServlet extends HttpServlet {
    
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
            Horario h = new Horario();

            //Se crea el objeto de la logica de negocio
            HorarioBL hBL = new HorarioBL();

            //Se hace una pausa para ver el modal
            Thread.sleep(10);
            
            
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
                case "buscarFS":
                    int idA = Integer.parseInt(request.getParameter("valor"));
                    
                    List<Horario> p1 = hBL.findAll(Horario.class.getName());
                    boolean change = true;
                    json = "[";
                    for (int i = 0; i < p1.size(); i++) {
                        if(p1.get(i).getIdHorario().equals(idA)){
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
                case "eliminarHorarios":
                    
                        h.setIdHorario(Integer.parseInt(request.getParameter("idHorario")));
                    
                        //Se elimina el objeto
                        hBL.delete(h);

                        //Se imprime la respuesta con el response
                        out.print("La persona fue eliminada correctamente");
                 
                    break;
                    
                case "consultarHorariosByID":
                    //se consulta la persona por ID
                    h = hBL.findByiD(Integer.parseInt(request.getParameter("idHorario")));
                    
                    //se pasa la informacion del objeto a formato JSON
                    json = new Gson().toJson(h);
                    out.print(json);
                    break;
                    
                    
                case "agregarHorarios": case "modificarHorarios":

                    //Se llena el objeto con los datos enviados por AJAX por el metodo post
                     h.setIdHorario(Integer.parseInt(request.getParameter("id")));
               

                    //Guardar Correctamente en la base de datos
                    String fechatxt = request.getParameter("diaSalida");
                    DateFormat format = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
                    Date date = format.parse(fechatxt);

                    h.setDiaSalida(date);
                    
                    String fechatxt2 = request.getParameter("diaLlegada");
                    DateFormat format2 = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
                    Date date2 = format2.parse(fechatxt2);

                    h.setDiaLlegada(date2);
                    
                    h.setHoraSalida(request.getParameter("horaSalida"));
                    h.setHoraLlegada(request.getParameter("horaLlegada"));
                   

                    if(accion.equals("agregarHorarios")){ //es insertar personas
                        //Se guarda el objeto
                        if(hBL.findByiD(h.getIdHorario())== null){
                        hBL.save(h);
                        
                        //Se imprime la respuesta con el response
                        out.print("C~El Horario fue ingresada correctamente");
                        }
                    }else{//es modificar persona
                        //Se guarda el objeto
                        hBL.merge(h);

                        //Se imprime la respuesta con el response
                        out.print("C~El Horario fue modificada correctamente");
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
