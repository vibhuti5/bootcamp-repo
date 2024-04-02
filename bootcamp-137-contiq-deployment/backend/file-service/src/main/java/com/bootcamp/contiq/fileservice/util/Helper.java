package com.bootcamp.contiq.fileservice.util;

import com.bootcamp.contiq.fileservice.exception.ElasticSearchException;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class Helper {
    private static final Logger logger = LoggerFactory.getLogger(Helper.class);
   public String extractTextFromPDF(byte[] pdfData) {
        try (PDDocument document = PDDocument.load(pdfData)) {
            PDFTextStripper pdfTextStripper = new PDFTextStripper();
            return pdfTextStripper.getText(document);
        } catch (Exception e) {
            String errorMessage = e.getMessage();
            logger.error(errorMessage);
            throw new ElasticSearchException(errorMessage);
        }
    }
}
