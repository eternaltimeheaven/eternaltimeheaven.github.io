var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#449F36',
    progressColor: 'yellow'
});
wavesurfer.load('assets/music/HOME.mp3');
wavesurfer.on('ready', function () {
    wavesurfer.play();
});