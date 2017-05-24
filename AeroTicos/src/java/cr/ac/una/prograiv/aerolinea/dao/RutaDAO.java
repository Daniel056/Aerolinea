/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.dao;

import cr.ac.una.prograiv.aerolinea.domain.Ruta;
import cr.ac.una.prograiv.aerolinea.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;


/**
 *
 * @author Pablo
 */
public class RutaDAO extends HibernateUtil implements IBaseDAO<Ruta,Integer> {
    
    public RutaDAO (){
    
    }

    @Override
    public void save(Ruta o) {
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
    public Ruta merge(Ruta o) {
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
    public void delete(Ruta o) {
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
    public Ruta findById(Integer key) {
         Ruta rutas=null;
        
        try{
            iniciaOperacion();
            rutas = (Ruta) getSesion().get(Ruta.class, key);
        }finally{
            getSesion().close();
        }
        return rutas;
    }

    @Override
    public List<Ruta> findAll() {
        List<Ruta> listRutas;
        try{
            iniciaOperacion();
            listRutas= getSesion().createQuery("from Ruta").list();
        }finally{
            getSesion().close();
        }
        return listRutas;
    }
    
}
