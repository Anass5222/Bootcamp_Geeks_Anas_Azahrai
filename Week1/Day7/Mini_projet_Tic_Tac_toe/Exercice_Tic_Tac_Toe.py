def create_board():
    return [[" ", " ", " "] for _ in range(3)]


def display_board(board):
    print("\nTIC TAC TOE")
    print("*" * 15)
    for i, row in enumerate(board):
        print(f"*  {row[0]} | {row[1]} | {row[2]}  *")
        if i < 2:
            print("* ---|---|--- *")
    print("*" * 15)


def player_input(player, board):
<<<<<<< HEAD
   
=======
    """Ask the player for a row and a column (1 to 3) until the move is valid."""
>>>>>>> origin/main
    while True:
        try:
            row = int(input("Enter row: "))
            col = int(input("Enter column: "))
        except ValueError:
            print("Please enter numbers only.")
            continue

        if not (1 <= row <= 3 and 1 <= col <= 3):
            print("Row and column must be between 1 and 3.")
        elif board[row - 1][col - 1] != " ":
            print("That square is already taken. Try again.")
        else:
            return row - 1, col - 1


def check_win(board, player):
    # rows and columns
    for i in range(3):
        if all(board[i][j] == player for j in range(3)):
            return True
        if all(board[j][i] == player for j in range(3)):
            return True
    # diagonals
    if all(board[i][i] == player for i in range(3)):
        return True
    if all(board[i][2 - i] == player for i in range(3)):
        return True
    return False


def is_full(board):
    return all(cell != " " for row in board for cell in row)


def play():
    print("Welcome to TIC TAC TOE!")
    board = create_board()
    player = "X"

    while True:
        display_board(board)
        print(f"\nPlayer {player}'s turn...\n")

        row, col = player_input(player, board)
        board[row][col] = player

        if check_win(board, player):
            display_board(board)
            print(f"\nPlayer {player} wins! Congratulations!")
            break

        if is_full(board):
            display_board(board)
            print("\nIt's a tie!")
            break

        player = "O" if player == "X" else "X"


if __name__ == "__main__":
    play()