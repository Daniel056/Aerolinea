/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.dao;


import cr.ac.una.prograiv.aerolinea.domain.Avion;
import cr.ac.una.prograiv.aerolinea.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Pablo
 */
public class AvionDAO extends HibernateUtil implements IBaseDAO<Avion,Integer> {
    
    public AvionDAO (){
    
    }

    @Override
    public void save(Avion o) {
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
    public Avion merge(Avion o) {
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
    public void delete(Avion o) {
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
    public Avion findById(Integer key) {
         Avion aviones=null;
        
        try{
            iniciaOperacion();
            aviones = (Avion) getSesion().get(Avion.class, key);
        }finally{
            getSesion().close();
        }
        return aviones;
    }

    @Override
    public List<Avion> findAll() {
         List<Avion> listAviones;
        try{
            iniciaOperacion();
            listAviones= getSesion().createQuery("from Avion").list();
        }finally{
            getSesion().close();
        }
        return listAviones;
    }
}
    

