package cr.ac.una.prograiv.aerolinea.domain;
// Generated May 15, 2017 4:34:39 PM by Hibernate Tools 4.3.1



/**
 * Asiento generated by hbm2java
 */
public class Asiento  implements java.io.Serializable {


     private Integer idAsiento;
     private int pkfkReserva;

    public Asiento() {
    }

    public Asiento(Integer idAsiento) {
        this.idAsiento = idAsiento;
    }

 

    public Asiento(Integer idAsiento,int pkfkReserva) {
        this.idAsiento = idAsiento;
         this.pkfkReserva = pkfkReserva;
    }
    
    
    
   
    public Integer getIdAsiento() {
        return this.idAsiento;
    }
    
    public void setIdAsiento(Integer idAsiento) {
        this.idAsiento = idAsiento;
    }

    public int getPkfkReserva() {
        return pkfkReserva;
    }

    public void setPkfkReserva(int pkfkReserva) {
        this.pkfkReserva = pkfkReserva;
    }
   




}

