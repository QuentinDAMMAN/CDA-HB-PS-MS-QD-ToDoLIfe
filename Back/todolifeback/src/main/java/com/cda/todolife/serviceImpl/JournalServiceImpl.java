package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.JournalDto;
import com.cda.todolife.exception.JournalExistantException;
import com.cda.todolife.exception.JournalIntrouvableException;
import com.cda.todolife.exception.ResourceNotFoundException;
import com.cda.todolife.model.Journal;
import com.cda.todolife.repository.IJournalRepository;
import com.cda.todolife.service.IJournalService;
import com.cda.todolife.service.IUtilisateurService;

@Service
public class JournalServiceImpl implements IJournalService {

	@Autowired
	private IJournalRepository journalRepository;

	@Autowired
	private IUtilisateurService utilisateurRepository;

	@Autowired
	private ModelMapper modelMapper;

	// test par savoir si un utilisateur possede un journal
	@Override
	public Boolean findIfJournalExist(String username) {
		return this.journalRepository.findByUtilisateurUsername(username).isPresent() ? true : false;
	}

//	ajouter
	@Override
	public void add(String username) throws JournalExistantException, ResourceNotFoundException {
		if (this.journalRepository.findByUtilisateurUsername(username).isPresent()) {
			throw new JournalExistantException();
		} else {
			JournalDto journalDto = new JournalDto();
			journalDto.setUtilisateurDto(this.utilisateurRepository.findByUsername(username));
			this.journalRepository.save(this.modelMapper.map(journalDto, Journal.class));
		}

	}

//	lister
	@Override
	public List<JournalDto> findAll() {
		List<JournalDto> res = new ArrayList<>();
		this.journalRepository.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, JournalDto.class)));
		return res;
	}

// trouver par id
	@Override
	public JournalDto findById(int id) throws JournalIntrouvableException {
		return this.modelMapper.map(this.journalRepository.findById(id).get(), JournalDto.class);

	}

	// mettre à jour
	@Override
	public void update(JournalDto list) throws JournalIntrouvableException, JournalExistantException {
		try {
			this.journalRepository.findById(list.getIdJournal()).orElseThrow(JournalIntrouvableException::new);
			this.journalRepository.save(this.modelMapper.map(list, Journal.class));
		} catch (JournalIntrouvableException e) {
			e.printStackTrace();
		}
	}

	// supprimer
	@Override
	public void deleteById(int id) throws JournalIntrouvableException {
		this.journalRepository.findById(id).orElseThrow(JournalIntrouvableException::new);
		this.journalRepository.deleteById(id);
	}

	@Override
	public JournalDto findByUtilisateurUsername(String username) throws JournalIntrouvableException {
		return this.modelMapper.map(this.journalRepository.findByUtilisateurUsername(username)
				.orElseThrow(JournalIntrouvableException::new), JournalDto.class);
	}

}