package com.example.fsp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/* @SpringBootApplication- it has 3 annotations:
 * 1.@ComponentScan- This annotation is used to specify the base packages to scan for spring beans/components.
 * 2.@EnableAutoConfiguration- enables the magical auto configuration which can automatically configure.
 * 3.@SpringBootConfiguration- This annotation indicates that a configuration class declares one or more @Bean methods.
 * */
@SpringBootApplication
public class FullstackprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(FullstackprojectApplication.class, args);
	}

}



