/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.dao;

import cr.ac.una.prograiv.aerolinea.domain.Asiento;
import cr.ac.una.prograiv.aerolinea.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Pablo
 */
public class AsientoDAO extends HibernateUtil implements IBaseDAO<Asiento,Integer> {
    
    public AsientoDAO (){
    
    }

    @Override
    public void save(Asiento o) {
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
    public Asiento merge(Asiento o) {
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
    public void delete(Asiento o) {
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
    public Asiento findById(Integer key) {
         Asiento asientos=null;
        
        try{
            iniciaOperacion();
            asientos = (Asiento) getSesion().get(Asiento.class, key);
        }finally{
            getSesion().close();
        }
        return asientos;
    }

    @Override
    public List<Asiento> findAll() {
        List<Asiento> listAsientos;
        try{
            iniciaOperacion();
            listAsientos= getSesion().createQuery("from Asiento").list();
        }finally{
            getSesion().close();
        }
        return listAsientos;
    }
    
}
