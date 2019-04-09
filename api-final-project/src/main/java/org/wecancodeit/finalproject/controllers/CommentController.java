package org.wecancodeit.finalproject.controllers;

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
import org.wecancodeit.finalproject.models.CleanUp;
import org.wecancodeit.finalproject.models.CleanUpComment;
import org.wecancodeit.finalproject.models.Comment;
import org.wecancodeit.finalproject.repositories.CommentRepository;
import org.wecancodeit.finalproject.repositories.PostCleanUpRepository;
import org.wecancodeit.finalproject.repositories.PreCleanUpRepository;

@CrossOrigin
@RestController
@RequestMapping("/comments")
public class CommentController {
	
	@Resource
	PostCleanUpRepository postCleanUpRepo;
	@Resource
	PreCleanUpRepository preCleanUpRepo;
	
	@Resource
	CommentRepository commentRepo;
	
	@GetMapping("/{id}")
	public Comment getSingleComment(@PathVariable Long id) {
		return commentRepo.findById(id).get();
	}

	@PostMapping("/add")
	public CleanUp addCleanUpComment(@RequestBody String body)throws JSONException {
	JSONObject newCleanUpComment = new JSONObject(body);
	String content = newCleanUpComment.getString("cleanUpCommentContent");
	
	CleanUp cleanUp = null;
		if (postCleanUpRepo.findById(Long.parseLong(newCleanUpComment.getString("cleanUpId"))) == null) {
			cleanUp = preCleanUpRepo.findById(Long.parseLong(newCleanUpComment.getString("cleanUpId"))).get();
		} else {
			cleanUp = postCleanUpRepo.findById(Long.parseLong(newCleanUpComment.getString("cleanUpId"))).get();
		}
	commentRepo.save(new CleanUpComment(content, cleanUp));	
		return cleanUp;
		}
}


