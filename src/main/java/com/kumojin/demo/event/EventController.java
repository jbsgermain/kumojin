package com.kumojin.demo.event;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventController {
    private final EventRepository eventRepository;

    public EventController(EventRepository eventRepository){
        this.eventRepository = eventRepository;
    }

    @GetMapping("/api/events")
    public Iterable<EventModel> getEvents() {
        return this.eventRepository.findAll();
    }

    @PostMapping("/api/event")
    public EventModel eventSubmit(@RequestBody EventModel request) {
        return this.eventRepository.save(request);
    }
}
