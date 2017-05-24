/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.dao;


import cr.ac.una.prograiv.aerolinea.domain.Horario;
import cr.ac.una.prograiv.aerolinea.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Pablo
 */
public class HorarioDAO extends HibernateUtil implements IBaseDAO<Horario,Integer> {
    
    public HorarioDAO(){
    }

    @Override
    public void save(Horario o) {
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
    public Horario merge(Horario o) {
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
    public void delete(Horario o) {
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
    public Horario findById(Integer key) {
         Horario horarios=null;
        
        try{
            iniciaOperacion();
            horarios = (Horario) getSesion().get(Horario.class, key);
        }finally{
            getSesion().close();
        }
        return horarios;
    }

    @Override
    public List<Horario> findAll() {
         List<Horario> listHorarios;
        try{
            iniciaOperacion();
            listHorarios= getSesion().createQuery("from Horario").list();
        }finally{
            getSesion().close();
        }
        return listHorarios;
    }
    
}
