class Song():
    print(" lyrics of a song")

    def __init__(self,lyrics):
        self.lyrics=lyrics


    
    def ing_me_a_song(self):
        for lyric in self.lyrics:
            print(lyric)


stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.ing_me_a_song()