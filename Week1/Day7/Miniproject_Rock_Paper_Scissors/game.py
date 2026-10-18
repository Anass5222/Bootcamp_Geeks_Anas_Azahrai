import random


class Game:
    ITEMS = ["rock", "paper", "scissors"]

    def get_user_item(self):
        while True:
            item = input("Select an item (rock/paper/scissors): ").strip().lower()
            if item in self.ITEMS:
                return item
            print("Invalid choice, please try again.")

    def get_computer_item(self):
        return random.choice(self.ITEMS)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif user_item == "rock" and computer_item == "scissors":
            return "win"
        elif user_item == "paper" and computer_item == "rock":
            return "win"
        elif user_item == "scissors" and computer_item == "paper":
            return "win"
        else:
            return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        messages = {"win": "You win!", "loss": "You lose!", "draw": "You drew!"}
        print(f"You selected {user_item}. The computer selected {computer_item}. {messages[result]}")
        return result
