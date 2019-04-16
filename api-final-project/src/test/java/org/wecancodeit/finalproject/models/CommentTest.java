package org.wecancodeit.finalproject.models;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.finalproject.models.Comment;
import org.wecancodeit.finalproject.repositories.CommentRepository;
import org.wecancodeit.finalproject.repositories.UserRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class CommentTest {

	@Resource
	private TestEntityManager entityManager;

	@Resource
	private CommentRepository commentRepo;
	@Resource
	private UserRepository userRepo;

	@Test
	public void shouldLoadCommentByContent() {
		User user = userRepo.save(new User("userName", "avatar"));
		Comment commentTest = commentRepo
				.save(new Comment("content", user));

		entityManager.persist(commentTest);
		entityManager.flush();
		entityManager.clear();

		Comment commentFromDatabase = commentRepo.findByContent("content");

		assertThat(commentFromDatabase.getContent(), is("content"));
	}

}
