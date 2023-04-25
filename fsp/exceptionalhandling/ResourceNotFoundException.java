package com.example.fsp.exceptionalhandling;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/* Resource not found exception that extends the runtime exception,
it is used for handling the error when a requested resource is not found */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
		private static final long serialVersionUID = 1L;
        public ResourceNotFoundException(String message) {
				super(message);
			}
		}




