/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.bl;

import cr.ac.una.prograiv.aerolinea.domain.Vuelo;
import java.util.List;

public class VueloBL extends BaseBL implements IBaseBL<Vuelo, Integer> {
    
    public VueloBL() {
        super();
    }

    @Override
    public void save(Vuelo o) {
         if(this.findByiD(o.getIdVuelo())==null){
            this.getDao(o.getClass().getName()).save(o);
        }else{
            System.out.println("El vuelo ya existe");
        }
    }

    @Override
    public Vuelo merge(Vuelo o) {
     return (Vuelo) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Vuelo o) {
         
            this.getDao(o.getClass().getName()).delete(o);
            System.out.println("Se borro el vuelo exitosamente");

            
    }

    @Override
    public Vuelo findByiD(Integer o) {
         return (Vuelo) this.getDao(Vuelo.class.getName()).findById(o); 
    }

    @Override
    public List<Vuelo> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
