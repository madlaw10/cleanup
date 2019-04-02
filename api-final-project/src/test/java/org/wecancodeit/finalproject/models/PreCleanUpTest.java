package org.wecancodeit.finalproject.models;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import java.time.LocalDateTime;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.finalproject.models.PreCleanUp;
import org.wecancodeit.finalproject.repositories.PreCleanUpRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class PreCleanUpTest {

	@Resource
	private TestEntityManager entityManager;

	@Resource
	private PreCleanUpRepository preCleanUpRepo;

	@Test
	public void shouldLoadPreCleanUpByLocation() {
		PreCleanUp preCleanUpTest = preCleanUpRepo
				.save(new PreCleanUp(LocalDateTime.now(), "location", "description"));

		entityManager.persist(preCleanUpTest);
		entityManager.flush();
		entityManager.clear();

		PreCleanUp preCleanUpFromDatabase = preCleanUpRepo.findByLocation("location");

		assertThat(preCleanUpFromDatabase.getLocation(), is("location"));
	}

}
