package org.wecancodeit.finalproject.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Point {
	@Id
	@GeneratedValue 
	private Long id;
	private int count;
	
	
	public Point() {
		this.count = 1;
	}

	public Long getId() {
		return id;
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
		return "Point [id=" + id + ", count=" + count + "]";
	}
	
	
	
	
	

}
