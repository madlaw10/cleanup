package org.wecancodeit.finalproject.models;

import java.util.ArrayList;
import java.util.Collection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {
	@Id
	@GeneratedValue 
	private Long id;
	private String userName;
	@Lob
	private String avatar;
	private int pointCount;
	@OneToMany(mappedBy="user")
	@JsonIgnore
	private Collection <PostCleanUp> postCleanUps;
	@OneToMany(mappedBy="user")
	@JsonIgnore
	private Collection <PreCleanUp> preCleanUps;
	@OneToMany(mappedBy= "user")
	@JsonIgnore
	private Collection <Comment> comments;
	
	public User() {
		
	}
	
	public User(String userName, String avatar) {
		this.pointCount = 1;
		this.avatar = avatar;
		this.userName = userName;
		this.postCleanUps = new ArrayList<PostCleanUp>();
		this.preCleanUps = new ArrayList<PreCleanUp>();
		this.comments = new ArrayList<Comment>();
	}

	public Long getId() {
		return id;
	}

	public int getPointCount() {
		return pointCount;
	}
	
	
	public String getUserName() {
		return userName;
	}

	public String getAvatar() {
		return avatar;
	}
	
	public Collection<PostCleanUp> getPostCleanUps() {
		return postCleanUps;
	}
	
	public Collection<PreCleanUp> getPreCleanUps() {
		return preCleanUps;
	}

	public Collection<Comment> getComments() {
		return comments;
	}

	public void increasePointCount(int increase) {
		pointCount += increase;
	}
	
	public void decreasePointCount(int decrease) {
		pointCount -= decrease;
		if (pointCount <= 0) {
			pointCount = 0;
		}
	}

	@Override
	public String toString() {
		return "id=" + id + ", userName=" + userName + ", avatar=" + avatar + ", pointCount=" + pointCount
				+ ", postCleanUps=" + postCleanUps + ", preCleanUps=" + preCleanUps + ", comments=" + comments;
	}
	
	
	
	
	

}
