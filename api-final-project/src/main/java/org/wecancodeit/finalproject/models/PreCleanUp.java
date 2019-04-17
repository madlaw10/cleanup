package org.wecancodeit.finalproject.models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;


@Entity
public class PreCleanUp extends CleanUp {
	
	// A user needs to be able to "join" this clean-up
	// Need a  time variable
	private LocalDate scheduledDate;
	@Lob
	private String description;
	@ManyToOne
	private User user;
	
	public PreCleanUp () {}
	
	public PreCleanUp(LocalDate scheduledDate, String location, String description, User user) {
		super(location);
		this.scheduledDate = scheduledDate;
		this.description = description;
		this.user = user;
	}

	public LocalDate getScheduledDate() {
		return scheduledDate;
	}

	public String getDescription() {
		return description;
	}

	public User getUser() {
		return user;
	}

	@Override
	public String toString() {
		return "scheduledDate=" + scheduledDate + ", description=" + description + ", user=" + user + ", getId()="
				+ getId() + ", getLocation()=" + getLocation() + ", getComments()=" + getComments();
	}
	
}
