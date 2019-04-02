package org.wecancodeit.finalproject.controllers;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.finalproject.models.Comment;
import org.wecancodeit.finalproject.repositories.CommentRepository;

@CrossOrigin
@RestController
@RequestMapping("/comments")
public class CommentController {
	
	@Resource
	CommentRepository commentRepo;
	
	@GetMapping("/{id}")
	public Comment getSingleComment(@PathVariable Long id) {
		return commentRepo.findById(id).get();
	}

}


