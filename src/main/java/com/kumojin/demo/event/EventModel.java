package com.kumojin.demo.event;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "event")
public class EventModel {
    public EventModel() {}

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    public Integer getId() { return this.id; }

    @Column(length = 32)
    private String name;
    public String getName() { return this.name; }

    private String description;
    public String getDescription() { return this.description; }

    private String country;
    public String getCountry() { return this.country; }

    private String city;
    public String getCity() { return this.city; }

    private String image;
    public String getImage() { return this.image; }

    private LocalDate startDate;
    public LocalDate getStartDate() { return this.startDate; }

    private LocalDate endDate;
    public LocalDate getEndDate() { return this.endDate; }

    public EventModel(String name, String description, String image, String country,
                      String city, LocalDate startDate, LocalDate endDate) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.startDate = startDate;
        this.endDate = endDate;
        this.country = country;
        this.city = city;
    }
}



