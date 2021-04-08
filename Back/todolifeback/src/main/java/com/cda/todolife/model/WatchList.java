package com.cda.todolife.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "watch_list")
public class WatchList {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_watch_list")
	private int idWatchList;
	
	private String label;
}
