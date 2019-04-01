package org.wecancodeit.finalproject;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

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

}
