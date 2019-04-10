package org.wecancodeit.finalproject.models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Lob;


@Entity
public class PreCleanUp extends CleanUp {
	
	// A user needs to be able to "join" this clean-up
	// Need a  time variable
	private LocalDate scheduledDate;
	@Lob
	private String description;
	public PreCleanUp () {
	}
	
	public PreCleanUp(LocalDate scheduledDate, String location, String description) {
		super(location);
		this.scheduledDate = scheduledDate;
		this.description = description;
	}

	public LocalDate getScheduledDate() {
		return scheduledDate;
	}

	public String getDescription() {
		return description;
	}

	@Override
	public String toString() {
		return "id=" + this.getId() + ", scheduledDate=" + scheduledDate + ", location=" + this.getLocation() + ", description="
				+ description + ", comments=" + this.getComments();
	}
	
}
