package org.wecancodeit.finalproject.models;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.finalproject.repositories.UserRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class UserTest {

	@Resource
	private TestEntityManager entityManager;

	@Resource 
	private UserRepository userRepo;

	@Test
	public void shouldLoadUserByUserName() {
		User userTest = userRepo.save(new User("userName", "avatar"));
		
		entityManager.persist(userTest);
		entityManager.flush();
		entityManager.clear();

		User userFromDatabase = userRepo.findByUserName("userName");

		assertThat(userFromDatabase.getUserName(), is("userName"));
	}
	
	@Test
	public void shouldBeAbleToIncreasePointCountByTen() {
		User userTest = userRepo.save(new User("userName", "avatar"));
		
		entityManager.persist(userTest);
		entityManager.flush();
		entityManager.clear();
		
		userTest.increasePointCount(10);
		userRepo.save(userTest);
		
		User userFromDatabase = userRepo.findByUserName("userName");
		
		assertThat(userFromDatabase.getPointCount(), is(11));
	}
	
	@Test
	public void shouldBeAbleToDecreasePointCountByOne() {
		User userTest = userRepo.save(new User("userName", "avatar"));
		
		entityManager.persist(userTest);
		entityManager.flush();
		entityManager.clear();
		
		userTest.decreasePointCount(1);
		userRepo.save(userTest);
		
		User userFromDatabase = userRepo.findByUserName("userName");
		
		assertThat(userFromDatabase.getPointCount(), is(0));
	}

}