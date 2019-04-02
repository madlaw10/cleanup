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

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class CommentTest {

	@Resource
	private TestEntityManager entityManager;

	@Resource
	private CommentRepository commentRepo;

	@Test
	public void shouldLoadCommentByContent() {
		Comment commentTest = commentRepo
				.save(new Comment("content"));

		entityManager.persist(commentTest);
		entityManager.flush();
		entityManager.clear();

		Comment commentFromDatabase = commentRepo.findByContent("content");

		assertThat(commentFromDatabase.getContent(), is("content"));
	}

}
