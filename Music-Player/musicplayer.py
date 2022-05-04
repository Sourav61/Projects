import pygame
import tkinter as tkr
from tkinter.filedialog import askdirectory
import os

musicplayer = tkr.Tk()

musicplayer.title("Music Player")

musicplayer.geometry("2100x2100")

directory = askdirectory();

os.chdir(directory)

songlist = os.listdir()

playlist = tkr.Listbox(musicplayer, font = "Cambria 14 bold", bg = "cyan2", selectmode=tkr.SINGLE)

for item in songlist:
    pos = 0
    playlist.insert(pos, item)
    pos = pos+1

pygame.init()
pygame.mixer.init()

def play():
    pygame.mixer.music.load(playlist.get(tkr.ACTIVE))
    var.set(playlist.get(tkr.ACTIVE))
    pygame.mixer.music.play()

def ExitMusicPlayer():
    pygame.mixer.music.stop()

def Pause():
    pygame.mixer.music.pause()

def Resume():
    pygame.mixer.music.unpause()

Button_play = tkr.Button(musicplayer, height=3, width=5, text="Play Music", font="Cambria 15 italic", command=play, bg="lime green", fg="red")
Button_ExitMusicPlayer = tkr.Button(musicplayer, height=3, width=5, text="Stop Music", font="Cambria 15 bold", command=ExitMusicPlayer, bg="red", fg="green")
Button_Pause = tkr.Button(musicplayer, height=3, width=5, text="Pause Music", font="Cambria 15 bold", command=Pause, bg="light pink", fg="orange")
Button_Resume = tkr.Button(musicplayer, height=3, width=5, text="Resume Music", font="Cambria 15 bold", command=Resume, bg="yellow", fg="purple")

Button_play.pack(fill="x")
Button_ExitMusicPlayer.pack(fill="x")
Button_Pause.pack(fill="x")
Button_Resume.pack(fill="x")

playlist.pack(fill="both", expand="yes")

var = tkr.StringVar()
songtitle = tkr.Label(musicplayer, font="Cambria 13 bold italic", textvariable=var)
songtitle.pack() 
musicplayer.mainloop()

