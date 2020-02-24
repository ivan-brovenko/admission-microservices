package com.admission.userservice.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.admission.userservice.entity")
@Configuration
public class PersistenceConfig {
}
