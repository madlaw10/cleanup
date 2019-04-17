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
		User userOne = userRepo.save(new User("binieth", "https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/avatar-binieth.jpg"));
		User userTwo = userRepo.save(new User("dexter", "https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/avatar-jbunny.png"));
		User userThree = userRepo.save(new User("madlaw10", "https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/avatar-madlaw10.png"));
		User userFour = userRepo.save(new User("nate-fritz", "https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/avatar-nate-fritz.png"));
		User userFive = userRepo.save(new User("eekramm", "https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/avatar-eekramm.jpg"));

		// PreCleanUps
		PreCleanUp preCleanUpZero = preCleanUpRepo.save(new PreCleanUp(LocalDate.now(), "Goodale Park", "We are all gathering at Goodale Park again to pick up any trash that has accumulated since our last CleanUp!  Please join us if you're available!", userOne));
		PreCleanUp preCleanUpOne = preCleanUpRepo.save(new PreCleanUp(LocalDate.now(), "Park of Roses", "Hey guys!  Park of Roses is beautiful, but we've noticed some trash blowing in from recent storms.  Let's get together and CleanUp!", userTwo));
		PreCleanUp preCleanUpTwo = preCleanUpRepo.save(new PreCleanUp(LocalDate.now(), "Portal Park", "We've got another CleanUp going! Head over to help out if you can.", userThree));
		PreCleanUp preCleanUpThree = preCleanUpRepo.save(new PreCleanUp(LocalDate.now(), "Glen Echo Park", "Let's do this!", userFour));
		PreCleanUp preCleanUpFour = preCleanUpRepo.save(new PreCleanUp(LocalDate.now(), "Highbanks", "Starts at 11am.  We'll meet in the first parking lot after the welcome center.", userFive));


		// PostCleanUps
		PostCleanUp cleanUpOne = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-108-5c8659a6653f5__700.jpg", "Riverside Park", "Riverside clean up when well with great friends!", userOne));
		PostCleanUp cleanUpTwo = postCleanUpRepo.save(new PostCleanUp("https://media.globalcitizen.org/thumbnails/e4/15/e415fee3-e28a-4d6d-9ce1-ba303d3d5dab/screen_shot_2019-03-11_at_53455_pm.png__1500x670_q85_crop_subsampling-2.png", "Miami Beach", "Beaches look better without trash.", userTwo));
		PostCleanUp cleanUpThree = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-104-5c865855c801d__700.jpg", "Lake Erie", "Cleaned up the beach this weekend.", userThree));
		PostCleanUp cleanUpFour = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/xji67arzwbl21-5c86559301cbe__700.jpg", "Manila Bay", " January 27 CleanUp at Manila Bay.", userFour));
		PostCleanUp cleanUpFive = postCleanUpRepo.save(new PostCleanUp("https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-102-5c8657638ca49__700.jpg", "Potomac River", "Cleaned up DC a bit.", userFive));


		// Comments
		commentRepo.save(new CleanUpComment("This is awesome!!  #trashtag", userOne, cleanUpOne));
		commentRepo.save(new CleanUpComment("Looks incredible, let's keep CBUS clean!", userTwo, cleanUpTwo));
		commentRepo.save(new CleanUpComment("Wow!!", userThree, cleanUpThree));
		commentRepo.save(new CleanUpComment(":heart: this!!!  #trashtag #cleanUp", userFour, cleanUpFour));
		commentRepo.save(new CleanUpComment("Great work guys!", userFive, cleanUpFive));		
		commentRepo.save(new CleanUpComment("This is awesome!!  #trashtag", userOne, preCleanUpOne));
		commentRepo.save(new CleanUpComment("Looks incredible, let's keep CBUS clean!", userTwo, preCleanUpTwo));
		commentRepo.save(new CleanUpComment("Wow!!", userThree, preCleanUpThree));
		commentRepo.save(new CleanUpComment(":heart: this!!!  #trashtag #cleanUp", userFour, preCleanUpFour));
		commentRepo.save(new CleanUpComment("Great work guys!", userFive, preCleanUpZero));
	}

}
