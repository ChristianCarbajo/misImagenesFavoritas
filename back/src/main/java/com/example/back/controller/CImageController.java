package com.example.back.controller;


import com.example.back.interfaces.IImage;
import com.example.back.model.CImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequestMapping("api/v1/myfavoritesimages")
@CrossOrigin("*")
public class CImageController {

    @Autowired

    private IImage iImage;

    @GetMapping
    public List<CImage> getImage (Model model){
        return iImage.findAll();
    }
    @GetMapping("/{id}")
    public CImage getImageBy(@PathVariable int id) {
        return iImage.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping("/save")
    public ResponseEntity<CImage> save(@RequestBody CImage image)throws URISyntaxException {
        CImage savedImage = iImage.save(image);
        return ResponseEntity.created(new URI("/cookingrecipe/" + savedImage.getId())).body(savedImage);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<CImage> update(@PathVariable int id, @RequestBody CImage image){
        CImage currentImage = iImage.findById(id).orElseThrow(RuntimeException::new);

        currentImage.setTitle(image.getTitle());
        currentImage.setUrl(image.getUrl());

        currentImage = iImage.save(currentImage);

        return ResponseEntity.ok(currentImage);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable("id") int id){
        iImage.deleteById(id);
        return ResponseEntity.ok().build();
    }



}
