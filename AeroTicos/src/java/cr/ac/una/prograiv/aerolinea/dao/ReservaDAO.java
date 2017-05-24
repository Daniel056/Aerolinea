/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.dao;

import cr.ac.una.prograiv.aerolinea.domain.Reserva;
import cr.ac.una.prograiv.aerolinea.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Pablo
 */
public class ReservaDAO extends HibernateUtil implements IBaseDAO<Reserva,Integer> {
    
    public ReservaDAO (){
    
    }

    @Override
    public void save(Reserva o) {
        try{
            iniciaOperacion(); // voy a iniciar trasaccion
            getSesion().save(o); // se hace lo q sea la transaccion
            getTransac().commit(); // si todo esta bien el commit lo q hace es aplicar a la bd
        } catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally {
            getSesion().close();
        }
    }

    @Override
    public Reserva merge(Reserva o) {
         try{
            iniciaOperacion();
            getSesion().update(o);
            getTransac().commit();
        }catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
            
        }
        return o;
    }

    @Override
    public void delete(Reserva o) {
          try{
           iniciaOperacion();
           getSesion().delete(o);
           getTransac().commit();
       }catch(HibernateException he){
           manejaExcepcion(he);
           throw he;
       }finally{
           getSesion().close();
       }
    }

    @Override
    public Reserva findById(Integer key) {
        Reserva reservas=null;
        
        try{
            iniciaOperacion();
            reservas = (Reserva) getSesion().get(Reserva.class, key);
        }finally{
            getSesion().close();
        }
        return reservas;
    }

    @Override
    public List<Reserva> findAll() {
        List<Reserva> listReservas;
        try{
            iniciaOperacion();
            listReservas= getSesion().createQuery("from Reserva").list();
        }finally{
            getSesion().close();
        }
        return listReservas;
    }
    
}