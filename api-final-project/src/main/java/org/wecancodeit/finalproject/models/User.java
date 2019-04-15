package org.wecancodeit.finalproject.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

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
	private Collection <PostCleanUp> postCleanUps;
	
	public User() {
		
	}
	
	public User(String userName, String avatar) {
		this.pointCount = 1;
		this.avatar = avatar;
		this.userName = userName;
		this.postCleanUps = new ArrayList<PostCleanUp>();
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

	public void increasePointCount() {
		pointCount++;
	}
	
	public void decreasePointCount() {
		pointCount--;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", avatar=" + avatar + ", pointCount=" + pointCount
				+ ", postCleanUp=" + postCleanUps + "]";
	}
	
	
	
	
	

}
