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
		PostCleanUp cleanUpOne = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-108-5c8659a6653f5__700.jpg", "locationOne", "captionOne"));
		PostCleanUp cleanUpTwo = postCleanUpRepo.save(new PostCleanUp("https://media.globalcitizen.org/thumbnails/e4/15/e415fee3-e28a-4d6d-9ce1-ba303d3d5dab/screen_shot_2019-03-11_at_53455_pm.png__1500x670_q85_crop_subsampling-2.png", "locationTwo", "captionTwo"));
		PostCleanUp cleanUpThree = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-104-5c865855c801d__700.jpg", "locationThree", "captionThree"));
		PostCleanUp cleanUpFour = postCleanUpRepo.save(new PostCleanUp("https://pbs.twimg.com/profile_images/933918958/cuw_logo_en_200x200_400x400.jpg", "locationFour", "captionFour"));
		commentRepo.save(new CleanUpComment("contentZero", cleanUpZero));
		commentRepo.save(new CleanUpComment("contentOne", cleanUpOne));
		commentRepo.save(new CleanUpComment("contentTwo", cleanUpOne));
		commentRepo.save(new CleanUpComment("contentThree", cleanUpThree));
		commentRepo.save(new CleanUpComment("contentFour", cleanUpFour));
		
		
	}

}
