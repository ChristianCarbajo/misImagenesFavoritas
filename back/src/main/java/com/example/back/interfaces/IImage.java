package com.example.back.interfaces;

import com.example.back.model.CImage;
import org.springframework.data.jpa.repository.JpaRepository;



public interface IImage extends JpaRepository <CImage, Integer> {
}
