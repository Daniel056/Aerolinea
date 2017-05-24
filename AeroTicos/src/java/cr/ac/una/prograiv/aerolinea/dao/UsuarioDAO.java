/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.aerolinea.dao;

import cr.ac.una.prograiv.aerolinea.domain.Usuario;
import cr.ac.una.prograiv.aerolinea.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Pablo
 */
public class UsuarioDAO extends HibernateUtil implements IBaseDAO<Usuario,Integer>  {
    
    public UsuarioDAO(){
    }
    
    @Override
    public void save(Usuario o) {
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
    public Usuario merge(Usuario o) {
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
    public void delete(Usuario o) {
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
    public Usuario findById(Integer key) {
         Usuario usuarios=null;
        
        try{
            iniciaOperacion();
            usuarios = (Usuario) getSesion().get(Usuario.class, key);
        }finally{
            getSesion().close();
        }
        return usuarios;
    }

    @Override
    public List<Usuario> findAll() {
        List<Usuario> listUsuarios;
        try{
            iniciaOperacion();
            listUsuarios= getSesion().createQuery("from Usuario").list();
        }finally{
            getSesion().close();
        }
        return listUsuarios;
    }
    
}
