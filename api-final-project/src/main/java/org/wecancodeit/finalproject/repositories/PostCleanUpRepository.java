package org.wecancodeit.finalproject.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.finalproject.models.PostCleanUp;

@Repository
public interface PostCleanUpRepository extends CrudRepository<PostCleanUp, Long>{

	PostCleanUp findByLocation(String location);
	
	List<PostCleanUp> OrderByCountDesc();  

}
