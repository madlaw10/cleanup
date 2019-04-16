package org.wecancodeit.finalproject.models;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import java.time.LocalDate;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.finalproject.repositories.PreCleanUpRepository;
import org.wecancodeit.finalproject.repositories.UserRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class PreCleanUpTest {

	@Resource
	private TestEntityManager entityManager;

	@Resource
	private PreCleanUpRepository preCleanUpRepo;
	@Resource
	private UserRepository userRepo;

	@Test
	public void shouldLoadPreCleanUpByLocation() {
		User user = userRepo.save(new User("userName", "avatar"));
		PreCleanUp preCleanUpTest = preCleanUpRepo
				.save(new PreCleanUp(LocalDate.now(), "location", "description", user));

		entityManager.persist(preCleanUpTest);
		entityManager.flush();
		entityManager.clear();

		PreCleanUp preCleanUpFromDatabase = preCleanUpRepo.findByLocation("location");

		assertThat(preCleanUpFromDatabase.getLocation(), is("location"));
	}

}
