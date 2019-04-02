package org.wecancodeit.finalproject.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.finalproject.models.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long>{

	Comment findByContent(String content);
	
	

}
