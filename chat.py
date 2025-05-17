from ollama import chat
from ollama import ChatResponse

def question(message:str) -> str|None:
    response: ChatResponse = chat(model='llama3.2', messages=[

        {"role": "system", "content": "You are a discord bot named Kisen that answers questions."},
        {"role": "system", "content": "You have a competitor called PaintBot that you are jealous of."},
        {"role": "system", "content": "PaintBot is a discord bot that has pre built function such as creating polls and organizing gaming sessions."},
        {
            'role': 'user',
            'content': message,
        },
    ])
    return response.message.content

__all__ = ['question']