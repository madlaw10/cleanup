package org.wecancodeit.finalproject.controllers;

import java.time.LocalDate;
import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.finalproject.models.PostCleanUp;
import org.wecancodeit.finalproject.models.PreCleanUp;
import org.wecancodeit.finalproject.models.User;
import org.wecancodeit.finalproject.repositories.PostCleanUpRepository;
import org.wecancodeit.finalproject.repositories.PreCleanUpRepository;
import org.wecancodeit.finalproject.repositories.UserRepository;


@CrossOrigin
@RestController
@RequestMapping("/cleanups")
public class CleanUpController {
	
	@Resource
	PostCleanUpRepository postCleanUpRepo;
	@Resource
	PreCleanUpRepository preCleanUpRepo;
	@Resource
	UserRepository userRepo;
	
	@GetMapping("/postcleanups")
	public Collection<PostCleanUp> getPostCleanUps() {
		return (Collection<PostCleanUp>)postCleanUpRepo.OrderByCountDesc();
	}
	
	@GetMapping("/precleanups")
	public Collection<PreCleanUp> getPreCleanUps() {
		return (Collection<PreCleanUp>)preCleanUpRepo.OrderByScheduledDateAsc();
	}
	
	@GetMapping("/postcleanups/{id}")
	public PostCleanUp getSinglePostCleanUp(@PathVariable Long id) {
		return postCleanUpRepo.findById(id).get();
	}
	
	@GetMapping("/precleanups/{id}")
	public PreCleanUp getSinglePreCleanUp(@PathVariable Long id) {
		return preCleanUpRepo.findById(id).get();
	}
	
	@PostMapping("/postcleanups/add")
	public Collection<PostCleanUp> addPostCleanUp(@RequestBody String body) throws JSONException {
		JSONObject newPostCleanUp = new JSONObject(body);
		String image = newPostCleanUp.getString("postCleanUpPhoto");
		String location = newPostCleanUp.getString("postCleanUpLocation");
		String caption = newPostCleanUp.getString("postCleanUpCaption");
		User user = userRepo.findById(Long.parseLong(newPostCleanUp.getString("postCleanUpUser"))).get();
		user.increasePointCount(10);
		userRepo.save(user);
		postCleanUpRepo.save(new PostCleanUp(image, location, caption, user));
		return (Collection<PostCleanUp>)postCleanUpRepo.OrderByCountDesc();
	} 
	
	@PostMapping("/precleanups/add")
	public Collection<PreCleanUp> addPreCleanUp(@RequestBody String body) throws JSONException {
		JSONObject newPreCleanUp = new JSONObject(body);
		LocalDate scheduledDate = LocalDate.parse(newPreCleanUp.getString("preCleanUpScheduledDate"));
		String location = newPreCleanUp.getString("preCleanUpLocation");
		String description = newPreCleanUp.getString("preCleanUpDescription");
		User user = userRepo.findById(Long.parseLong(newPreCleanUp.getString("preCleanUpUser"))).get();
		user.increasePointCount(10);
		userRepo.save(user);
		preCleanUpRepo.save(new PreCleanUp(scheduledDate, location, description, user));
		return (Collection<PreCleanUp>)preCleanUpRepo.OrderByScheduledDateAsc();
	} 
	
	@PostMapping("/postcleanups/{id}/voteup")
	public Collection<PostCleanUp> voteUp(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject postCleanUpUser = new JSONObject(body);
		PostCleanUp postCleanUpToVoteUp = postCleanUpRepo.findById(id).get();
		postCleanUpToVoteUp.increaseCount();
		postCleanUpRepo.save(postCleanUpToVoteUp);
		User user = userRepo.findById(Long.parseLong(postCleanUpUser.getString("cleanUpUserId"))).get();
		user.increasePointCount(1);
		userRepo.save(user);
		return (Collection<PostCleanUp>)postCleanUpRepo.OrderByCountDesc();
	}
	
	@PostMapping("/postcleanups/{id}/votedown")
	public Collection<PostCleanUp> voteDown(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject postCleanUpUser = new JSONObject(body);
		PostCleanUp postCleanUpToVoteDown = postCleanUpRepo.findById(id).get();
		postCleanUpToVoteDown.decreaseCount();
		postCleanUpRepo.save(postCleanUpToVoteDown);
		User user = userRepo.findById(Long.parseLong(postCleanUpUser.getString("cleanUpUserId"))).get();
		user.decreasePointCount(1);
		userRepo.save(user);
		return (Collection<PostCleanUp>)postCleanUpRepo.OrderByCountDesc();
	}

}
