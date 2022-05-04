import pygame
from time import sleep
pygame.init()
window = pygame.display.set_mode((0,0),pygame.FULLSCREEN)

pygame.mixer.init()
pygame.mixer.music.load('Mom.mp3')
pygame.mixer.music.play()

pygame.mixer.music.load('Mom.mp3')
pygame.mixer.music.play()
image = pygame.image.load('OIP (2).jpg')
window.blit(image,(200,150))
pygame.display.update()
sleep(13)
