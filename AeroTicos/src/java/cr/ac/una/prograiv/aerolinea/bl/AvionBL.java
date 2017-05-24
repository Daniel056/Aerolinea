/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.bl;

import cr.ac.una.prograiv.aerolinea.domain.Avion;
import java.util.List;


public class AvionBL extends BaseBL implements IBaseBL<Avion, Integer>  {
    
    public AvionBL() {
        super();
    }
    
      @Override
    public void save(Avion o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Avion merge(Avion o) {
     return (Avion) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Avion o) {
         
            this.getDao(o.getClass().getName()).delete(o);
            System.out.println("Se borro el avion exitosamente");

            
    }

    @Override
    public Avion findByiD(Integer o) {
         return (Avion) this.getDao(Avion.class.getName()).findById(o); 
    }

    @Override
    public List<Avion> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
