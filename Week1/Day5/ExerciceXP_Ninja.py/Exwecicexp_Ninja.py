class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        entry = f"{self.phone_number} called {other_phone.phone_number}"
        print(entry)
        self.call_history.append(entry)

    def show_call_history(self):
        print(self.call_history)

    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content,
        }
        
        self.messages.append(message)
        other_phone.messages.append(message)

    def show_outgoing_messages(self):
        for m in self.messages:
            if m["from"] == self.phone_number:
                print(m)

    def show_incoming_messages(self):
        for m in self.messages:
            if m["to"] == self.phone_number:
                print(m)

    def show_messages_from(self, number):
        # Accepts a phone number or a Phone object
        number = getattr(number, "phone_number", number)
        for m in self.messages:
            if m["from"] == number and m["to"] == self.phone_number:
                print(m)


# ---- Tests ----
if __name__ == "__main__":
    Souad = Phone("0767898860")
    Omar = Phone("050-555-8888")

    Souad.call(Omar)
    Omar.call(Souad)
    Souad.call(Omar)
    print("\nSouad's call history:")
    Souad.show_call_history()

    Souad.send_message(Omar, "Hi Omar!")
    Omar.send_message(  Souad, "Hey , what's up?")
    Souad.send_message(Omar, "Not much, you?")

    print("\nSouad outgoing:")
    Souad.show_outgoing_messages()
    print("\nAlice incoming:")
    Souad.show_incoming_messages()
    print("\nOmar messages from Souad:")
    Omar.show_messages_from(Souad.phone_number)