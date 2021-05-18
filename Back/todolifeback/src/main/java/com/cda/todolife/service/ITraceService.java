package com.cda.todolife.service;

import com.cda.todolife.dto.TraceDto;
import com.cda.todolife.exception.TraceExistante;
import com.cda.todolife.exception.TraceIntrouvable;

public interface ITraceService {

	TraceDto FindById(int id) throws TraceIntrouvable, TraceExistante;

	void update(TraceDto trace) throws TraceIntrouvable, TraceExistante;

	void deleteById(int id) throws TraceIntrouvable;

	void add(TraceDto trace) throws TraceExistante;

}
