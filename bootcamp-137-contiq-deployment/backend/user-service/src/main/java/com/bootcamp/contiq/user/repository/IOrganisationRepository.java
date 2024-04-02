package com.bootcamp.contiq.user.repository;

import com.bootcamp.contiq.user.entities.Organization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrganisationRepository extends JpaRepository<Organization, String> {
    Organization findByName(String name);
}
