package org.wecancodeit.finalproject;

import java.time.LocalDateTime;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.finalproject.models.CleanUpComment;
import org.wecancodeit.finalproject.models.PostCleanUp;
import org.wecancodeit.finalproject.models.PreCleanUp;
import org.wecancodeit.finalproject.repositories.CommentRepository;
import org.wecancodeit.finalproject.repositories.PostCleanUpRepository;
import org.wecancodeit.finalproject.repositories.PreCleanUpRepository;

@Service
public class Initializer implements CommandLineRunner{

	@Resource
	PreCleanUpRepository preCleanUpRepo;
	@Resource
	PostCleanUpRepository postCleanUpRepo;
	@Resource
	CommentRepository commentRepo;
	
	@Override
	public void run(String... args) throws Exception {
		
		PreCleanUp cleanUpZero = preCleanUpRepo.save(new PreCleanUp(LocalDateTime.now(), "locationZero", "descriptionZero"));
		PostCleanUp cleanUpOne = postCleanUpRepo.save(new PostCleanUp("https://pbs.twimg.com/profile_images/933918958/cuw_logo_en_200x200_400x400.jpg", "locationOne", "caption"));
		commentRepo.save(new CleanUpComment("contentZero", cleanUpZero));
		commentRepo.save(new CleanUpComment("contentOne", cleanUpOne));
		
	}

}
