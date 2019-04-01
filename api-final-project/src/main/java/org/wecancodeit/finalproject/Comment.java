package org.wecancodeit.finalproject;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

public class Comment {

	@Id
	@GeneratedValue
	private Long Id;
	@Lob
	private String content;
	
	public Comment() {}
	
	public Comment(String content) {
		this.content = content;
	}

	public Long getId() {
		return Id;
	}

	public String getContent() {
		return content;
	}

	@Override
	public String toString() {
		return "CleanUpComment [Id=" + Id + ", content=" + content + "]";
	}

}