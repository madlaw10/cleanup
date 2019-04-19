package org.wecancodeit.finalproject.models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

@Entity
public class PostCleanUp extends CleanUp {


	private LocalDate postDate;
	// Q: Uploading and supporting local photo files
	// Collection of images?
	@Lob
	private String image;
	@Lob
	private String caption;
	private int count;
	@ManyToOne
	private User user;

	public PostCleanUp() {
	}

	public PostCleanUp(String image, String location, String caption, User user) {
		super(location);
		this.postDate = LocalDate.now();
		this.image = image;
		this.caption = caption;
		this.count = 1;
		this.user = user;
	}

	public LocalDate getPostDate() {
		return postDate;
	}

	public String getImage() {
		return image;
	}

	public String getCaption() {
		return caption;
	}
	
	public int getCount() {
		return count;
	}
	

	public User getUser() {
		return user;
	}

	public void increaseCount() {
		count++;
	}
	
	public void decreaseCount() {
		count--;
		if (count <= 0) {
			count = 0;
		}
	}

	@Override
	public String toString() {
		return "PostCleanUp [postDate=" + postDate + ", image=" + image + ", caption=" + caption + ", count=" + count
				+ ", user=" + user + ", getId()=" + getId() + ", getLocation()=" + getLocation() + ", getComments()="
				+ getComments() + "]";
	}

}
