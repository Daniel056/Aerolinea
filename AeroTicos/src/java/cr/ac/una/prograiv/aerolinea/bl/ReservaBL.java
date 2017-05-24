/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.bl;

import cr.ac.una.prograiv.aerolinea.domain.Reserva;
import java.util.List;

/**
 *
 * @author Pablo
 */
public class ReservaBL extends BaseBL implements IBaseBL<Reserva, Integer> {
    
    public ReservaBL() {
        super();
    }

    @Override
    public void save(Reserva o) {
         if(this.findByiD(o.getIdReserva())==null){
            this.getDao(o.getClass().getName()).save(o);
        }else{
            System.out.println("La reserva ya existe");
        }
    }

    @Override
    public Reserva merge(Reserva o) {
     return (Reserva) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Reserva o) {
         
            this.getDao(o.getClass().getName()).delete(o);
            System.out.println("Se borro la reserva exitosamente");

            
    }

    @Override
    public Reserva findByiD(Integer o) {
         return (Reserva) this.getDao(Reserva.class.getName()).findById(o); 
    }

    @Override
    public List<Reserva> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
 