package org.wecancodeit.finalproject;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostCleanUpRepository extends CrudRepository<PostCleanUp, Long>{

	PostCleanUp findByLocation(String location);

}
