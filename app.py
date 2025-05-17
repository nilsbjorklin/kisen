import discord
from discord.ext import commands
from discord.ext.commands import Context
import os

from insult import insult
from chat import question

description = 'Mr kisen.'

intents = discord.Intents.default()
intents.members = True
intents.message_content = True

bot = commands.Bot(command_prefix='$', description=description, intents=intents)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user} (ID: {bot.user.id})')
    print('------')

@bot.command(description='Disses a member')
async def diss(ctx:Context, member: discord.Member = commands.Author):
    """Disses a member"""
    await think(ctx, lambda: f'{member.mention} is a {insult(member)}')

@bot.command(description='Chatting')
async def chat(ctx:Context, *message:str):
    """Answers a question"""
    await think(ctx, lambda:question(' '.join(message)))

async def think(ctx:Context, func:lambda:str):
    thinking = await ctx.send(':thinking:')
    await ctx.send(func())
    await thinking.delete()

print(os.environ, os.environ.get('DISCORD_TOKEN'))

bot.run(os.environ.get('DISCORD_TOKEN'))