package org.wecancodeit.finalproject;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class CleanUp {

	@Id
	@GeneratedValue
	private Long id;
	private String location;
	private Collection<Object> comments;

	public CleanUp() {
	}
	
	public CleanUp(String location) {
		this.location = location;
		this.comments = new ArrayList<Object>();
	}

	public Long getId() {
		return id;
	}

	public String getLocation() {
		return location;
	}

	public Collection<Object> getComments() {
		return comments;
	}

	@Override
	public String toString() {
		return "id=" + id + ", location=" + location + ", comments=" + comments;
	}

}