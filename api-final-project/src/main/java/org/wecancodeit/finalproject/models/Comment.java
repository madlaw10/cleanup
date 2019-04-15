package org.wecancodeit.finalproject.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

@Entity
public class Comment {

	@Id
	@GeneratedValue
	private Long Id;
	@Lob
	private String content;
	@ManyToOne
	private User user;
	
	public Comment() {}
	
	public Comment(String content, User user) {
		this.content = content;
		this.user = user;
	}

	public Long getId() {
		return Id;
	}

	public String getContent() {
		return content;
	}
	
	public User getUser() {
		return user;
	}

	@Override
	public String toString() {
		return "Comment [Id=" + Id + ", content=" + content + ", user=" + user + "]";
	}

}