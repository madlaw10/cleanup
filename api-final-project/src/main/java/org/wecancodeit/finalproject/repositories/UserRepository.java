package org.wecancodeit.finalproject.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.finalproject.models.User;

@Repository
public interface UserRepository extends CrudRepository <User, Long> {

	List<User> OrderByPointCountDesc();

	User findByUserName(String userName);
}
