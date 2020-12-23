---
title: "ePaper Dashboard"
tags: ["Python", "Waveshare", "ePaper", "Raspberry Pi"]
date: "2020-05-14"
---

So, recently I got my hands on an e-paper display. I'm talking about [this one.](https://www.waveshare.com/wiki/2.7inch_e-Paper_HAT_(B))
Doesn't seem that impressive at first, but it's really fun to get your feet wet with hardware programming. The display gets
mounted on the GPIO pins of a Raspberry Pi and can render texts and images, either in black or red.

But why though?

Because I wanted to do something else than web devevlopment / Frontend stuff for a change. :-)

And what does it do?

The display has 4 buttons on which I placed different functions, written in Python.

- Key1: Clear display, to prevent any burn in / ghosting
- Key2: Fetch todos from my Nextcloud server sorted by creation date
- Key3: Coffee break! Renders a nice cup of coffee
- Key4: Fetch current weather information from openweathermap (huge shoutout to [Protostax and their tutorial](https://www.hackster.io/sridhar-rajagopal/weather-station-with-epaper-and-raspberry-pi-c26a70), which really made the start easy for me!)
