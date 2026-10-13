data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def ask_questions():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        print(item["question"])
        user_answer = input("Enter your answer: ")

        if user_answer.strip().lower() == item["answer"].lower():
            print("Your answer is orrect")
            correct += 1
        else:
            print("You answer is incorrect!")
            incorrect += 1

            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })

    return correct, incorrect, wrong_answers


def show_results(correct, incorrect, wrong_answers):
    print("\n--- QUIZ RESULTS ---")
    print("Correct answers:", correct)
    print("Incorrect answers:", incorrect)

    if wrong_answers:
        print("\nQuestions answered incorrectly:")

        for item in wrong_answers:
            print("\nQuestion:", item["question"])
            print("Your answer:", item["your_answer"])
            print("Correct answer:", item["correct_answer"])


def main():
    while True:
        correct, incorrect, wrong_answers = ask_questions()

        show_results(correct, incorrect, wrong_answers)

        if incorrect > 3:
            replay = input("\nYou had more than 3 wrong answers. Play again? (yes/no): ")
            if replay.strip().lower() in ["yes", "y"]:
                continue

        break

    print("Thanks for playing!")


main()