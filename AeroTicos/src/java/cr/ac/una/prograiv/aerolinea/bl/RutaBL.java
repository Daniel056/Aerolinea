/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.bl;

import cr.ac.una.prograiv.aerolinea.domain.Ruta;
import java.util.List;


public class RutaBL extends BaseBL implements IBaseBL<Ruta, Integer> {
    
    public RutaBL() {
        super();
    }

    @Override
    public void save(Ruta o) {
         if(this.findByiD(o.getIdRuta())==null){
            this.getDao(o.getClass().getName()).save(o);
        }else{
            System.out.println("La ruta ya existe");
        }
    }

    @Override
    public Ruta merge(Ruta o) {
     return (Ruta) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Ruta o) {
         
            this.getDao(o.getClass().getName()).delete(o);
            System.out.println("Se borro la ruta exitosamente");

            
    }

    @Override
    public Ruta findByiD(Integer o) {
         return (Ruta) this.getDao(Ruta.class.getName()).findById(o); 
    }

   
     @Override
    public List<Ruta> findAll(String className) {
        return this.getDao(className).findAll();
    }

    
}
