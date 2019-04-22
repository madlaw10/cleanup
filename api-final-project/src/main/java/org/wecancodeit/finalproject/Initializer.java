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
public class Initializer implements CommandLineRunner {

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
		User userOne = userRepo.save(new User(
				"binieth",
				"https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/avatar-binieth.jpg"));
		User userTwo = userRepo.save(new User(
				"dexter",
				"https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/avatar-jbunny.png"));
		User userThree = userRepo.save(new User(
				"madlaw10",
				"https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/avatar-madlaw10.png"));
		User userFour = userRepo.save(new User(
				"nate-fritz",
				"https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/avatar-nate-fritz.png"));
		User userFive = userRepo.save(new User(
				"eekramm",
				"https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/avatar-eekramm.jpg"));

		// PreCleanUps
		PreCleanUp preCleanUpZero = preCleanUpRepo.save(new PreCleanUp(
				LocalDate.of(2019, 04, 25), 
				"Portal Park",
				"Planning to go during my lunch break tomorrow and tidy up the sitting area right by Sahara Cafe. If you're in the area around noon, please feel free to stop by!",
				userOne));
		PreCleanUp preCleanUpOne = preCleanUpRepo.save(new PreCleanUp(
				LocalDate.of(2019, 04, 28), 
				"Glen Echo Park",
				"Noticed lots of trash here while walking my pup the other day. It looks like the recent rain raised stream levels high enough to deposit trash around the banks. It's going to take a whole afternoon to clear out, would love to get some help from the neighborhood!",
				userTwo));
		PreCleanUp preCleanUpTwo = preCleanUpRepo.save(new PreCleanUp(
				LocalDate.of(2019, 05, 05), 
				"Clinton-Como Park",
				"Planning a quick afternoon Cleanup, head over to help out if you can! We'll be grabbing some margaritas at the nearby Condados afterwards!", 
				userThree));
		PreCleanUp preCleanUpThree = preCleanUpRepo.save(new PreCleanUp(
				LocalDate.of(2019, 05, 11), 
				"Audobon Park",
				"Thanks to everyone for coming out yesterday. We managed to fill six trashbags in just a few hours! I feel like this park is constanlty in need of a quick pick-up, seems like a good idea to plan on coming back every couple weeks.",
				userFour));
		PreCleanUp preCleanUpFour = preCleanUpRepo.save(new PreCleanUp(
				LocalDate.of(2019, 04, 27),
				"Tuttle Community Recreation Center",
				"Columbus Recreation and Parks is looking for volunteers this weekend to help with various maintenance needs around the center. Center opens at 9am; coffee and donuts will be provided! Volunteers should park in the main lot.",
				userFive));

		// PostCleanUps
		PostCleanUp postCleanUpOne = postCleanUpRepo.save(new PostCleanUp(
				"https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-108-5c8659a6653f5__700.jpg",
				"Riverside Park", 
				"Riverside clean up when well with great friends! Walking path is clear again!", 
				userOne));
		PostCleanUp postCleanUpTwo = postCleanUpRepo.save(new PostCleanUp(
				"https://media.globalcitizen.org/thumbnails/e4/15/e415fee3-e28a-4d6d-9ce1-ba303d3d5dab/screen_shot_2019-03-11_at_53455_pm.png__1500x670_q85_crop_subsampling-2.png",
				"Miami Beach", 
				"Beach is looking so much better without that trash.", 
				userTwo));
		PostCleanUp postCleanUpThree = postCleanUpRepo.save(new PostCleanUp(
				"https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-104-5c865855c801d__700.jpg",
				"Lake Erie", 
				"Cleaned up the beach this weekend and enjoyed a swim later too.", 
				userThree));
		PostCleanUp postCleanUpFour = postCleanUpRepo.save(new PostCleanUp(
				"https://static.boredpanda.com/blog/wp-content/uploads/2019/03/xji67arzwbl21-5c86559301cbe__700.jpg",
				"Manila Bay", 
				"Super fun Cleanup at Manila Bay with my family.", 
				userFour));
		PostCleanUp postCleanUpFive = postCleanUpRepo.save(new PostCleanUp(
				"https://static.boredpanda.com/blog/wp-content/uploads/2019/03/trashtag-challenge-people-clean-surroundings-102-5c8657638ca49__700.jpg",
				"Potomac River", 
				"Managed to get a lot of trash by myself!", 
				userFive));

		// Comments
		commentRepo.save(new CleanUpComment(
				"This is awesome!!  #trashtag", 
				userOne, 
				postCleanUpOne));
		commentRepo.save(new CleanUpComment(
				"Looks incredible, let's keep it clean!", 
				userTwo, 
				postCleanUpTwo));
		commentRepo.save(new CleanUpComment(
				"Wow!!", 
				userThree, 
				postCleanUpThree));
		commentRepo.save(new CleanUpComment(
				":heart: this!!!  #trashtag #cleanup", 
				userFour, 
				postCleanUpFour));
		commentRepo.save(new CleanUpComment(
				"Great work guys!", 
				userFive, 
				postCleanUpFive));
		commentRepo.save(new CleanUpComment(
				"Count me in!", 
				userThree, 
				preCleanUpOne));
		commentRepo.save(new CleanUpComment(
				"I'll be there!", 
				userOne, 
				preCleanUpTwo));
		commentRepo.save(new CleanUpComment(
				"I agree. I'll try to make it to as many as possible", 
				userFive, 
				preCleanUpThree));
		commentRepo.save(new CleanUpComment(
				"You had me at donuts - count me in!", 
				userTwo, 
				preCleanUpFour));
		commentRepo.save(new CleanUpComment(
				"What a great idea! I'll see you there!", 
				userFour, 
				preCleanUpZero));
	}

}
