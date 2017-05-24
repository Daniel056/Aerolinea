/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.bl;


import java.util.LinkedHashMap;
import cr.ac.una.prograiv.aerolinea.dao.IBaseDAO;
import cr.ac.una.prograiv.aerolinea.dao.AsientoDAO;
import cr.ac.una.prograiv.aerolinea.dao.AvionDAO;
import cr.ac.una.prograiv.aerolinea.dao.HorarioDAO;
import cr.ac.una.prograiv.aerolinea.dao.ReservaDAO;
import cr.ac.una.prograiv.aerolinea.dao.RutaDAO;
import cr.ac.una.prograiv.aerolinea.dao.UsuarioDAO;
import cr.ac.una.prograiv.aerolinea.dao.VueloDAO;

public class BaseBL {
      private final LinkedHashMap<String, IBaseDAO> daos;
    
    public BaseBL(){
        daos= new LinkedHashMap();
        daos.put("cr.ac.una.prograiv.aerolinea.domain.Asiento", new AsientoDAO());
        daos.put("cr.ac.una.prograiv.aerolinea.domain.Avion", new AvionDAO());
        daos.put("cr.ac.una.prograiv.aerolinea.domain.Horario", new HorarioDAO());
        daos.put("cr.ac.una.prograiv.aerolinea.domain.Reserva", new ReservaDAO());
        daos.put("cr.ac.una.prograiv.aerolinea.domain.Ruta", new RutaDAO());
        daos.put("cr.ac.una.prograiv.aerolinea.domain.Usuario", new UsuarioDAO());
        daos.put("cr.ac.una.prograiv.aerolinea.domain.Vuelo", new VueloDAO());
        
    }
    
    public IBaseDAO getDao(String className){
        return daos.get(className);
    }
}
   