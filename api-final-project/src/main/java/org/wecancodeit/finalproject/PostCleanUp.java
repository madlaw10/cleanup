package org.wecancodeit.finalproject;

import java.time.LocalDateTime;

import javax.persistence.Entity;

@Entity
public class PostCleanUp extends CleanUp {

	// A user needs to be able to "hold" their clean-up

	LocalDateTime postDate;
	// Q: Uploading and supporting local photo files
	// Collection of images?
	String image;
	String caption;
	// Make ratings/points its own entity
	private int count;

	public PostCleanUp() {
	}

	public PostCleanUp(String image, String location, String caption) {
		super(location);
		this.postDate = LocalDateTime.now();
		this.image = image;
		this.caption = caption;
		this.count = 1;
	}

	public LocalDateTime getPostDate() {
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

	public void increaseCount() {
		count++;
	}
	
	public void decreaseCount() {
		count--;
	}

	@Override
	public String toString() {
		return "PostCleanUp [postDate=" + postDate + ", image=" + image + ", caption=" + caption + ", count=" + count
				+ ", getId()=" + getId() + ", getLocation()=" + getLocation() + ", getComments()=" + getComments()
				+ "]";
	}

}
