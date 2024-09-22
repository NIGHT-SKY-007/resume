import tkinter
import random 

#initialisation of variables
cols=25
rows=25
tile_size=20
window_height=rows*tile_size
window_width=cols*tile_size

#class tile
class Tile:
    def __init__(self,x,y):
        self.x=x
        self.y=y

# tkinter window
window=tkinter.Tk()
window.resizable(False,False)

canvas= tkinter.Canvas(window, width=window_width, height=window_height, bg="black", highlightthickness=0, borderwidth=0)
canvas.pack()
window.update()

#screen placement : center
screen_width=window.winfo_screenwidth()
screen_height=window.winfo_screenheight()
win_width=window.winfo_width()
win_height=window.winfo_height()

x= int((screen_height/2) - (win_height/2))
y= int((screen_width/2) - (win_width/2))

window.geometry(f"{win_height}x{win_width}+{y}+{x}")

#game creation
snake=Tile(1*tile_size,1*tile_size)
food=Tile(5*tile_size,6*tile_size)
coordinateX=0
coordinateY=0
snakeBodyParts=[]
GameOver=False
Score=0

def changedirection(e):
    
    global coordinateY, coordinateX,GameOver
    #print(e.keysym) printing key symbol for checking
    if(GameOver):
        return

    if(e.keysym=="Up" and coordinateY!=1):
        coordinateX = 0
        coordinateY = -1
    elif(e.keysym=="Down" and coordinateY!=-1):
        coordinateX = 0
        coordinateY = 1
    elif(e.keysym=="Left" and coordinateX!=1):
        coordinateX = -1
        coordinateY = 0
    elif(e.keysym=="Right" and coordinateX!=-1):
        coordinateX = 1
        coordinateY = 0

def movement():
    global snake,food,snakeBodyParts,coordinateX,coordinateY,GameOver,Score

    if (GameOver):
        return

    if(snake.x<0 or snake.x>win_width or snake.y<0 or snake.y>=win_height):
        GameOver=True
        return
    
    for everyPart in snakeBodyParts:
        if(snake.x==everyPart.x and snake.y==everyPart.y):
            GameOver=True
            return

    if(food.x == snake.x and food.y == snake.y):
        
        snakeBodyParts.append(Tile(food.x, food.y))
        food.x=random.randint(0,cols-1)*tile_size
        food.y=random.randint(0,rows-1)*tile_size
        Score+=1

    for i in range(len(snakeBodyParts)-1,-1,-1):
        tile=snakeBodyParts[i]
        if(i==0):
            tile.x=snake.x
            tile.y=snake.y
        else:
            previousBodyPart=snakeBodyParts[i-1]
            tile.x=previousBodyPart.x
            tile.y=previousBodyPart.y

    snake.x+=coordinateX*tile_size
    snake.y+=coordinateY*tile_size

    

def draw():
    global snake,food,snakeBodyParts,GameOver,Score
 
    movement()
    canvas.delete("all")

    canvas.create_oval(food.x, food.y, food.x+tile_size, food.y+tile_size, fill="red") #create food
    canvas.create_rectangle(snake.x, snake.y, snake.x+tile_size, snake.y+tile_size, fill="green") #create snake
    
    for bodyPart in snakeBodyParts:
        canvas.create_rectangle(bodyPart.x,bodyPart.y, bodyPart.x+tile_size, bodyPart.y+tile_size, fill="green")

    if(GameOver):
        canvas.create_text(win_height/2,win_width/2, font="Jokerman 40", text=f"Game Over \n Score:   {Score}", fill="red")
    else:
        canvas.create_text(30,20,font="Arial 10", text=f"Score: {Score}", fill="white")

    window.after(100,draw)

draw()

window.bind("<KeyRelease>", changedirection)

window.mainloop()