package org.wecancodeit.finalproject.models;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.finalproject.repositories.PostCleanUpRepository;
import org.wecancodeit.finalproject.repositories.UserRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class PostCleanUpTest {

	@Resource
	private TestEntityManager entityManager;

	@Resource
	private PostCleanUpRepository postCleanUpRepo;
	@Resource 
	private UserRepository userRepo;

	@Test
	public void shouldLoadPostCleanUpByLocation() {
		User user = userRepo.save(new User("userName", "avatar"));
		PostCleanUp postCleanUpTest = postCleanUpRepo
				.save(new PostCleanUp("imageURL", "location", "caption", user));

		entityManager.persist(postCleanUpTest);
		entityManager.flush();
		entityManager.clear();

		PostCleanUp postCleanUpFromDatabase = postCleanUpRepo.findByLocation("location");

		assertThat(postCleanUpFromDatabase.getLocation(), is("location"));
	}
	
	@Test
	public void shouldBeAbleToIncreaseCountByOne() {
		User user = userRepo.save(new User("userName", "avatar"));
		PostCleanUp postCleanUpTest = postCleanUpRepo
				.save(new PostCleanUp("imageURL", "location", "caption", user));
		
		entityManager.persist(postCleanUpTest);
		entityManager.flush();
		entityManager.clear();
		
		postCleanUpTest.increaseCount();
		postCleanUpRepo.save(postCleanUpTest);
		
		PostCleanUp postCleanUpFromDatabase = postCleanUpRepo.findByLocation("location");
		
		assertThat(postCleanUpFromDatabase.getCount(), is(2));
	}
	
	@Test
	public void shouldBeAbleToDecreaseCountByOne() {
		User user = userRepo.save(new User("userName", "avatar"));
		PostCleanUp postCleanUpTest = postCleanUpRepo
				.save(new PostCleanUp("imageURL", "location", "caption", user));
		
		entityManager.persist(postCleanUpTest);
		entityManager.flush();
		entityManager.clear();
		
		postCleanUpTest.decreaseCount();
		postCleanUpRepo.save(postCleanUpTest);
		
		PostCleanUp postCleanUpFromDatabase = postCleanUpRepo.findByLocation("location");
		
		assertThat(postCleanUpFromDatabase.getCount(), is(0));
	}

}
