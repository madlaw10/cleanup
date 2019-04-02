package org.wecancodeit.finalproject.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.finalproject.models.PostCleanUp;
import org.wecancodeit.finalproject.models.PreCleanUp;
import org.wecancodeit.finalproject.repositories.PostCleanUpRepository;
import org.wecancodeit.finalproject.repositories.PreCleanUpRepository;

@CrossOrigin
@RestController
@RequestMapping("/cleanups")
public class CleanUpController {
	
	@Resource
	PostCleanUpRepository postCleanUpRepo;
	@Resource
	PreCleanUpRepository preCleanUpRepo;
	
	@GetMapping("/postcleanups")
	public Collection<PostCleanUp> getPostCleanUps() {
		return (Collection<PostCleanUp>)postCleanUpRepo.findAll();
	}
	
	@GetMapping("/precleanups")
	public Collection<PreCleanUp> getPreCleanUps() {
		return (Collection<PreCleanUp>)preCleanUpRepo.findAll();
	}
	
	@GetMapping("/postcleanups/{id}")
	public PostCleanUp getSinglePostCleanUp(@PathVariable Long id) {
		return postCleanUpRepo.findById(id).get();
	}
	
	@GetMapping("/precleanups/{id}")
	public PreCleanUp getSinglePreCleanUp(@PathVariable Long id) {
		return preCleanUpRepo.findById(id).get();
	}

}
