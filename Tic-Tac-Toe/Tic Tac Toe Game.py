#!/usr/bin/env python
# coding: utf-8

# In[16]:


from IPython.display import clear_output

def display_board(board):
    
    clear_output()
    
    print(board[7]+'|'+board[8]+'|'+board[9])
    print("-|-|-")
    print(board[4]+'|'+board[5]+'|'+board[6])
    print("-|-|-")
    print(board[1]+'|'+board[2]+'|'+board[3])
    


# In[17]:


test_board = ['#','X','O','X','O','X','O','X','O','X']
display_board(test_board) 
display_board(test_board)


# In[18]:


def player_input():
    
    choice = ''
    
    while choice != 'X' and choice != 'O':
        choice = input("Player 1, Please choose X or O: ").upper()
    
    player1 = choice
    
    if player1 == 'X':
        player2 = 'O'
        
    else:
        player2 = 'X'
        
    return (player1,player2)


# In[19]:


player1_choice, player2_choice = player_input()


# In[20]:


player2_choice


# In[21]:


def place_marker(board, choice, position):
    board[position] = choice


# In[22]:


place_marker(test_board,'$',8)
display_board(test_board)


# In[23]:


def win_check(board, mark):
    
    return((board[7] == board[8] == board[9] == mark) or
           (board[4] == board[5] == board[6] == mark) or
           (board[1] == board[2] == board[3] == mark) or 
           (board[7] == board[4] == board[1] == mark) or
           (board[8] == board[5] == board[2] == mark) or
           (board[9] == board[6] == board[3] == mark) or 
           (board[7] == board[5] == board[3] == mark) or
           (board[9] == board[5] == board[1] == mark))


# In[24]:


display_board(test_board)
win_check(test_board,'X')


# In[25]:


import random

def choose_first():
    flip = random.randint(0,1)
    
    if flip == 0:
        return "Player 1"
    else:
        return "Player 2"


# In[26]:


def space_check(board, position):
    
    return board[position] == ' '


# In[27]:


def full_board_check(board):
    
    for i in range(1,10):
        if space_check(board,i):
            return False
        
    return True


# In[28]:


def player_choice(board):
    
    position = 0
    
    while position not in [1,2,3,4,5,6,7,8,9] or not space_check(board,position):
        position = int(input("Choose a position 1-9: "))
    
    return position


# In[29]:


def replay():
    
    choice = input("Play again? Enter Yes or No ")
    
    return choice == 'Yes'


# In[32]:


print('Welcome to Tic Tac Toe!')

while True:
    # Set the game up here
    the_board = [' ']*10
    player1_choice, player2_choice == player_input()
    
    turn = choose_first()
    print(turn + " will go first")
    
    play_game = input("Ready to play? y or n? ")
    
    if play_game == 'y':
        game_on = True
    else:
        game_on = False

    while game_on:
        
        #Player 1 Turn
        if turn == 'Player 1':
            
            display_board(the_board)
            position = player_choice(the_board)
            place_marker(the_board,player1_choice,position)
            
            if win_check(the_board,player1_choice):
                display_board(the_board)
                print("PLAYER 1 HAS WON!")
                game_on = False
            else:
                if full_board_check(the_board):
                    display_board(the_board)
                    print("TIE GAME")
                    game_on = False
                else:
                    turn = 'Player 2'
        else:
            
            display_board(the_board)
            position = player_choice(the_board)
            place_marker(the_board,player2_choice,position)
            
            if win_check(the_board,player2_choice):
                display_board(the_board)
                print("PLAYER 2 HAS WON!")
                game_on = False
            else:
                if full_board_check(the_board):
                    display_board(the_board)
                    print("TIE GAME")
                    game_on = False
                else:
                    turn = 'Player 1'
    if not replay():
        break

