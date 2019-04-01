package org.wecancodeit.finalproject;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreCleanUpRepository extends CrudRepository<PreCleanUp, Long> {

	PreCleanUp findByLocation(String location);
	

}
