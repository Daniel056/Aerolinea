package cr.ac.una.prograiv.aerolinea.domain;
// Generated May 15, 2017 4:34:39 PM by Hibernate Tools 4.3.1


import java.util.Date;

/**
 * Horario generated by hbm2java
 */
public class Horario  implements java.io.Serializable {


     private Integer idHorario;
     private Date diaLlegada;
     private String horaLlegada;
     private String horaSalida;
     private Date diaSalida;

    public Horario() {
    }

    public Horario(Date diaLlegada, String horaLlegada, String horaSalida, Date diaSalida) {
       this.diaLlegada = diaLlegada;
       this.horaLlegada = horaLlegada;
       this.horaSalida = horaSalida;
       this.diaSalida = diaSalida;
    }

    public Horario(Integer idHorario, Date diaLlegada, String horaLlegada, String horaSalida, Date diaSalida) {
        this.idHorario = idHorario;
        this.diaLlegada = diaLlegada;
        this.horaLlegada = horaLlegada;
        this.horaSalida = horaSalida;
        this.diaSalida = diaSalida;
    }
    
    
   
    public Integer getIdHorario() {
        return this.idHorario;
    }
    
    public void setIdHorario(Integer idHorario) {
        this.idHorario = idHorario;
    }
    public Date getDiaLlegada() {
        return this.diaLlegada;
    }
    
    public void setDiaLlegada(Date diaLlegada) {
        this.diaLlegada = diaLlegada;
    }
    public String getHoraLlegada() {
        return this.horaLlegada;
    }
    
    public void setHoraLlegada(String horaLlegada) {
        this.horaLlegada = horaLlegada;
    }
    public String getHoraSalida() {
        return this.horaSalida;
    }
    
    public void setHoraSalida(String horaSalida) {
        this.horaSalida = horaSalida;
    }
    public Date getDiaSalida() {
        return this.diaSalida;
    }
    
    public void setDiaSalida(Date diaSalida) {
        this.diaSalida = diaSalida;
    }




}


