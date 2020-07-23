# Commands

This is a detailed list of the bot's commands. You can use the sidebar on your left (click the hamburger icon if you're on mobile) to quickly jump to a command.

If you want to add examples or improve this documentation in general, feel free to make a pull request on GitHub as noted [here](/?id=contributing).

!> The prefix used here is `m!`. If you have set your prefix to something else, use that instead! (e.g. if your prefix is `$`, use `$category`)

## category

`category` is used to manage the Server Stats category. It is not necessary to have this, so feel free to remove it or rename it to anything you like.

`m!category create` creates a new category if there is not already one. The category is created all the way at the bottom of the channel list. Feel free to move it anywhere.

`m!category update` moves all the (loose) counters in your server into the category. If there is none, use `m!category create`.

## counter

!> The youtube counter currently DOES NOT work!

`counter` is used to manage the counters in your server. Deleting or adding counters manually does not work, they have to be created through the bot.

You can turn a counter on and off by using `m!counter <counter> <on | off>`

Free counters:
 - members (users + bots)
 - users (humans)
 - bots (bots)
 - roles (total roles)
 - channels (total channels)

Premium counters (tier 2):
 - role (members in a role)*
 - online (online members)
 - offline (offline members)
 - youtube (subscribers, views, and videos)*

?> There is common confusion between the role**s** and role counter. Make sure you don't use 'role' when you mean to turn off 'roles'.

---

\* These counters have different usage. Instead on and off, these use add and remove (since there can be multiple role counters (30) and multiple youtube counters (5)).
- role: `m!counter role <add | remove> <role name | role @mention>`
- youtube: `m!counter youtube <add | remove> <subscribers | views | videos> <youtube channel ID (starts with UC)>`
  - The channel ID is usually found in the url of the channel page (see *https[]()://youtube.com/channel/UCuAXFkgsw1L7xaCfnd5JJOw* for example).
  
`m!counter update` was removed due to newly 

#### Examples:
- members: `m!counter members off`
- channels: `m!counter channels on`, etc.


- role: `m!counter role add Tier 1 Patrons` or `m!counter role add @Tier 1 Patrons`.\
In the latter (@mention) example, make sure that you actually mention the role (it appears highlighted).
- youtube: `m!counter youtube add subscribers UCuAXFkgsw1L7xaCfnd5JJOw`

## countername

?> This feature is currently premium (tier 1).
Note that in all the following examples random numbers are used to replace '{count}'.

`countername` changes the name of the specified counter. It allows for great customisation due to the usage of the necessary '{count}' string.
In the displayed name of your counter, '{count}' will be replaced by the number. Again, the role and youtube counters have different usage.

`m!countername <counter> <new name including '{count}'>`

#### Examples:
- `m!countername members Members: {count}` will change the name of the members counter to 'Members: 78'
- `m!countername users {count} awesome people!` will change the name of the users counter to '72 awesome people!'
- `m!countername bots 🤖 | {count}` will change the name of the bots counter to '🤖 | 6'


- `m!countername youtube views UCuAXFkgsw1L7xaCfnd5JJOw {count} people got rickrolled` will change the name of the views counter for UCuAXFkgsw1L7xaCfnd5JJOw to '936,736,435 people got rickrolled'

Due to the role counter allowing the name of the role as a parameter, it has to be put between double quotes ("), but you can use the @mention without double quotes:
- `m!countername role "Limited Patron Tier" Limited Patrons: {count}/250` will change the name of the Limited Patron Tier counter to 'Limited Patrons: 185/250'
  - Or alternatively, `m!countername role @Limited Patron Tier Limited Patrons: {count}/250`. Again, make sure the mentioned role name is highlighted in Discord.

## setup

`setup` creates the '📊 Server Stats 📊' category, creates the members, users, bots, roles and channels counters and alongside that reverts the bot back to default settings.

## memberlist

?> If your server is bigger than 250 members, this will likely not return the complete member list.

`memberlist` creates a text file that lists all the members in your server along with chosen properties. The order of these properties doesn't matter. Discord username and tag is always included.

List of properties:
- `-nicks`      include the nicknames of the members.
- `-ids`        include the IDs of the members.
- `-created`    include the account creation dates of the members.
- `-joined`     include the server join dates of the members.
- `-roles`      include the roles of the members.

#### Examples:
- `m!memberlist -joined -ids -roles` creates a text file with the usernames, join dates, ids and roles of your server members.
- `m!memberlist -nicks` creates a text file with the usernames and nicknames of your server members.

#### Example files:
Done in a test server, that's why they're so tiny (yes, one of the roles is called Premium " :''dsadas'sa;]'.']).
- No properties: https://hastebin.com/raw/vowokeziwi
- All properties: https://hastebin.com/raw/iqabeqepel

## prefix

?> Forgot your prefix? Use `@Member Count#7205 prefix`

`prefix` changes the bot's prefix in your server.

`m!prefix <new prefix>` changes the bot's prefix for your server to 'new prefix'.

## help

`help` is the bot's help menu. Using this command without any arguments displays all commands.

`m!help <command>` provides a brief documentation of a specific command (with usage and examples).

## invite

`invite` returns the bot's invite link.

## support

`support` returns a link to the Member Count Support server (https://discord.gg/dWMgWWw).

## data

`data` returns the data the bot has stored about your server. Removing the bot from your server deletes it as expected.

## info

`info` returns some information about the bot, like number of votes and hardware usage.

## ping

`ping` returns the latency between the bot and Discord in milliseconds. Useful for checking if the bot is online, however please go to the support server if it is..