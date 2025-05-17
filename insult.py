from ollama import chat
from ollama import ChatResponse

import discord

def insult(member: discord.Member):
    response: ChatResponse = chat(model='llama3.2', messages=[
        {"role": "system", "content": "You create funny and creative insults."},
        {"role": "system", "content": "You always return two words."},
        {"role": "system", "content": "First word is a adjective such as 'Unwashed' and the second word an object such as 'Gremlin'"},
        {
            'role': 'user',
            'content': 'insult ' + member.name,
        },
    ])
    return response.message.content

__all__ = ['insult']