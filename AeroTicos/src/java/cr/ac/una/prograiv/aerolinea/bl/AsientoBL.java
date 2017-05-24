/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.bl;

import cr.ac.una.prograiv.aerolinea.domain.Asiento;
import java.util.List;
/**
 *
 * @author Pablo
 */
public class AsientoBL extends BaseBL implements IBaseBL<Asiento, Integer> {
    
    public AsientoBL() {
        super();
    }

    @Override
    public void save(Asiento o) {
         if(this.findByiD(o.getIdAsiento())==null){
            this.getDao(o.getClass().getName()).save(o);
        }else{
            System.out.println("El Asiento ya existe");
        }
    }

    @Override
    public Asiento merge(Asiento o) {
     return (Asiento) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Asiento o) {
         
            this.getDao(o.getClass().getName()).delete(o);
            System.out.println("Se borro el asiento exitosamente");

            
    }

    @Override
    public Asiento findByiD(Integer o) {
         return (Asiento) this.getDao(Asiento.class.getName()).findById(o); 
    }

    @Override
    public List<Asiento> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}