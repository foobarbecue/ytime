/**
 * Adds a square marker just below the time bar when run on the youtube.com player.
 * Only visible when time bar is shown (this happens if you mouseover the video).
 * @param {string} - The number of seconds since the beginning of the video at which to add the marker
 */
function addMarkerAtTime(seconds){
    const prog_bar = document.getElementsByClassName('ytp-progress-bar')[0];
    const vid_length = prog_bar.getAttribute('aria-valuemax');
    const time_marker = document.createElement('div');
    const time_perc = seconds / vid_length * 100;
    console.log(time_perc);
    time_marker.setAttribute('id','time_marker');
    time_marker.setAttribute('style',`height:10px; width:10px; background:green; position:absolute; left: ${time_perc}%`);
    prog_bar.appendChild(time_marker);
}

