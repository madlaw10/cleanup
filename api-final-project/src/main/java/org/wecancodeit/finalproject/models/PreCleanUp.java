package org.wecancodeit.finalproject.models;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Lob;

@Entity
public class PreCleanUp extends CleanUp {
	
	// A user needs to be able to "join" this clean-up
	
	private LocalDateTime scheduledDate;
	@Lob
	private String description;
	public PreCleanUp () {
	}
	
	public PreCleanUp(LocalDateTime scheduledDate, String location, String description) {
		super(location);
		this.scheduledDate = scheduledDate;
		this.description = description;
	}

	public LocalDateTime getScheduledDate() {
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
