class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            raise Exception("Your username or password is incorrect")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("You must be authenticated")
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("The amount must be a positive integer")
        self.balance += amount

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("You must be authenticated")
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("The amount must be a positive integer")
        self.balance -= amount


class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=0):
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("You must be authenticated")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Insufficient funds: balance must stay above the minimum balance")
        super().withdraw(amount)


class ATM:
    def __init__(self, account_list, try_limit):
    
        if not isinstance(account_list, list):
            raise Exception("account_list must be a list")
        for account in account_list:
            if not isinstance(account, (BankAccount, MinimumBalanceAccount)):
                raise Exception("account_list must contain only BankAccount or MinimumBalanceAccount")
        self.account_list = account_list

        try:
            if not isinstance(try_limit, (int, float)) or try_limit <= 0:
                raise Exception("try_limit must be a positive number")
            self.try_limit = try_limit
        except Exception as e:
            print("Error:", e)
            self.try_limit = 2

        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n--- Main Menu ---")
            print("1. Log in")
            print("2. Exit")
            choice = input("Choose an option: ")

            if choice == "1":
                username = input("Username: ")
                password = input("Password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Goodbye!")
                break
            else:
                print("Invalid choice")

    def log_in(self, username, password):
        while True:
            for account in self.account_list:
                try:
                    account.authenticate(username, password)
                    self.current_tries = 0
                    self.show_account_menu(account)
                    return
                except Exception:
                    pass

            
            self.current_tries += 1
            if self.current_tries >= self.try_limit:
                print("You reached the maximum number of tries. Shutting down.")
                exit()
            print("Incorrect username or password. Try again.")
            username = input("Username: ")
            password = input("Password: ")

    def show_account_menu(self, account):
        while True:
            print("\n--- Account Menu ---")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Choose an option: ")

            try:
                if choice == "1":
                    amount = int(input("Amount to deposit: "))
                    account.deposit(amount)
                    print("New balance:", account.balance)
                elif choice == "2":
                    amount = int(input("Amount to withdraw: "))
                    account.withdraw(amount)
                    print("New balance:", account.balance)
                elif choice == "3":
                    account.authenticated = False
                    print("Logged out.")
                    break
                else:
                    print("Invalid choice")
            except Exception as e:
                print("Error:", e)

#######################Test###############################

acc1 = BankAccount("sara", "1234", 100)
acc2 = MinimumBalanceAccount("ali", "abcd", 200, 50)


print(acc1.username, acc1.balance, acc1.authenticated)   
print(acc2.minimum_balance)                              

try:
    acc1.deposit(50)
except Exception as e:
    print("Erreur :", e)         


try:
    acc1.authenticate("sara", "0000")
except Exception as e:
    print("Erreur :", e)          


acc1.authenticate("sara", "1234")
print(acc1.authenticated)         
acc1.deposit(50)
print(acc1.balance)               
acc1.withdraw(30)
print(acc1.balance)               

for bad in [-5, 0, 3.5, "abc"]:
    try:
        acc1.deposit(bad)
    except Exception as e:
        print(bad, "->", e)       


acc2.authenticate("ali", "abcd")
acc2.withdraw(150)
print(acc2.balance)               
try:
    acc2.withdraw(10)
except Exception as e:
    print("Erreur :", e)          


    