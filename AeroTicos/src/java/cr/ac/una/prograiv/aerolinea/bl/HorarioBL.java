/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.bl;

import cr.ac.una.prograiv.aerolinea.domain.Horario;
import java.util.List;
/**
 *
 * @author Pablo
 */
public class HorarioBL extends BaseBL implements IBaseBL<Horario, Integer>  {
    
    public HorarioBL() {
        super();
    }
    
    @Override
    public void save(Horario o) {
          this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Horario merge(Horario o) {
     return (Horario) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Horario o) {
            this.getDao(o.getClass().getName()).delete(o);
            System.out.println("Se borro el horario exitosamente");

    }

    @Override
    public Horario findByiD(Integer o) {
         return (Horario) this.getDao(Horario.class.getName()).findById(o); 
    }

    @Override
    public List<Horario> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
