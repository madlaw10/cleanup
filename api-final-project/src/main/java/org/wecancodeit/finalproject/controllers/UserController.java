package org.wecancodeit.finalproject.controllers;

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
import org.wecancodeit.finalproject.models.User;
import org.wecancodeit.finalproject.repositories.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

	@Resource
	UserRepository userRepo;

	@GetMapping("/leaderboard")
	public Collection<User> getAllUsers() {
		return (Collection<User>) userRepo.OrderByPointCountDesc();
	}

	@GetMapping("/{userName}")
	public User getUserByName(@PathVariable String userName) {
		User user = userRepo.findByUserName(userName);
		return user;
	}

	@PostMapping("/add")
	public User createNewUser(@RequestBody String body) throws JSONException {
		JSONObject newUser = new JSONObject(body);
		String userName = newUser.getString("userName");
		String avatar = newUser.getString("avatar");
		User user = userRepo.findByUserName(userName);
		if (user == null) {
			user = userRepo.save(new User(userName, avatar));
		} else {
			user = userRepo.save(new User(userName + "1", avatar));
		}
		return user;
	}

}
