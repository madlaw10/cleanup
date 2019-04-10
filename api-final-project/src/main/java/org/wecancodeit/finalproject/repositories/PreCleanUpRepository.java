package org.wecancodeit.finalproject.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.finalproject.models.PreCleanUp;

@Repository
public interface PreCleanUpRepository extends CrudRepository<PreCleanUp, Long> {

	PreCleanUp findByLocation(String location);
	
	List<PreCleanUp> OrderByScheduledDateAsc();  

}
