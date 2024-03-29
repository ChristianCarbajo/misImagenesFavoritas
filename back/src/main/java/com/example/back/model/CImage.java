package com.example.back.model;


import jakarta.persistence.*;


@Entity
@Table(name="myfavoritesimages")
public class CImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    private String title;

    private String url;

    public CImage(int id, String title, String url) {

        this.id = id;
        this.title = title;
        this.url = url;
    }


        public CImage(){}




    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


}
