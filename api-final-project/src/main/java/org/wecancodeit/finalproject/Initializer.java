package org.wecancodeit.finalproject;

import java.time.LocalDate;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.finalproject.models.CleanUpComment;
import org.wecancodeit.finalproject.models.PostCleanUp;
import org.wecancodeit.finalproject.models.PreCleanUp;
import org.wecancodeit.finalproject.models.User;
import org.wecancodeit.finalproject.repositories.CommentRepository;
import org.wecancodeit.finalproject.repositories.PostCleanUpRepository;
import org.wecancodeit.finalproject.repositories.PreCleanUpRepository;
import org.wecancodeit.finalproject.repositories.UserRepository;

@Service
public class Initializer implements CommandLineRunner{

	@Resource
	PreCleanUpRepository preCleanUpRepo;
	@Resource
	PostCleanUpRepository postCleanUpRepo;
	@Resource
	CommentRepository commentRepo;
	@Resource
	UserRepository userRepo;
	
	@Override
	public void run(String... args) throws Exception {
		User userZero = userRepo.save(new User("binieth", "https://files.slack.com/files-pri/T14LST83D-FHXBH1XHD/image_from_ios.jpg"));
		User userOne = userRepo.save(new User("dexter", "https://files.slack.com/files-pri/T14LST83D-FHTNXP05T/image-11.png"));
		User userTwo = userRepo.save(new User("madlaw10", "https://files.slack.com/files-pri/T14LST83D-FHGCEB70A/bitmoji-20190411022708.png"));
		User userThree = userRepo.save(new User("nate", "https://files.slack.com/files-pri/T14LST83D-FHXM8020N/bitmoji-20190411024503.png"));
		User userFour = userRepo.save(new User("eythan", "https://files.slack.com/files-pri/T14LST83D-FHMFRA16V/file.jpg"));
		PreCleanUp cleanUpZero = preCleanUpRepo.save(new PreCleanUp(LocalDate.now(), "locationZero", "descriptionZero"));
		PostCleanUp cleanUpOne = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-108-5c8659a6653f5__700.jpg", "locationOne", "River side clean up when well with great friends!"));
		PostCleanUp cleanUpTwo = postCleanUpRepo.save(new PostCleanUp("https://media.globalcitizen.org/thumbnails/e4/15/e415fee3-e28a-4d6d-9ce1-ba303d3d5dab/screen_shot_2019-03-11_at_53455_pm.png__1500x670_q85_crop_subsampling-2.png", "locationTwo", "captionTwo"));
		PostCleanUp cleanUpThree = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-104-5c865855c801d__700.jpg", "locationThree", "captionThree"));
		PostCleanUp cleanUpFour = postCleanUpRepo.save(new PostCleanUp("https://pbs.twimg.com/profile_images/933918958/cuw_logo_en_200x200_400x400.jpg", "locationFour", "captionFour"));
		commentRepo.save(new CleanUpComment("contentZero", cleanUpZero));
		commentRepo.save(new CleanUpComment("contentOne", cleanUpOne));
		commentRepo.save(new CleanUpComment("contentTwo", cleanUpTwo));
		commentRepo.save(new CleanUpComment("contentThree", cleanUpThree));
		commentRepo.save(new CleanUpComment("contentFour", cleanUpFour));
		
		
	}

}
