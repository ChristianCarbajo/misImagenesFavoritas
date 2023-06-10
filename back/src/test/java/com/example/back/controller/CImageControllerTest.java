package com.example.back.controller;


import com.example.back.interfaces.IImage;
import com.example.back.model.CImage;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.http.HttpStatus;

import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CImageController.class)
public class CImageControllerTest {

    @InjectMocks
    private CImageController imageController;

    @MockBean
    private IImage iImage;

    @BeforeEach
    public void setup(){
        MockitoAnnotations.initMocks(this);
    }


    @Autowired
    private MockMvc mockMvc;

    @Test
    void getImages() throws Exception{
        List<CImage> images = new ArrayList<CImage>();
        images.add(new CImage(1, "url", "title"));
        images.add(new CImage(2, "url", "title"));

        Mockito.when(iImage.findAll()).thenReturn(images);
        MockHttpServletResponse response = mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/myfavoritesimages")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn()
                .getResponse();


        assertTrue(response.getContentAsString().contains("title"));

    }

    @Test
    void getImagesBy() {
        int id= 1;
        CImage image = new CImage (1, "url", "title");
        Mockito.when(iImage.findById(id)).thenReturn(Optional.of(image));

        CImage result =imageController.getImageBy(id);

        assertEquals(image, result);
    }

    @Test
    void saveImage() throws URISyntaxException{

        CImage image = new CImage(1, "url", "title");

        Mockito.when(iImage.save(image)).thenReturn(image);

        ResponseEntity<CImage> result = imageController.save(image);

        assertEquals(HttpStatus.CREATED, result.getStatusCode());
        assertEquals(image, result.getBody());
    }

    @Test
    void updateImages(){
        int id=1;
        CImage currentImage = new CImage(1, "url", "title");
        CImage updatedImage = new CImage(2, "url", "title");

        Mockito.when(iImage.findById(id)).thenReturn(Optional.of(currentImage));
        Mockito.when(iImage.save(currentImage)).thenReturn(currentImage);

        ResponseEntity<CImage> result = imageController.update(id, updatedImage);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(updatedImage.getTitle(), result.getBody().getTitle());
        assertEquals(updatedImage.getUrl(), result.getBody().getUrl());


    }

    @Test
    void deleteNews() {

        int id = 1;

        ResponseEntity result = imageController.delete(id);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        Mockito.verify(iImage).deleteById(id);

    }
}
