/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.dao;

import cr.ac.una.prograiv.aerolinea.domain.Vuelo;
import cr.ac.una.prograiv.aerolinea.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Pablo
 */
public class VueloDAO extends HibernateUtil implements IBaseDAO<Vuelo,Integer> {
    
    public VueloDAO(){
    
    }
    
    @Override
    public void save(Vuelo o) {
        try{
            iniciaOperacion(); 
            getSesion().save(o); 
            getTransac().commit(); 
        } catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally {
            getSesion().close();
        }
    }

    @Override
    public Vuelo merge(Vuelo o) {
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
    public void delete(Vuelo o) {
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
    public Vuelo findById(Integer key) {
         Vuelo vuelos=null;
        
        try{
            iniciaOperacion();
            vuelos = (Vuelo) getSesion().get(Vuelo.class, key);
        }finally{
            getSesion().close();
        }
        return vuelos;
    }

    @Override
    public List<Vuelo> findAll() {
        List<Vuelo> listVuelos;
        try{
            iniciaOperacion();
            listVuelos= getSesion().createQuery("from Vuelo").list();
        }finally{
            getSesion().close();
        }
        return listVuelos;
    }
    
}
