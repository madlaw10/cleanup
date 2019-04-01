package org.wecancodeit.finalproject;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;

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
	Collection<Object> ratings;

	public PostCleanUp() {
	}

	public PostCleanUp(String image, String location, String caption) {
		super(location);
		this.postDate = LocalDateTime.now();
		this.image = image;
		this.caption = caption;
		this.ratings = new ArrayList<Object>();
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

	public Collection<Object> getRatings() {
		return ratings;
	}

	@Override
	public String toString() {
		return "id=" + this.getId() + ", postDate=" + postDate + ", location=" + this.getLocation() + ", image=" + image
				+ ", caption=" + caption + ", ratings=" + ratings + ", comments=" + this.getComments();
	}

}
