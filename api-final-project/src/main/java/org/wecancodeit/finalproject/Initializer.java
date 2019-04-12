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
		// Users
		User userZero = userRepo.save(new User("binieth", "https://files.slack.com/files-pri/T14LST83D-FHXBH1XHD/image_from_ios.jpg"));
		User userOne = userRepo.save(new User("dexter", "https://files.slack.com/files-pri/T14LST83D-FHTNXP05T/image-11.png"));
		User userTwo = userRepo.save(new User("madlaw10", "https://files.slack.com/files-pri/T14LST83D-FHGCEB70A/bitmoji-20190411022708.png"));
		User userThree = userRepo.save(new User("nate", "https://files.slack.com/files-pri/T14LST83D-FHXM8020N/bitmoji-20190411024503.png"));
		User userFour = userRepo.save(new User("eythan", "https://files.slack.com/files-pri/T14LST83D-FHMFRA16V/file.jpg"));

		// Pre CleanUps
		PreCleanUp preCleanUpZero = preCleanUpRepo.save(new PreCleanUp(LocalDate.now(), "Goodale Park", "We are all gathering at Goodale Park again on 4/28 to pick up any trash that has accumulated since our last CleanUp!  Please join us if you're available!"));
		PreCleanUp preCleanUpOne = preCleanUpRepo.save(new PreCleanUp(LocalDate.now(), "Park of Roses", "Hey guys!  Park of Roses is beautiful, but we've noticed some trash blowing in from recent storms.  Let's get together on 4/29 and CleanUp!"));
		PreCleanUp preCleanUpTwo = preCleanUpRepo.save(new PreCleanUp(LocalDate.now(), "Portal Park", "We've got another CleanUp going! Head over on 4/29 to help out if you can."));
		PreCleanUp preCleanUpThree = preCleanUpRepo.save(new PreCleanUp(LocalDate.now(), "Glen Echo Park", "Saturday, May 4th.  Let's do this!"));
		PreCleanUp preCleanUpFour = preCleanUpRepo.save(new PreCleanUp(LocalDate.now(), "Highbanks", "Starts at 11am on 5/5.  We'll meet in the first parking lot after the welcome center."));


		// Post CleanUps
		PostCleanUp cleanUpOne = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-108-5c8659a6653f5__700.jpg", "Riverside Park", "Riverside clean up when well with great friends!"));
		PostCleanUp cleanUpTwo = postCleanUpRepo.save(new PostCleanUp("https://media.globalcitizen.org/thumbnails/e4/15/e415fee3-e28a-4d6d-9ce1-ba303d3d5dab/screen_shot_2019-03-11_at_53455_pm.png__1500x670_q85_crop_subsampling-2.png", "Miami Beach", "Beaches look better without trash."));
		PostCleanUp cleanUpThree = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-104-5c865855c801d__700.jpg", "Lake Erie", "Cleaned up the beach this weekend."));
		PostCleanUp cleanUpFour = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/xji67arzwbl21-5c86559301cbe__700.jpg", "Manila Bay", " January 27 CleanUp at Manila Bay."));
		PostCleanUp cleanUpFive = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-102-5c8657638ca49__700.jpg", "Potomac River", "Cleaned up DC a bit."));


		// Comments
		commentRepo.save(new CleanUpComment("This is awesome!!  #trashtag", cleanUpOne));
		commentRepo.save(new CleanUpComment("Looks incredible, let's keep CBUS clean!", cleanUpTwo));
		commentRepo.save(new CleanUpComment("Wow!!", cleanUpThree));
		commentRepo.save(new CleanUpComment(":heart: this!!!  #trashtag #cleanUp", cleanUpFour));
		commentRepo.save(new CleanUpComment("Great work guys!", cleanUpFive));
		
		
	}

}
