package org.wecancodeit.finalproject.models;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.finalproject.models.PostCleanUp;
import org.wecancodeit.finalproject.repositories.PostCleanUpRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class PostCleanUpTest {

	@Resource
	private TestEntityManager entityManager;

	@Resource
	private PostCleanUpRepository postCleanUpRepo;

	@Test
	public void shouldLoadPostCleanUpByLocation() {
		PostCleanUp postCleanUpTest = postCleanUpRepo
				.save(new PostCleanUp("imageURL", "location", "caption"));

		entityManager.persist(postCleanUpTest);
		entityManager.flush();
		entityManager.clear();

		PostCleanUp postCleanUpFromDatabase = postCleanUpRepo.findByLocation("location");

		assertThat(postCleanUpFromDatabase.getLocation(), is("location"));
	}
	
	@Test
	public void shouldBeAbleToIncreaseCountByOne() {
		PostCleanUp postCleanUpTest = postCleanUpRepo
				.save(new PostCleanUp("imageURL", "location", "caption"));
		
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
		PostCleanUp postCleanUpTest = postCleanUpRepo
				.save(new PostCleanUp("imageURL", "location", "caption"));
		
		entityManager.persist(postCleanUpTest);
		entityManager.flush();
		entityManager.clear();
		
		postCleanUpTest.decreaseCount();
		postCleanUpRepo.save(postCleanUpTest);
		
		PostCleanUp postCleanUpFromDatabase = postCleanUpRepo.findByLocation("location");
		
		assertThat(postCleanUpFromDatabase.getCount(), is(0));
	}

}
