package org.wecancodeit.finalproject.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class CleanUp {

	@Id
	@GeneratedValue
	private Long id;
	private String location;
	@OneToMany (mappedBy = "cleanUp")
	private Collection<CleanUpComment> comments;

	public CleanUp() {
	}
	
	public CleanUp(String location) {
		this.location = location;
		this.comments = new ArrayList<CleanUpComment>();
	}

	public Long getId() {
		return id;
	}

	public String getLocation() {
		return location;
	}

	public Collection<CleanUpComment> getComments() {
		return comments;
	}

	@Override
	public String toString() {
		return "id=" + id + ", location=" + location + ", comments=" + comments;
	}

}