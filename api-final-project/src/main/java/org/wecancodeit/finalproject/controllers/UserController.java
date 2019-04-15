package org.wecancodeit.finalproject.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.finalproject.models.User;
import org.wecancodeit.finalproject.repositories.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
	
	
	@Resource
	UserRepository userRepo;
	
	@GetMapping("/leaderboard")
	public Collection<User> getAllUsers(){
		return (Collection<User>)userRepo.OrderByPointCountDesc();	
	}
	@GetMapping("/{userName}")
	public User getUserByName(@PathVariable String userName){
		User user = userRepo.findByUserName(userName);
		return user;
	}
	
}
