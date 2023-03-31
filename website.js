function openMusicPlayer() {
    // Create a new window for the music player
    var musicPlayerWindow = window.open("", "Music Player", "width=400,height=400");
  
    // Create a new HTML document in the music player window
    var musicPlayerDocument = musicPlayerWindow.document;
    musicPlayerDocument.open();
    musicPlayerDocument.write("<!DOCTYPE html><html><head>");
    musicPlayerDocument.write("<meta charset='utf-8'>");
    musicPlayerDocument.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
    musicPlayerDocument.write("<title>Music Player</title>");
    musicPlayerDocument.write("<script src='libraries/p5.min.js'></script>");
    musicPlayerDocument.write("<script src='libraries/p5.sound.min.js'></script>");
    musicPlayerDocument.write("<script src='musicplayer.js'></script>");
    musicPlayerDocument.write("</head><body>");
    musicPlayerDocument.write("<canvas id='musicPlayerCanvas'></canvas>");
    musicPlayerDocument.write("</body></html>");
    musicPlayerDocument.close();
  }