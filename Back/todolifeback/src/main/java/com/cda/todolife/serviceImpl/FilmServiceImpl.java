package com.cda.todolife.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cda.todolife.dto.FilmDto;
import com.cda.todolife.dto.WatchListDto;
import com.cda.todolife.exception.FilmExistantException;
import com.cda.todolife.exception.FilmIntrouvableException;
import com.cda.todolife.exception.WatchListIntrouvableException;
import com.cda.todolife.model.Film;
import com.cda.todolife.model.WatchList;
import com.cda.todolife.repository.IFilmRepository;
import com.cda.todolife.repository.IWatchListRepository;
import com.cda.todolife.service.IFilmService;

@Service
public class FilmServiceImpl implements IFilmService {

	@Autowired
	private IFilmRepository filmDao;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private IWatchListRepository watchlistService;

//	ajouter un film
	@Override
	public void add(FilmDto film, int id) throws FilmExistantException, WatchListIntrouvableException {

		Optional<WatchList> watchlistOpt = this.watchlistService.findByUtilisateurIdUtilisateur(id);

		if (watchlistOpt.isEmpty()) {
			throw new FilmExistantException();
		} else {
			Optional<Film> probEntOpt = this.filmDao.findById(film.getIdFilm());
			if (probEntOpt.isPresent()) {
				throw new FilmExistantException();
			} else {
				film.setWatchListDto(this.modelMapper.map(watchlistOpt.get(), WatchListDto.class));
				this.filmDao.save(this.modelMapper.map(film, Film.class));
			}
		}
	}

	// lister les films d'un utilisateur
	@Override
	public List<FilmDto> findAllByIdUtilisateur(int id) {

		Optional<WatchList> watchlist = this.watchlistService.findByUtilisateurIdUtilisateur(id);
		List<FilmDto> filmDto = new ArrayList<FilmDto>();
		this.filmDao.findAllBywatchListIdWatchList(watchlist.get().getIdWatchList())
				.forEach(res -> filmDto.add(this.modelMapper.map(res, FilmDto.class)));

		return filmDto;
	}

//	lister les film
	@Override
	public List<FilmDto> findAll() {
		List<FilmDto> res = new ArrayList<>();
		this.filmDao.findAll().forEach(pres -> res.add(this.modelMapper.map(pres, FilmDto.class)));
		return res;
	}

// trouver par id
	@Override
	public FilmDto findById(int id) throws FilmIntrouvableException {
		return this.modelMapper.map(this.filmDao.findById(id).get(), FilmDto.class);

	}

//	trouver par nom
	@Override
	public FilmDto findByName(String name) throws FilmIntrouvableException {
		return this.modelMapper.map(this.filmDao.findByName(name), FilmDto.class);
	}

	// mettre à jour un film
	@Override
	public void update(FilmDto film, int idFilm) throws FilmIntrouvableException, FilmExistantException {

		Optional<Film> filmTest = this.filmDao.findById(idFilm);

		if (filmTest.get().getIdFilm() == film.getIdFilm()) {
			film.setWatchListDto(this.modelMapper.map(filmTest.get().getWatchList(), WatchListDto.class));
			this.filmDao.save(this.modelMapper.map(film, Film.class));
		} else {
			throw new FilmIntrouvableException();
		}
	}

	// supprimer un film
	@Override
	public void deleteById(int id) throws FilmIntrouvableException {
		this.filmDao.findById(id).orElseThrow(FilmIntrouvableException::new);
		this.filmDao.deleteById(id);
	}

}